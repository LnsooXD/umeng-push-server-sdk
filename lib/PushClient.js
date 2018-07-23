"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// The user agent
const USER_AGENT = 'Mozilla/5.0';
// The host
const HOST = 'http://msg.umeng.com';
// The upload path
const UPLOAD_PATH = '/upload';
// The post path
const POST_PATH = '/api/send';
const utils = require("./utils");
const request = require("request");
const debug = require('debug')('push-client');
const callback_promise_union_1 = require("callback-promise-union");
const send = (options) => {
    const cpu = new callback_promise_union_1.CallbackPromise();
    request(options, (err, response, body) => {
        cpu.callback(err, {
            response,
            body
        });
    });
    return cpu.promise;
};
const timestamp = () => {
    return (Date.now() / 1000) | 0;
};
class PushClient {
    constructor() { }
    send(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            msg.setPredefinedKeyValue('timestamp', timestamp());
            let url = HOST + POST_PATH;
            const postBody = msg.getPostBody();
            let sign = utils.md5Hex('POST' + url + postBody + msg.appMasterSecret);
            url = url + '?sign=' + sign;
            let options = {
                url: url,
                method: 'POST',
                body: postBody,
                headers: {
                    'User-Agent': USER_AGENT
                }
            };
            const result = yield send(options);
            const statusCode = result.response.statusCode;
            debug('status code: %d', statusCode);
            debug('result: ', result);
            if (statusCode == 200) {
                debug('Notification sent successfully.');
            }
            else {
                debug('Failed to send the notification!');
            }
            return true;
        });
    }
    uploadContents(appKey, appMasterSecret, contents) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = {
                appKey: appKey,
                timestamp: timestamp(),
                content: contents
            };
            let url = HOST + POST_PATH;
            let postBody = JSON.stringify(data);
            let sign = utils.md5Hex('POST' + url + postBody + appMasterSecret);
            url = url + '?sign=' + sign;
            const options = {
                url: url,
                method: 'POST',
                body: postBody,
                headers: {
                    'User-Agent': USER_AGENT
                }
            };
            const result = yield send(options);
            debug('status code: %d', result.response.statusCode);
            let json = JSON.parse(result.body);
            let ret = json['ret'];
            if (ret != 'SUCCESS') {
                throw new Error('Failed to upload file');
            }
            return json['data']['file_id'] + '';
        });
    }
}
module.exports = PushClient;
//# sourceMappingURL=PushClient.js.map