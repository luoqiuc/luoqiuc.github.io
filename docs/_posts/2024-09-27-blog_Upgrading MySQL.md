---
title: MySQL版本升级（8.0.31->8.0.37）
date: 2024年9月27日12:15:44
# 一个页面可以有多个分类
category:
  - MySQL
# 一个页面可以有多个标签
tag:
  - MySQL
# 是否置顶
sticky: false
# 是否收藏
star: false
# 侧边栏的顺序
# 数字越小越靠前，支持非整数和负数，比如 -10 < -9.5 < 3.2, order 为 -10 的文章会最靠上。
# 个人偏好将非干货或随想短文的 order 设置在 -0.01 到 -0.99，将干货类长文的 order 设置在 -1 到负无穷。每次新增文章都会在上一篇的基础上递减 order 值。
order: -1
---

# MySQL版本升级（8.0.31->8.0.37）
[官方MySQL8.0升级文档](https://dev.mysql.com/doc/refman/8.0/en/upgrading.html)

## 就地升级
就地升级涉及关闭旧 MySQL 服务器、用新 MySQL 二进制文件或软件包替换旧 MySQL 二进制文件或软件包、在现有数据目录上重新启动 MySQL，以及升级现有安装中需要升级的任何剩余部分。有关可能需要升级的内容的详细信息，请参见[第 3.4 节“MySQL 升级过程升级的内容”](https://dev.mysql.com/doc/refman/8.0/en/upgrading-what-is-upgraded.html)。

> 注意
> 如果您要升级最初由安装多个 RPM 包生成的安装，请升级所有包，而不是仅升级部分包。例如，如果您之前安装了服务器和客户端 RPM，请不要仅升级服务器 RPM。
> 对于某些 Linux 平台，从 RPM 或 Debian 软件包安装 MySQL 包括 systemd 支持，用于管理 MySQL 服务器的启动和关闭。在这些平台上，未安装 [mysqld_safe](https://dev.mysql.com/doc/refman/8.0/en/mysqld-safe.html)。在这种情况下，请使用 systemd 启动和关闭服务器，而不是使用以下说明中的方法。请参见[第 2.5.9 节“使用 systemd 管理 MySQL 服务器”](https://dev.mysql.com/doc/refman/8.0/en/using-systemd.html)。
> 有关 MySQL Cluster 安装的升级，另请参见 [MySQL Cluster 升级](https://dev.mysql.com/doc/refman/8.0/en/upgrade-binary-package.html#upgrading-cluster)。

> 其他版本升级可参考MySQL官方文档

本次8.0.31升级到8.0.37 小版本升级，直接下载rpm包升级。

[MySQL旧版本下载地址](https://downloads.mysql.com/archives/community/)

[8.0.37rpm包下载地址](https://cdn.mysql.com/archives/mysql-8.0/mysql-8.0.37-1.el7.x86_64.rpm-bundle.tar)


```bash
# 停止MySQL，如果使用`mysqldump`导出数据，需要停止MySQL前操作
systemctl stop mysqld
```

```bash
# 备份数据目录再升级，或者使用`mysqldump`导出数据
more /etc/my.cnf|grep datadir
/var/lib/mysql
cd /var/lib/
tar zcf mysql.tgz mysql
```

```bash
# 解压rpm包
tar xf mysql-8.0.37-1.el7.x86_64.rpm-bundle.tar
ll
# 解压后的rpm包
-rw-r--r-- 1 7155 31415  16768148 Mar 31 22:51 mysql-community-client-8.0.37-1.el7.x86_64.rpm
-rw-r--r-- 1 7155 31415   3621444 Mar 31 22:52 mysql-community-client-plugins-8.0.37-1.el7.x86_64.rpm
-rw-r--r-- 1 7155 31415    681816 Mar 31 22:52 mysql-community-common-8.0.37-1.el7.x86_64.rpm
-rw-r--r-- 1 7155 31415 538409072 Mar 31 22:53 mysql-community-debuginfo-8.0.37-1.el7.x86_64.rpm
-rw-r--r-- 1 7155 31415   1948516 Mar 31 22:53 mysql-community-devel-8.0.37-1.el7.x86_64.rpm
-rw-r--r-- 1 7155 31415   4218268 Mar 31 22:53 mysql-community-embedded-compat-8.0.37-1.el7.x86_64.rpm
-rw-r--r-- 1 7155 31415   2344724 Mar 31 22:53 mysql-community-icu-data-files-8.0.37-1.el7.x86_64.rpm
-rw-r--r-- 1 7155 31415   1564000 Mar 31 22:53 mysql-community-libs-8.0.37-1.el7.x86_64.rpm
-rw-r--r-- 1 7155 31415    685676 Mar 31 22:53 mysql-community-libs-compat-8.0.37-1.el7.x86_64.rpm
-rw-r--r-- 1 7155 31415  67951180 Mar 31 22:54 mysql-community-server-8.0.37-1.el7.x86_64.rpm
-rw-r--r-- 1 7155 31415  25689952 Mar 31 22:54 mysql-community-server-debug-8.0.37-1.el7.x86_64.rpm
-rw-r--r-- 1 7155 31415 379877568 Mar 31 22:56 mysql-community-test-8.0.37-1.el7.x86_64.rpm
```

```bash
# 只有原来已安装的包才会更新
yum update mysql-community-*-8.0.37-1.el7.x86_64.rpm
# `devel`、`test`、`debug`之前没安装的，也不会更新
Package mysql-community-devel not installed, cannot update it. Run yum install to install it instead.
Package mysql-community-server-debug not installed, cannot update it. Run yum install to install it instead.
Package mysql-community-test not installed, cannot update it. Run yum install to install it instead.
# 下面是本次升级的rpm包
--> Running transaction check
---> Package mysql-community-client.x86_64 0:8.0.31-1.el7 will be updated
---> Package mysql-community-client.x86_64 0:8.0.37-1.el7 will be an update
---> Package mysql-community-client-plugins.x86_64 0:8.0.31-1.el7 will be updated
---> Package mysql-community-client-plugins.x86_64 0:8.0.37-1.el7 will be an update
---> Package mysql-community-common.x86_64 0:8.0.31-1.el7 will be updated
---> Package mysql-community-common.x86_64 0:8.0.37-1.el7 will be an update
---> Package mysql-community-icu-data-files.x86_64 0:8.0.31-1.el7 will be updated
---> Package mysql-community-icu-data-files.x86_64 0:8.0.37-1.el7 will be an update
---> Package mysql-community-libs.x86_64 0:8.0.31-1.el7 will be updated
---> Package mysql-community-libs.x86_64 0:8.0.37-1.el7 will be an update
---> Package mysql-community-server.x86_64 0:8.0.31-1.el7 will be updated
---> Package mysql-community-server.x86_64 0:8.0.37-1.el7 will be an update
--> Finished Dependency Resolution
```

```bash
# 查看升级后的版本
mysql -V
mysql  Ver 8.0.37 for Linux on x86_64 (MySQL Community Server - GPL)
```

```bash
# 启动MySQL
systemctl start mysqld
```

