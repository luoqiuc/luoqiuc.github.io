---
title: MongoDB 崩溃分析与修复指南
date: 2024年10月25日10:59:41
# 一个页面可以有多个分类
category:
  - MongoDB
# 一个页面可以有多个标签
tag:
  - 服务宕机
# 是否置顶
sticky: false
# 是否收藏
star: false
# 侧边栏的顺序
# 数字越小越靠前，支持非整数和负数，比如 -10 < -9.5 < 3.2, order 为 -10 的文章会最靠上。
# 个人偏好将非干货或随想短文的 order 设置在 -0.01 到 -0.99，
# 将干货类长文的 order 设置在 -1 到负无穷。每次新增文章都会在上一篇的基础上递减 order 值。
order: -0.01
---

### MongoDB 崩溃分析与修复指南

在运行 MongoDB 时，有时会遇到崩溃问题，导致数据库服务不可用。最近在一次服务器运行过程中，MongoDB 由于异常导致崩溃。本文将分析该崩溃日志并提供相应的修复步骤，帮助你快速解决类似问题。

#### 崩溃日志分析

根据 MongoDB 提供的日志，崩溃时的关键信息如下：

```json
{
  "t": {"$date": "2024-10-25T03:13:56.340+08:00"},
  "s": "F",
  "c": "CONTROL",
  "id": 4757800,
  "ctx": "ftdc",
  "msg": "Writing fatal message",
  "attr": {
    "message": "terminate() called. An exception is active; attempting to gather more information"
  }
}
{
  "t": {"$date": "2024-10-25T03:13:56.454+08:00"},
  "s": "F",
  "c": "CONTROL",
  "id": 4757800,
  "ctx": "ftdc",
  "msg": "Writing fatal message",
  "attr": {
    "message": "DBException::toString(): FileStreamFailed: Failed to write to interim file buffer for full-time diagnostic data capture: /mnt/data/qysd/mongo/diagnostic.data/metrics.interim.temp\nActual exception type: mongo::error_details::ExceptionForImpl<(mongo::ErrorCodes::Error)39, mongo::AssertionException>"
  }
}
```

从日志中，我们可以提取出以下几点关键信息：

- **崩溃原因**：MongoDB 在执行 `terminate()` 之前，试图写入诊断数据临时文件时失败。报错的具体路径是 `/mnt/data/qysd/mongo/diagnostic.data/metrics.interim.temp`，错误代码为 `ErrorCodes::Error 39`。
- **异常描述**：异常类型为 `FileStreamFailed`，表明 MongoDB 无法写入该临时文件，可能是由于磁盘问题、权限不足或磁盘空间不足等原因。
- **回溯信息**：日志显示了详细的回溯（Backtrace），这有助于开发人员追踪崩溃的具体调用路径。

#### 磁盘空间检查

使用 `df -h` 命令检查磁盘空间状况：

```bash
Filesystem      Size  Used Avail Use% Mounted on
/dev/nvme0n1p1  100G   73G   25G  73% /mnt/data
```

从输出结果可以看到，`/mnt/data` 仍有 25 GB 可用空间，磁盘空间似乎充足，但并不能排除文件系统配额限制或特定目录权限问题。

#### 可能的崩溃原因

1. **文件系统权限不足**：
   - MongoDB 可能对 `/mnt/data/qysd/mongo/diagnostic.data/` 目录没有足够的写权限。

2. **文件系统配额或限制**：
   - 尽管磁盘空间充足，仍可能由于文件系统的配额或限制，导致 MongoDB 无法写入。

3. **磁盘 I/O 错误或文件系统损坏**：
   - 磁盘可能存在损坏，或文件系统出现错误，导致 MongoDB 写入失败。

#### 修复步骤

根据上述分析，提出了以下修复建议：

1. **检查磁盘健康状态**
   - 使用 `dmesg` 命令查看是否有 I/O 错误或磁盘相关问题：
   
     ```bash
     dmesg | grep -i "I/O error"
     ```
   
   - 运行 `fsck` 命令对相关分区进行文件系统检查：
   
     ```bash
     sudo fsck /dev/nvme0n1p1
     ```

2. **检查文件系统权限**
   - 验证 MongoDB 对 `/mnt/data/qysd/mongo/diagnostic.data/` 目录是否具有写权限：
   
     ```bash
     ls -ld /mnt/data/qysd/mongo/diagnostic.data/
     ```
   
   - 如果权限不足，可以通过 `chmod` 或 `chown` 命令修正权限：
   
     ```bash
     sudo chmod 755 /mnt/data/qysd/mongo/diagnostic.data/
     sudo chown mongodb:mongodb /mnt/data/qysd/mongo/diagnostic.data/
     ```

3. **检查磁盘配额**
   - 查看是否启用了磁盘配额，限制了 MongoDB 的写入操作：
   
     ```bash
     sudo repquota /mnt/data
     ```

4. **重启 MongoDB**
   - 在解决了磁盘或权限问题后，可以尝试重启 MongoDB 并查看其运行状态：
   
     ```bash
     sudo systemctl restart mongod
     ```

   - 查看重启后的日志，确保没有再次出现同样的问题：

     ```bash
     tail -f /var/log/mongodb/mongod.log
     ```

#### 总结

MongoDB 崩溃的常见原因包括文件系统权限问题、磁盘空间不足或 I/O 错误等。在这次崩溃事件中，通过分析日志，我们发现 MongoDB 在尝试写入诊断数据时失败，原因可能是文件系统或磁盘问题。通过检查磁盘状态、修复权限问题并重启服务，可以有效解决此类问题。

#### 参考命令

- 检查磁盘状态：`dmesg`
- 文件系统检查：`fsck`
- 检查权限：`ls -ld`
- 修改权限：`chmod`、`chown`
- 检查磁盘配额：`repquota`
- 重启 MongoDB：`systemctl restart mongod`

---

