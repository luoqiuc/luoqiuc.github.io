---
title: 如何下载正确版本的ChromeDriver
date: 2024年11月04日
# 一个页面可以有多个分类
category:
  - Web自动化
  - Selenium
# 一个页面可以有多个标签
tag:
  - ChromeDriver
  - Google Chrome
  - 自动化测试
# 是否置顶
sticky: false
# 是否收藏
star: false
# 侧边栏的顺序
# 数字越小越靠前，支持非整数和负数，比如 -10 < -9.5 < 3.2, order 为 -10 的文章会最靠上。
# 个人偏好将非干货或随想短文的 order 设置在 -0.01 到 -0.99，将干货类长文的 order 设置在 -1 到负无穷。每次新增文章都会在上一篇的基础上递减 order 值。
order: -1
---

# 如何下载正确版本的ChromeDriver

在使用Selenium进行Web自动化测试时，需要确保ChromeDriver与Chrome浏览器版本匹配。以下是获取正确版本ChromeDriver的步骤：

## 1. 查看ChromeDriver版本

访问以下链接查看适用于当前稳定版Chrome的ChromeDriver版本：
https://chromedriver.storage.googleapis.com/LATEST_RELEASE

## 2. 下载对应版本

访问以下链接查找并下载对应版本的ChromeDriver：
https://googlechromelabs.github.io/chrome-for-testing/known-good-versions-with-downloads.json

## 注意事项

- 确保下载的ChromeDriver版本与您的Chrome浏览器版本相匹配
- 不同操作系统需要下载对应的ChromeDriver版本（Windows/Mac/Linux）
- 下载后需要将ChromeDriver添加到系统环境变量中

## 相关链接

- [Chrome for Testing 官方文档](https://developer.chrome.com/docs/chromium/use-chrome-for-testing)
- [Selenium 官方文档](https://www.selenium.dev/documentation/)