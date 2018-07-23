/**
 * This file is part of umeng-push-server-sdk.
 * Copyright(c) 2018 LnsooXD<LnsooXD@gmail.com>
 * MIT Licensed
 *
 * @format
 * @Author: LnsooXD<LnsooXD@gmail.com>
 * @Date: 2018-07-24 00:35:24
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2018-07-24 01:47:19
 */

export enum AfterOpenAction {
  go_app = 'go_app', //打开应用
  go_url = 'go_url', //跳转到URL
  go_activity = 'go_activity', //打开特定的activity
  go_custom = 'go_custom' //用户自定义内容。
}
