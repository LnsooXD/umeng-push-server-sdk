'use strict';

// The user agent

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

const _send = function (options) {
    return new Promise(function (resolve, reject) {
        request(options, function (err, response, body) {
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

const timestamp = function () {
    return Date.now() / 1000 | 0;
};

let PushClient = function () {
    function PushClient() {
        _classCallCheck(this, PushClient);
    }

    _createClass(PushClient, [{
        key: 'send',
        value: function () {
            var _ref = _asyncToGenerator(function* (msg) {
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

                let result = yield _send(options);
                let statusCode = result.response.statusCode;
                debug('status code: %d', statusCode);
                debug('result: ', result);
                if (statusCode == 200) {
                    debug("Notification sent successfully.");
                } else {
                    debug("Failed to send the notification!");
                }
                return true;
            });

            function send(_x) {
                return _ref.apply(this, arguments);
            }

            return send;
        }()
    }, {
        key: 'uploadContents',
        value: function () {
            var _ref2 = _asyncToGenerator(function* (appKey, appMasterSecret, contents) {

                let data = {
                    appKey: appKey,
                    timestamp: timestamp(),
                    content: contents
                };

                let url = HOST + POST_PATH;
                let postBody = JSON.stringify(data);
                let sign = utils.md5Hex("POST" + url + postBody + appMasterSecret);
                url = url + "?sign=" + sign;

                let options = {
                    url: url,
                    method: 'POST',
                    body: postBody,
                    headers: {
                        'User-Agent': USER_AGENT
                    }
                };

                let result = yield _send(options);
                debug('status code: %d', result.response.statusCode);

                let json = JSON.parse(result);
                let ret = json['ret'];
                if (ret != 'SUCCESS') {
                    throw new Error('Failed to upload file');
                }
                return json['data']['file_id'] + '';
            });

            function uploadContents(_x2, _x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return uploadContents;
        }()
    }]);

    return PushClient;
}();

exports = module.exports = PushClient;