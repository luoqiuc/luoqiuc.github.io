---
title: Linux常用技巧
date: 2024年9月26日12:25:35
# 一个页面可以有多个分类
category:
  - Linux
# 一个页面可以有多个标签
tag:
  - Linux
# 是否置顶
sticky: true
# 是否收藏
star: false
# 侧边栏的顺序
# 数字越小越靠前，支持非整数和负数，比如 -10 < -9.5 < 3.2, order 为 -10 的文章会最靠上。
# 个人偏好将非干货或随想短文的 order 设置在 -0.01 到 -0.99，将干货类长文的 order 设置在 -1 到负无穷。每次新增文章都会在上一篇的基础上递减 order 值。
order: -1
---
# Linux常用技巧
## 在当前目录下查找所有文件（递归）中包含指定字符的文件

```shell
grep -rn "strings"./
```

