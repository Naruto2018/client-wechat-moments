<p align="center"><a href="https://fresns.cn" target="_blank"><img src="https://cdn.fresns.cn/images/logo.png" width="300"></a></p>

<p align="center">
<img src="https://img.shields.io/badge/WeChat-Mini%20Program-blueviolet" alt="WeChat">
<img src="https://img.shields.io/badge/Fresns%20API-2.x-orange" alt="Fresns API">
<img src="https://img.shields.io/badge/License-Apache--2.0-green" alt="License">
</p>

## 介绍

本小程序是基于 [Fresns App for WeChat Mini Program](https://github.com/fresns/wechat) 框架小程序二次定制开发。与网站主题模板 [Moments](https://marketplace.fresns.com/open-source/detail/Moments) 体验一致，因此命名为 **MomentsWeChat**

![MomentsWeChat](https://files.fresns.org/wiki/previews/MomentsWeChat.png)

## 使用说明

- 1、下载[代码包](https://github.com/fresns/wechat-moments/releases)；
- 2、解压后使用[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)导入项目，项目名称和 AppID 填写你的小程序信息；
- 3、将根目录的 `fresns.example.js` 文件名修改为 `fresns.js`，然后根据里面的描述填写你的配置信息（[Fresns 官方社区 API 密钥，对外公开，所有人可以直接使用](https://discuss.fresns.cn/post/RJ35gFtb)）；
- 4、使用[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)上传代码，提交到微信公众平台。

> 附近功能使用的是「[腾讯位置服务地图选点](https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx76a9a06e5b4e693e&token=&lang=zh_CN)」插件，请为你的小程序添加该插件，否则会报错。

> 所有频道栏目的命名是读取后台配置，请自行在 Fresns 后台配置，代码中没有写死的名称。

> 由于微信的规则要求，需要在后台修改一下语言包内容。[https://discuss.fresns.cn/post/K9ydts1v](https://discuss.fresns.cn/post/K9ydts1v)

## 隐藏政策配置说明

- 1、协议条款需修改系统文案，位置：后台 -> 客户端 -> 语言包配置 -> 配置语言包
    - 将标识名 `accountInfo` 的语言内容修改为 `已阅读并同意`
- 2、本小程序涉及以下隐私内容：
    - 选中的照片或视频信息：用于`发表附带图片或视频的内容`
    - 发布内容：用于`发表帖子和评论`
    - 设备信息：用于`记录互动和错误问题的日志`
- 3、本小程序涉及以下插件信息
    - 插件名称：腾讯位置服务地图选点
    - 插件提供方名称: 腾讯科技(北京)有限公司
    - `你的位置信息可用于编辑器发表带位置的内容和附近页面查询内容。`

## 许可协议

Fresns 是根据 [Apache-2.0](https://opensource.org/licenses/Apache-2.0) 授权的开源软件。
