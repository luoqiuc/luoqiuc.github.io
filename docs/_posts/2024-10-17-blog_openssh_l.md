---
title: CentOS 7系统 OpenSSH和OpenSSL版本升级指南
date: 2024年10月17日12:04:15
# 一个页面可以有多个分类
category:
  - CentOS
  - 安全
# 一个页面可以有多个标签
tag:
  - OpenSSH
  - OpenSSL
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

# CentOS 7系统 OpenSSH和OpenSSL版本升级指南

在处理服务器安全问题时，及时升级关键组件的版本是非常重要的。本文将详细介绍如何在CentOS 7系统上升级OpenSSH和OpenSSL到最新稳定版本，以解决已知的安全漏洞。

## 环境说明

### 当前系统版本
```bash
[root@tamkems-yy ~]# cat /etc/redhat-release 
CentOS Linux release 7.8.2003 (Core)
```

### 当前组件版本
```bash
[root@tamkems-yy ~]# ssh -V
OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017
[root@tamkems-yy ~]# openssl version
OpenSSL 1.0.2k-fips  26 Jan 2017
```

## 现存安全漏洞

当前版本存在以下安全漏洞：
- OpenSSH 安全漏洞(CVE-2023-51767)
- OpenSSH 安全漏洞(CVE-2023-38408)
- OpenSSH 命令注入漏洞(CVE-2020-15778)
- OpenSSH 欺骗安全漏洞(CVE-2019-6110)
- OpenSSH信息泄露漏洞(CVE-2020-14145)
- OpenSSH 用户枚举漏洞(CVE-2018-15919)
- OpenSSH 安全漏洞(CVE-2023-48795)
- OpenSSH CBC模式信息泄露漏洞(CVE-2008-5161)
- 等多个安全漏洞...

## 升级目标版本

- OpenSSH: 9.6p1
- OpenSSL: 1.1.1w

## 升级准备工作

在开始升级之前，需要做好以下准备：

1. 系统备份
```bash
# 创建备份目录
mkdir -p /root/ssh_backup_$(date +%Y%m%d)

# 备份当前配置
cp -r /etc/ssh/* /root/ssh_backup_$(date +%Y%m%d)/
cp /etc/sysconfig/sshd /root/ssh_backup_$(date +%Y%m%d)/
```

2. 安装必要的编译工具
```bash
# 安装开发工具组
yum groupinstall -y "Development Tools"

# 安装依赖包
yum install -y zlib-devel openssl-devel perl perl-devel pam-devel
```

## OpenSSL升级步骤

### 1. 下载和解压
```bash
cd /usr/local/src
wget https://www.openssl.org/source/openssl-1.1.1w.tar.gz
tar -zxf openssl-1.1.1w.tar.gz
cd openssl-1.1.1w
```

### 2. 编译安装
```bash
# 配置
./config --prefix=/usr/local/openssl shared zlib

# 编译和测试
make
make test

# 安装
make install
```

### 3. 配置环境
```bash
# 配置动态链接库
echo "/usr/local/openssl/lib" > /etc/ld.so.conf.d/openssl.conf
ldconfig

# 替换原有的OpenSSL
mv /usr/bin/openssl /usr/bin/openssl.old
ln -s /usr/local/openssl/bin/openssl /usr/bin/openssl
```

## OpenSSH升级步骤

### 1. 下载和解压
```bash
cd /usr/local/src
wget https://cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/openssh-9.6p1.tar.gz
tar -zxf openssh-9.6p1.tar.gz
cd openssh-9.6p1
```

### 2. 编译安装
```bash
# 配置
./configure \
    --prefix=/usr \
    --sysconfdir=/etc/ssh \
    --with-ssl-dir=/usr/local/openssl \
    --with-zlib \
    --with-pam \
    --with-md5-passwords \
    --with-tcp-wrappers

# 编译和安装
make
make install
```

### 3. 服务配置
```bash
# 更新服务脚本
cp contrib/redhat/sshd.init /etc/init.d/sshd
chmod +x /etc/init.d/sshd
chkconfig --add sshd

# 更新SELinux上下文
restorecon /usr/sbin/sshd
```

## 安全配置更新

### 1. 更新SSH配置文件
```bash
cat > /etc/ssh/sshd_config << 'EOF'
Protocol 2
PermitRootLogin prohibit-password
PasswordAuthentication yes
ChallengeResponseAuthentication no
UsePAM yes
X11Forwarding yes
PrintMotd no
AcceptEnv LANG LC_*
Subsystem sftp /usr/libexec/openssh/sftp-server
EOF
```

### 2. 设置正确的权限
```bash
chown -R root:root /etc/ssh
chmod 755 /etc/ssh
chmod 644 /etc/ssh/*
chmod 600 /etc/ssh/*_key
```

## 服务重启和验证

### 1. 重启服务
```bash
systemctl restart sshd
systemctl status sshd
```

### 2. 验证版本
```bash
ssh -V
openssl version
```

### 3. 连接测试
```bash
ssh -v localhost
```

## 故障排查指南

如果升级后遇到问题，可以按以下步骤排查：

1. 检查日志文件
```bash
tail -f /var/log/secure
tail -f /var/log/messages
```

2. 检查防火墙设置
```bash
firewall-cmd --list-services | grep ssh
```

3. 如需回滚，执行以下操作：
   - 停止sshd服务
   - 从备份目录恢复配置文件
   - 重启服务

## 安全建议

完成升级后，建议采取以下安全措施：

1. 加强SSH配置
   - 禁用不安全的加密算法
   - 限制root用户登录
   - 设置登录失败次数限制
   - 配置密钥认证

2. 定期维护
   - 检查系统日志
   - 监控失败的登录尝试
   - 定期检查服务状态

## 总结

通过以上步骤，我们已经成功将OpenSSH和OpenSSL升级到了最新的稳定版本，解决了多个安全漏洞。建议在执行升级操作前，先在测试环境中进行验证，确保升级过程不会影响到生产环境的正常运行。

## 参考文档

- OpenSSH官方文档: https://www.openssh.com/
- OpenSSL官方文档: https://www.openssl.org/
- CentOS 7官方文档: https://wiki.centos.org/