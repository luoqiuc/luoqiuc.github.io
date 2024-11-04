---
title: 使用Shell脚本批量调用REST接口
date: 2024年10月31日17:12:35
# 一个页面可以有多个分类
category:
  - Linux
  - Shell
# 一个页面可以有多个标签
tag:
  - Shell
# 是否置顶
sticky: true
# 是否收藏
star: false
# 侧边栏的顺序
# 数字越小越靠前，支持非整数和负数，比如 -10 < -9.5 < 3.2, order 为 -10 的文章会最靠上。
# 个人偏好将非干货或随想短文的 order 设置在 -0.01 到 -0.99，将干货类长文的 order 设置在 -1 到负无穷。每次新增文章都会在上一篇的基础上递减 order 值。
order: -1
---

# 使用Shell脚本批量调用REST接口

## 背景介绍

在日常运维工作中，我们经常需要批量调用REST接口来处理数据或触发某些操作。本文将介绍如何使用Shell脚本来实现批量调用REST接口的功能，并包含完整的日志记录和错误处理机制。

## 需求描述

1. 从文本文件中读取URL列表
2. 使用curl命令依次调用每个接口
3. 记录调用结果和响应状态
4. 统计成功和失败数量
5. 生成详细的执行日志

## 实现方案

### 1. 准备URL文件

首先创建一个`url.txt`文件，每行包含一个需要调用的URL地址：

```text
http://api.example.com/service/retry/123456789
http://api.example.com/service/retry/987654321
http://api.example.com/service/retry/456789123
```

### 2. Shell脚本实现

创建批量调用脚本`batch_curl.sh`：

```bash
#!/bin/bash

# 定义日志文件
LOG_FILE="curl_results.log"
ERROR_FILE="curl_errors.log"

# 检查url.txt文件是否存在
if [ ! -f "url.txt" ]; then
    echo "错误: url.txt文件不存在"
    exit 1
fi

# 清空之前的日志文件
> "$LOG_FILE"
> "$ERROR_FILE"

# 获取开始时间
START_TIME=$(date +"%Y-%m-%d %H:%M:%S")
echo "开始执行时间: $START_TIME" | tee -a "$LOG_FILE"
echo "----------------------------------------" | tee -a "$LOG_FILE"

# 计数器
TOTAL=0
SUCCESS=0
FAILED=0

# 读取url.txt中的每一行并执行curl
while IFS= read -r url || [ -n "$url" ]; do
    # 跳过空行
    if [ -z "$url" ]; then
        continue
    fi
    
    TOTAL=$((TOTAL + 1))
    echo "正在处理 [$TOTAL]: $url" | tee -a "$LOG_FILE"
    
    # 执行curl命令，设置超时时间为30秒
    response=$(curl -s -w "\n%{http_code}" --connect-timeout 30 "$url" 2>>"$ERROR_FILE")
    
    # 获取HTTP状态码（最后一行）
    http_code=$(echo "$response" | tail -n1)
    # 获取响应内容（除去最后一行）
    content=$(echo "$response" | sed '$d')
    
    # 检查HTTP状态码
    if [ "$http_code" -eq 200 ]; then
        echo "成功: HTTP $http_code" | tee -a "$LOG_FILE"
        SUCCESS=$((SUCCESS + 1))
    else
        echo "失败: HTTP $http_code" | tee -a "$LOG_FILE"
        echo "响应内容: $content" | tee -a "$LOG_FILE"
        FAILED=$((FAILED + 1))
    fi
    
    echo "----------------------------------------" | tee -a "$LOG_FILE"
    
    # 休眠1秒，避免请求过于频繁
    sleep 1
    
done < "url.txt"

# 获取结束时间
END_TIME=$(date +"%Y-%m-%d %H:%M:%S")

# 输出统计信息
echo "执行完成！" | tee -a "$LOG_FILE"
echo "开始时间: $START_TIME" | tee -a "$LOG_FILE"
echo "结束时间: $END_TIME" | tee -a "$LOG_FILE"
echo "总计URL数: $TOTAL" | tee -a "$LOG_FILE"
echo "成功数: $SUCCESS" | tee -a "$LOG_FILE"
echo "失败数: $FAILED" | tee -a "$LOG_FILE"
```

### 3. 脚本功能说明

1. **日志管理**
   - `curl_results.log`: 记录所有操作日志和统计信息
   - `curl_errors.log`: 记录curl命令执行时的错误信息

2. **错误处理**
   - 检查url.txt文件是否存在
   - 捕获并记录HTTP错误状态码
   - 记录失败请求的响应内容

3. **性能考虑**
   - 设置curl超时时间为30秒
   - 请求间隔1秒，避免对服务器造成压力

4. **统计功能**
   - 记录总请求数
   - 统计成功和失败数量
   - 记录开始和结束时间

### 4. 使用说明

1. 创建脚本文件：
```bash
vim batch_curl.sh
```

2. 复制上述脚本内容到文件中

3. 添加执行权限：
```bash
chmod +x batch_curl.sh
```

4. 确保url.txt文件存在并包含要调用的URL列表

5. 执行脚本：
```bash
./batch_curl.sh
```

### 5. 执行结果示例

```text
开始执行时间: 2024-10-31 10:30:00
----------------------------------------
正在处理 [1]: http://api.example.com/service/retry/123456789
成功: HTTP 200
----------------------------------------
正在处理 [2]: http://api.example.com/service/retry/987654321
成功: HTTP 200
----------------------------------------
正在处理 [3]: http://api.example.com/service/retry/456789123
失败: HTTP 404
响应内容: {"error": "Not Found"}
----------------------------------------
执行完成！
开始时间: 2024-10-31 10:30:00
结束时间: 2024-10-31 10:30:03
总计URL数: 3
成功数: 2
失败数: 1
```

## 注意事项

1. 执行前请确保有正确的接口访问权限
2. 根据实际需求调整请求间隔时间
3. 根据网络情况调整超时时间
4. 定期清理日志文件避免占用磁盘空间
5. 建议在非高峰期执行批量操作

## 扩展优化

1. 可以添加命令行参数支持，实现更灵活的配置
2. 可以添加邮件通知功能，在执行完成后发送统计结果
3. 可以添加重试机制，对失败的请求进行重试
4. 可以添加并发处理功能，提高处理效率
5. 可以添加进度条显示功能，提供更直观的执行进度

## 总结

这个Shell脚本提供了一个简单但完整的批量调用REST接口的解决方案。它包含了基本的错误处理、日志记录和统计功能，可以满足大多数批量处理场景的需求。根据实际使用情况，你可以对脚本进行调整和扩展，添加更多功能。