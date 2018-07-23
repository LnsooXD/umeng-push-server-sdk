/**
 * This file is part of umeng-push-server-sdk.
 * Copyright(c) 2018 LnsooXD<LnsooXD@gmail.com>
 * MIT Licensed
 *
 * @format
 * @Author: LnsooXD<LnsooXD@gmail.com>
 * @Date: 2018-07-24 00:35:24
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2018-07-24 01:48:10
 */

export enum DisplayType {
  NOTIFICATION = 'notification', //通知:消息送达到用户设备后，由友盟SDK接管处理并在通知栏上显示通知内容。
  MESSAGE = 'message' //消息:消息送达到用户设备后，消息内容透传给应用自身进行解析处理。
}
