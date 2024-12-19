---
title: curl使用说明
date: 2024-09-27 17:20:49
# 一个页面可以有多个分类
category:
  - curl
# 一个页面可以有多个标签
tag:
  - curl
# 是否置顶
sticky: false
# 是否收藏
star: false
# 侧边栏的顺序
# 数字越小越靠前，支持非整数和负数，比如 -10 < -9.5 < 3.2, order 为 -10 的文章会最靠上。
# 个人偏好将非干货或随想短文的 order 设置在 -0.01 到 -0.99，将干货类长文的 order 设置在 -1 到负无穷。每次新增文章都会在上一篇的基础上递减 order 值。
order: -1
---

# curl使用说明
[参考地址](https://catonmat.net/cookbooks/curl)

> 遇到使用场景后续在补充

## 配置请求的cookie
```bash
curl http://localhost:9600/getuser --cookie "USER_TOKEN=xxxxxxxxxxxxxxxxxx"
```
## 配置请求头的参数
```bash
curl http://localhost:9600/getuser -H "X-Request-Id:12"
```
## 发送post请求
```bash
curl -X POST http://localhost:9600/putuser -H "X-Request-Id:12"
```

## 发送带请求体的POST请求
```bash
# 发送JSON数据
curl -X POST -H "Content-Type: application/json" -d '{"name":"张三","age":18}' http://localhost:9600/user

# 发送表单数据
curl -X POST -d "name=张三&age=18" http://localhost:9600/user
```

## 下载文件
```bash 
# 下载并保存为原文件名
curl -O https://example.com/file.zip

# 下载并指定保存的文件名
curl -o myfile.zip https://example.com/file.zip
```

## 显示详细的请求��息
```bash
# -v 参数可以显示请求的详细信息,包括请求头、响应头等
curl -v http://localhost:9600/getuser

# -i 参数可以显示响应头信息
curl -i http://localhost:9600/getuser
```

## 跟随重定向
```bash
# -L 参数可以跟随30x重定向
curl -L http://localhost:9600/redirect
```

## 设置超时时间
```bash
# 设置连接超时时间为5秒
curl --connect-timeout 5 http://localhost:9600/getuser
```

## 上传文件
```bash
# 上传单个文件
curl -F "file=@/path/to/local/file.txt" http://localhost:9600/upload

# 上传多个文件
curl -F "file1=@/path/to/file1.txt" -F "file2=@/path/to/file2.txt" http://localhost:9600/upload
```
