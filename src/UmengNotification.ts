/**
 * This file is part of umeng-push-server-sdk.
 * Copyright(c) 2018 LnsooXD<LnsooXD@gmail.com>
 * MIT Licensed
 *
 * @format
 * @Author: LnsooXD<LnsooXD@gmail.com>
 * @Date: 2018-07-24 00:35:24
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2018-07-24 01:19:57
 */

import utils = require('./utils');

// Keys can be set in the root level
const ROOT_KEYS = [
  'appkey',
  'timestamp',
  'type',
  'device_tokens',
  'alias',
  'alias_type',
  'file_id',
  'filter',
  'production_mode',
  'feedback',
  'description',
  'thirdparty_id',
  'mipush',
  'mi_activity'
];

// Keys can be set in the policy level
const POLICY_KEYS = ['start_time', 'expire_time', 'max_send_num'];

interface RootJsonType {
  [key: string]: any;
}

abstract class UmengNotification {
  protected readonly rootJson: RootJsonType;
  public appMasterSecret: string;

  constructor() {
    this.rootJson = {};
  }

  public abstract setPredefinedKeyValue(key: string, value: any): boolean;

  ///测试模式设置（true/empty: 正式模式, false: 测试模式）
  public setProductionMode(mode?: boolean) {
    if (arguments.length <= 0) {
      this.setProductionMode(true);
    } else {
      this.setPredefinedKeyValue('production_mode', mode);
    }
  }

  ///测试模式
  public setTestMode(): void {
    this.setProductionMode(false);
  }

  public getPostBody(): string {
    return JSON.stringify(this.rootJson);
  }

  ///发送消息描述，建议填写。
  public setDescription(desc: string): void {
    this.setPredefinedKeyValue('description', desc);
  }

  ///定时发送时间，若不填写表示立即发送。格式: "YYYY-MM-DD hh:mm:ss"。
  public setStartTime(startTime: string): void {
    this.setPredefinedKeyValue('start_time', startTime);
  }

  ///消息过期时间,格式: "YYYY-MM-DD hh:mm:ss"。
  public setExpireTime(expireTime: string): void {
    this.setPredefinedKeyValue('expire_time', expireTime);
  }

  ///发送限速，每秒发送的最大条数。
  public setMaxSendNum(num: number) {
    this.setPredefinedKeyValue('max_send_num', num);
  }

  //是否开启华为小米魅族弹窗（true/empty: 开启 , false: 关闭）
  public setMipush(mipush: boolean): void {
    if (arguments.length <= 0) {
      this.setMipush(true);
    } else {
      this.setPredefinedKeyValue('mipush', mipush);
    }
  }

  //华为小米魅族弹窗打开的页面 （true/empty: 开启 , false: 关闭）
  public setMi_activity(mi_activity: boolean) {
    if (arguments.length <= 0) {
      this.setMi_activity(true);
    } else {
      this.setPredefinedKeyValue('mi_activity', mi_activity);
    }
  }

  public static isRootKey(key: string): boolean {
    return utils.containsValue(ROOT_KEYS, key);
  }

  public static isPolicyKey(key: string): boolean {
    return utils.containsValue(POLICY_KEYS, key);
  }
}

export = UmengNotification;
