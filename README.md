<p align="center"><a href="https://fresns.cn" target="_blank"><img src="https://cdn.fresns.cn/images/logo.png" width="300"></a></p>

<p align="center">
<img src="https://img.shields.io/badge/WeChat-Mini%20Program-blueviolet" alt="WeChat">
<img src="https://img.shields.io/badge/Fresns%20API-2.x-orange" alt="Fresns API">
<img src="https://img.shields.io/badge/License-Apache--2.0-green" alt="License">
</p>

## 介绍

本小程序是基于 [Fresns App for WeChat Mini Program](https://github.com/fresns/wechat) 框架版小程序二次定制开发，采用原生语言开发，支持 Donut 跨端方案，可编译为 iOS 和 Android 应用。

因为与网站主题模板 [Moments](https://marketplace.fresns.com/open-source/detail/Moments) 体验一致，所以命名为 **MomentsWeChat**

![MomentsWeChat](https://files.fresns.org/wiki/previews/MomentsWeChat.png)

![Fresns 小程序](https://cdn.fresns.cn/images/miniprogram.png)

## 使用说明

- 1、下载[代码包](https://github.com/fresns/wechat-moments/releases)；
- 2、解压后使用[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)导入项目，项目名称和 AppID 填写你的小程序信息；
- 3、将根目录的 `fresns.example.js` 文件名修改为 `fresns.js`，然后根据里面的描述填写你的配置信息（[Fresns 官方社区 API 密钥，对外公开，所有人可以直接使用](https://discuss.fresns.cn/post/RJ35gFtb)）；
- 4、将你的 `apiHost` 录入到微信配置：公众平台->开发->开发管理->开发设置
    - 服务器域名 `request合法域名` 和 `uploadFile合法域名`
    - 业务域名
- 5、申请位置信息接口
    - 如果你不需要该功能，忽略下方开通描述，并删除 `app.json` 配置文件中 `"requiredPrivateInfos": ["chooseLocation"]`
    - 公众平台->开发->开发管理->接口设置
    - 申请开通 `wx.chooseLocation` 打开地图选择位置
    - 申请时，可使用编辑器页面截图作为使用场景
- 6、安装配套插件「[微信登录](https://marketplace.fresns.cn/open-source/detail/WeChatLogin)」，配置小程序密钥信息；
- 7、使用[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)上传代码，提交到微信公众平台。

> 所有频道栏目的命名是读取后台配置，请自行在 Fresns 后台配置，代码中没有写死的名称。

## 小程序隐私保护指引

- 选中的照片或视频信息：用于`发表附带图片或视频的内容`
- 选中的文件：用于`发表附带文件的内容`
- 选择的位置信息：用于`发表附带位置信息的内容` （未启用 chooseLocation 功能则无需选择该隐私功能）
- 发布内容：用于`发表帖子和评论`
- 剪切板：用于`复制分享链接和帖子内容中的超链接`
- 设备信息：用于`记录互动和错误问题的日志`

## 许可协议

Fresns 是根据 [Apache-2.0](https://opensource.org/licenses/Apache-2.0) 授权的开源软件。
