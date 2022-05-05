/**
 * This file is part of umeng-push-server-sdk.
 * Copyright(c) 2018 LnsooXD<LnsooXD@gmail.com>
 * MIT Licensed
 *
 * @format
 * @Author: LnsooXD<LnsooXD@gmail.com>
 * @Date: 2018-07-24 00:35:24
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2018-07-24 01:07:48
 */

// The user agent
const USER_AGENT = 'Mozilla/5.0';

// The host
const HOST = 'http://msg.umeng.com';

// The upload path
const UPLOAD_PATH = '/upload';

// The post path
const POST_PATH = '/api/send';

import utils = require('./utils');
// import request = require('request');
// import {Options, Response} from 'request';

import http = require('http');
import Url = require('url');

const debug = require('debug')('push-client');

import UmengNotification = require('./UmengNotification');
import {CallbackPromise} from 'callback-promise-union';

interface SendResult {
  readonly response: Response;
  readonly body: any;
}

const httpPost = (options: http.RequestOptions): Promise<SendResult> => {
  const cpu = new CallbackPromise<any, SendResult>();

  http.request(options)

  // request(options, (err, response, body) => {
  //   cpu.callback(err, {
  //     response,
  //     body
  //   });
  // });
  return cpu.promise;
};

const timestamp = (): number => {
  return (Date.now() / 1000) | 0;
};

class PushClient {
  constructor() {}

  public async send(msg: UmengNotification): Promise<boolean> {
    msg.setPredefinedKeyValue('timestamp', timestamp());
    let url = HOST + POST_PATH;
    const postBody = msg.getPostBody();

    let sign = utils.md5Hex('POST' + url + postBody + msg.appMasterSecret);
    url = url + '?sign=' + sign;

    const parsedUrl = Url.parse(url)

    let options: http.RequestOptions = {
      url: url,
      method: 'POST',
      body: postBody,
      headers: {
        'User-Agent': USER_AGENT
      }
    };

    const result: SendResult = await httpPost(options);
    const statusCode = result.response.statusCode;
    debug('status code: %d', statusCode);
    debug('result: ', result);
    if (statusCode == 200) {
      debug('Notification sent successfully.');
    } else {
      debug('Failed to send the notification!');
    }
    return true;
  }

  public async uploadContents(
    appKey: string,
    appMasterSecret: string,
    contents: string
  ) {
    let data = {
      appKey: appKey,
      timestamp: timestamp(),
      content: contents
    };

    let url = HOST + POST_PATH;
    let postBody = JSON.stringify(data);
    let sign = utils.md5Hex('POST' + url + postBody + appMasterSecret);
    url = url + '?sign=' + sign;

    const options: Options = {
      url: url,
      method: 'POST',
      body: postBody,
      headers: {
        'User-Agent': USER_AGENT
      }
    };

    const result = await httpPost(options);
    debug('status code: %d', result.response.statusCode);

    let json = JSON.parse(result.body);
    let ret = json['ret'];
    if (ret != 'SUCCESS') {
      throw new Error('Failed to upload file');
    }
    return json['data']['file_id'] + '';
  }
}

export = PushClient;
