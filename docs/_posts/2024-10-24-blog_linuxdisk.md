---
title: CentOS7在线扩展根分区
date: 2024年10月24日12:16:05
# 一个页面可以有多个分类
category:
  - Linux
# 一个页面可以有多个标签
tag:
  - disk
# 是否置顶
sticky: false
# 是否收藏
star: false
# 侧边栏的顺序
# 数字越小越靠前，支持非整数和负数，比如 -10 < -9.5 < 3.2, order 为 -10 的文章会最靠上。
# 个人偏好将非干货或随想短文的 order 设置在 -0.01 到 -0.99，将干货类长文的 order 设置在 -1 到负无穷。每次新增文章都会在上一篇的基础上递减 order 值。
order: -1
---

# CentOS7在线扩展根分区

## 背景

在 Linux 系统运维中，经常会遇到根分区空间不足的情况。本文将介绍如何在 CentOS 7 系统中，通过删除 home 分区来扩展根分区的大小。

## 环境说明

系统环境：
```bash
[root@test ~]# cat /etc/redhat-release 
CentOS Linux release 7.6.1810 (Core) 
```

原始分区情况：
```bash
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
vda    253:0    0  100G  0 disk 
├─vda1 253:1    0    1G  0 part /boot
├─vda2 253:2    0   40G  0 part /
├─vda3 253:3    0   16G  0 part [SWAP]
├─vda4 253:4    0    1K  0 part 
└─vda5 253:5    0   43G  0 part /home
vdb    253:16   0  300G  0 disk 
└─vdb1 253:17   0  300G  0 part /data
```

## 操作步骤

### 1. 数据备份
首先，为了安全起见，需要备份 /home 目录中的数据：

```bash
# 备份home目录到data分区（确保data分区有足够空间）
tar -czf /data/home_backup.tar.gz /home/
```

### 2. 卸载 home 分区

```bash
# 卸载home分区
umount /home

# 确认没有进程使用home分区
fuser -m /home
lsof | grep /home
```

### 3. 删除阻碍分区
由于分区的物理位置限制，需要依次删除 home 分区、swap 分区和扩展分区：

```bash
# 关闭swap
swapoff -a

# 使用fdisk删除分区
fdisk /dev/vda

# 在fdisk中依次执行：
# p    查看当前分区
# d    删除分区
# 5    选择删除home分区(vda5)
# d    删除分区
# 3    选择删除swap分区(vda3)
# d    删除分区
# 4    选择删除扩展分区(vda4)
# w    保存并退出
```

### 4. 更新分区表
删除分区后，需要更新系统的分区表：

```bash
partprobe /dev/vda
```

如果出现以下错误：
```
WARNING: Re-reading the partition table failed with error 16: Device or resource busy.
The kernel still uses the old table. The new table will be used at
the next reboot or after you run partprobe(8) or kpartx(8)
```

可以尝试：
1. 再次执行 `partprobe /dev/vda`
2. 或者执行 `reboot` 重启系统（如果可以接受重启）

### 5. 扩展根分区

```bash
# 安装growpart工具（如果没有）
yum install cloud-utils-growpart

# 扩展vda2分区
growpart /dev/vda 2

# 扩展文件系统
# 如果是xfs文件系统（CentOS 7默认）
xfs_growfs /

# 如果是ext4文件系统
resize2fs /dev/vda2
```

### 6. 重建 swap 分区

```bash
# 使用fdisk创建新的swap分区
fdisk /dev/vda

# 在fdisk中：
# n    创建新分区
# t    改变分区类型
# 82   选择swap类型
# w    保存并退出

# 格式化swap分区
mkswap /dev/vda3

# 获取新swap分区的UUID
blkid /dev/vda3

# 更新/etc/fstab中的swap分区UUID
vi /etc/fstab

# 启用swap
swapon -a
```

### 7. 验证结果

```bash
# 检查分区大小
df -h

# 检查swap状态
free -h

# 查看最终分区情况
lsblk
```

## 注意事项

1. 操作前必须做好数据备份
2. 确保系统有足够的空间存放备份文件
3. 操作时系统负载应该尽量小
4. 整个过程要特别注意 swap 分区的处理
5. 如果可能的话，建议在维护窗口期进行操作
6. 如果使用的是 LVM，操作方式会有所不同

## 故障排查

1. 如果无法卸载 home 分区，可以使用 `fuser -m /home` 查看占用进程
2. 如果分区表更新失败，可以尝试重启系统
3. 如果文件系统扩展失败，确认是否安装了相应的工具包

## 总结

通过以上步骤，我们成功将原来的 home 分区空间合并到了根分区中。这种方法虽然操作相对复杂，但是可以在线完成，对系统的影响相对较小。在实际操作中，建议先在测试环境进行验证，并且做好完整的备份和回退预案。