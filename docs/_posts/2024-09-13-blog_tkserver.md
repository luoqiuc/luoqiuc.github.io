---
title: 私有部署twikoo
date: 2024年9月13日20:05:33
# 一个页面可以有多个分类
category:
  - 网站评论系统
# 一个页面可以有多个标签
tag:
  - twikoo
# 是否置顶
sticky: false
# 是否收藏
star: false
# 侧边栏的顺序
# 数字越小越靠前，支持非整数和负数，比如 -10 < -9.5 < 3.2, order 为 -10 的文章会最靠上。
# 个人偏好将非干货或随想短文的 order 设置在 -0.01 到 -0.99，将干货类长文的 order 设置在 -1 到负无穷。每次新增文章都会在上一篇的基础上递减 order 值。
order: -0.01
---

# [私有部署](https://twikoo.js.org/backend.html#%E7%A7%81%E6%9C%89%E9%83%A8%E7%BD%B2)
>注意
私有部署的环境需配合 1.6.0 或以上版本的 twikoo.js 使用
私有部署对服务器系统没有要求，Windows、Ubuntu、CentOS、macOS 等常用系统均支持。
私有部署涉及终端操作、申请证书、配置反向代理或负载均衡等高级操作，如果对这些不太了解，建议优先选择其他方式部署。


1. 服务端下载安装 [Node.js](https://nodejs.org/zh-cn/)
2. 安装 Twikoo server: `npm i -g tkserver`
3. 根据需要配置环境变量，所有的环境变量都是可选的

|名称	|描述	|默认值|
|--------------|--------------|--------------|
|`MONGODB_URI`	|MongoDB 数据库连接字符串，不传则使用 lokijs	|`null`|
|`MONGO_URL`	|MongoDB 数据库连接字符串，不传则使用 lokijs	|`null`|
|`TWIKOO_DATA`	|lokijs 数据库存储路径	|`./data`|
|`TWIKOO_PORT`	|端口号	|`8080`|
|`TWIKOO_THROTTLE`	|IP 请求限流，当同一 IP 短时间内请求次数超过阈值将对该 IP 返回错误	|`250`|
|`TWIKOO_LOCALHOST_ONLY`	|为true时只监听本地请求，使得 nginx 等服务器反代之后不暴露原始端口	|`null`|
|`TWIKOO_LOG_LEVEL`	|日志级别，支持 `verbose / info / warn / error`	|`info`|
|`TWIKOO_IP_HEADERS`	|在一些特殊情况下使用，如使用了 `CloudFlare CDN` 它会将请求 `IP` 写到请求头的 `cf-connecting-ip` 字段上，为了能够正确的获取请求 IP 你可以写成 `["headers.cf-connecting-ip"]`	|`[]`|

4. 启动 Twikoo server: `tkserver`
5. 访问 `http://服务端IP:8080` 测试服务是否启动成功
6. 配置前置代理实现 HTTPS 访问（可以用 Nginx、负载均衡或 Cloudflare 等）
7. 到博客配置文件中配置 envId 为 https:// 加域名（例如 https://twikoo.yourdomain.com）

>## 提示
>Linux 服务器可以用 nohup tkserver >> tkserver.log 2>&1 & 命令后台启动
数据默认在 data 目录，请注意定期备份数据
默认端口为8080，自定义端口使用可使用 TWIKOO_PORT=1234 tkserver 启动。
配置systemctl服务配合TWIKOO_PORT=1234 tkserver设置开机启动

