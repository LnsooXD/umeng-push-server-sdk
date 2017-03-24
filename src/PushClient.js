'use strict';

// The user agent
const USER_AGENT = 'Mozilla/5.0';

// The host
const HOST = 'http://msg.umeng.com';

// The upload path
const UPLOAD_PATH = '/upload';

// The post path
const POST_PATH = '/api/send';

const utils = require('./utils');
const request = require('request');
const debug = require('debug')('push-client');


const send = (options) => {
    return new Promise((resolve, reject) => {
        request(options, (err, response, body) => {
            if (err) {
                reject(err);
            }
            resolve({
                response: response,
                body: body
            });
        });
    });
};


const timestamp = () => {
    return Date.now() / 1000 | 0;
};

class PushClient {

    constructor() {
    }

    async send(msg) {
        msg.setPredefinedKeyValue('timestamp', timestamp());
        let url = HOST + POST_PATH;
        let postBody = msg.getPostBody();

        let sign = utils.md5Hex("POST" + url + postBody + msg.appMasterSecret);
        url = url + "?sign=" + sign;

        let options = {
            url: url,
            method: 'POST',
            body: postBody,
            headers: {
                'User-Agent': USER_AGENT
            }
        };

        let result = await send(options);
        let statusCode = result.response.statusCode;
        debug('status code: %d', statusCode);
        debug('result: ', result);
        if (statusCode == 200) {
            debug("Notification sent successfully.");
        } else {
            debug("Failed to send the notification!");
        }
        return true;
    }

    async uploadContents(appKey, appMasterSecret, contents) {

        let data = {
            appKey: appKey,
            timestamp: timestamp(),
            content: contents
        };

        let url = HOST + POST_PATH;
        let postBody = JSON.stringify(data);
        let sign = utils.md5Hex(("POST" + url + postBody + appMasterSecret));
        url = url + "?sign=" + sign;

        let options = {
            url: url,
            method: 'POST',
            body: postBody,
            headers: {
                'User-Agent': USER_AGENT
            }
        };

        let result = await send(options);
        debug('status code: %d', result.response.statusCode);

        let json = JSON.parse(result);
        let ret = json['ret'];
        if (ret != 'SUCCESS') {
            throw new Error('Failed to upload file');
        }
        return json['data']['file_id'] + '';
    }
}

exports = module.exports = PushClient;