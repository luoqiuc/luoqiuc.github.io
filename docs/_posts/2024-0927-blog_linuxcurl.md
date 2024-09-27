---
title: curl使用说明
date: 2024年9月27日17:20:49
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