---
title: Linux LVM磁盘在线扩容教程
date: 2024年10月31日14:34:51
# 一个页面可以有多个分类
category:
  - Linux
  - LVM
# 一个页面可以有多个标签
tag:
  - LVM
  - parted
# 是否置顶
sticky: true
# 是否收藏
star: false
# 侧边栏的顺序
# 数字越小越靠前，支持非整数和负数，比如 -10 < -9.5 < 3.2, order 为 -10 的文章会最靠上。
# 个人偏好将非干货或随想短文的 order 设置在 -0.01 到 -0.99，将干货类长文的 order 设置在 -1 到负无穷。每次新增文章都会在上一篇的基础上递减 order 值。
order: -1
---


# Linux LVM磁盘在线扩容教程

## 问题背景
在虚拟机环境下，需要将一个2TB的磁盘扩容到2.5TB。初始磁盘使用MBR分区表，由于MBR不支持2TB以上的分区，需要特殊处理。

## 系统环境
- 操作系统：Linux
- 原始磁盘：2TB (/dev/vdb)
- 目标容量：2.5TB
- 文件系统：XFS
- 分区方式：从MBR转换到GPT

## 问题分析
1. MBR分区表限制：最大支持2TB空间
2. 需要保留原有LVM数据
3. 新增空间需要创建新分区并加入现有卷组

## 解决步骤

### 1. 使用parted工具进行分区
```bash
# 进入parted交互模式
parted /dev/vdb

# 设置单位为GB
(parted) unit GB

# 创建新分区
(parted) mkpart
```

### 2. 格式化新分区并加入LVM
```bash
# 格式化新分区为XFS文件系统
mkfs.xfs /dev/vdb2

# 创建物理卷
pvcreate /dev/vdb2

# 扩展卷组
vgextend vg_name /dev/vdb2

# 扩展逻辑卷
lvextend -l +100%FREE /dev/vg_name/lv_name

# 扩展XFS文件系统
xfs_growfs /dev/vg_name/lv_name
```

## LVM清理步骤

### 1. 清理逻辑卷（LV）
```bash
# 卸载文件系统
umount /dev/vg_name/lv_name

# 删除逻辑卷
lvremove /dev/vg_name/lv_name

# 确认逻辑卷已删除
lvdisplay
```

### 2. 清理卷组（VG）
```bash
# 删除卷组
vgremove vg_name

# 确认卷组已删除
vgdisplay
```

### 3. 清理物理卷（PV）
```bash
# 删除物理卷
pvremove /dev/vdb1 /dev/vdb2

# 确认物理卷已删除
pvdisplay
```

### 注意事项
1. 清理前确保相关文件系统已经卸载
2. 清理顺序必须是：LV → VG → PV
3. 删除操作不可恢复，请提前备份重要数据
4. 使用display命令确认每一步的清理结果

## 注意事项
1. 在进行磁盘操作前，建议先备份重要数据
2. MBR转GPT需要谨慎操作，确保数据安全
3. 分区工具的选择：大于2TB建议使用parted而不是fdisk
4. XFS文件系统支持在线扩容，无需卸载

## 总结
通过合理利用GPT分区表和LVM的特性，我们成功实现了在线扩容。这个方案既保留了原有数据，又解决了MBR对大容量磁盘的限制问题。

## 参考命令
```bash
parted /dev/vdb        # 磁盘分区工具
mkfs.xfs              # 创建XFS文件系统
pvcreate              # 创建物理卷
vgextend              # 扩展卷组
lvextend              # 扩展逻辑卷
xfs_growfs            # XFS文件系统扩容
```


