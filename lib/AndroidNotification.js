'use strict';

// Keys can be set in the payload level

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const PAYLOAD_KEYS = ["display_type"];

// Keys can be set in the body level
const BODY_KEYS = ["ticker", "title", "text", "builder_id", "icon", "largeIcon", "img", "play_vibrate", "play_lights", "play_sound", "sound", "after_open", "url", "activity", "custom"];

const UmengNotification = require('./UmengNotification');
const utils = require('./utils');
const isRootKey = UmengNotification.isRootKey;
const isPolicyKey = UmengNotification.isPolicyKey;

const AfterOpenAction = utils.readonlyPropertyObject({
    go_app: 'go_app', //打开应用
    go_url: 'go_url', //跳转到URL
    go_activity: 'go_activity', //打开特定的activity
    go_custom: 'go_custom' //用户自定义内容。
});

const DisplayType = utils.readonlyPropertyObject({
    NOTIFICATION: 'notification', ///通知:消息送达到用户设备后，由友盟SDK接管处理并在通知栏上显示通知内容。
    MESSAGE: 'message' ///消息:消息送达到用户设备后，消息内容透传给应用自身进行解析处理。
});

let AndroidNotification = function (_UmengNotification) {
    _inherits(AndroidNotification, _UmengNotification);

    function AndroidNotification() {
        _classCallCheck(this, AndroidNotification);

        return _possibleConstructorReturn(this, (AndroidNotification.__proto__ || Object.getPrototypeOf(AndroidNotification)).call(this));
    }

    // static AfterOpenAction = AfterOpenAction;

    // static DisplayType = DisplayType;

    // Set key/value in the rootJson, for the keys can be set please see ROOT_KEYS, PAYLOAD_KEYS,
    // BODY_KEYS and POLICY_KEYS.


    _createClass(AndroidNotification, [{
        key: "setPredefinedKeyValue",
        value: function setPredefinedKeyValue(key, value) {
            if (isRootKey(key)) {
                this.rootJson[key] = value;
            } else if (isPayloadKey(key)) {
                let payloadJson = null;
                if (this.rootJson.hasOwnProperty("payload")) {
                    payloadJson = this.rootJson["payload"];
                } else {
                    payloadJson = {};
                    this.rootJson['payload'] = payloadJson;
                }
                payloadJson[key] = value;
            } else if (isBodyKey(key)) {
                let bodyJson = null;
                let payloadJson = null;
                // 'body' is under 'payload', so build a payload if it doesn't exist
                if (this.rootJson.hasOwnProperty("payload")) {
                    payloadJson = this.rootJson["payload"];
                } else {
                    payloadJson = {};
                    this.rootJson['payload'] = payloadJson;
                }
                // Get body JSONObject, generate one if not existed
                if (payloadJson.hasOwnProperty("body")) {
                    bodyJson = payloadJson["body"];
                } else {
                    bodyJson = {};
                    payloadJson["body"] = bodyJson;
                }
                bodyJson[key] = value;
            } else if (isPolicyKey(key)) {
                let policyJson = null;
                if (this.rootJson.hasOwnProperty("policy")) {
                    policyJson = this.rootJson['policy'];
                } else {
                    policyJson = {};
                    this.rootJson['policy'] = policyJson;
                }
                policyJson[key] = value;
            } else {
                if (key == "payload" || key == "body" || key == "policy" || key == "extra") {
                    throw new Error("You don't need to set value for " + key + " , just set values for the sub keys in it.");
                } else {
                    throw new Error("Unknown key: " + key);
                }
            }
            return true;
        }

        // Set extra key/value for Android notification

    }, {
        key: "setExtraField",
        value: function setExtraField(key, value) {
            let payloadJson = null;
            let extraJson = null;
            if (this.rootJson.hasOwnProperty("payload")) {
                payloadJson = this.rootJson["payload"];
            } else {
                payloadJson = {};
                this.rootJson['payload'] = payloadJson;
            }

            if (payloadJson.hasOwnProperty("extra")) {
                extraJson = payloadJson["extra"];
            } else {
                extraJson = {};
                payloadJson['extra'] = extraJson;
            }
            extraJson[key] = value;
            return true;
        }

        //

    }, {
        key: "setDisplayType",
        value: function setDisplayType(type) {
            this.setPredefinedKeyValue("display_type", type + '');
        }

        ///通知栏提示文字

    }, {
        key: "setTicker",
        value: function setTicker(ticker) {
            this.setPredefinedKeyValue("ticker", ticker);
        }

        ///通知标题

    }, {
        key: "setTitle",
        value: function setTitle(title) {
            this.setPredefinedKeyValue("title", title);
        }

        ///通知文字描述

    }, {
        key: "setText",
        value: function setText(text) {
            this.setPredefinedKeyValue("text", text);
        }

        ///用于标识该通知采用的样式。使用该参数时, 必须在SDK里面实现自定义通知栏样式。

    }, {
        key: "setBuilderId",
        value: function setBuilderId(builder_id) {
            this.setPredefinedKeyValue("builder_id", builder_id);
        }

        ///状态栏图标ID, R.drawable.[smallIcon],如果没有, 默认使用应用图标。

    }, {
        key: "setIcon",
        value: function setIcon(icon) {
            this.setPredefinedKeyValue("icon", icon);
        }

        ///通知栏拉开后左侧图标ID

    }, {
        key: "setLargeIcon",
        value: function setLargeIcon(largeIcon) {
            this.setPredefinedKeyValue("largeIcon", largeIcon);
        }

        ///通知栏大图标的URL链接。该字段的优先级大于largeIcon。该字段要求以http或者https开头。

    }, {
        key: "setImg",
        value: function setImg(img) {
            this.setPredefinedKeyValue("img", img);
        }

        ///收到通知是否震动,默认为"true"

    }, {
        key: "setPlayVibrate",
        value: function setPlayVibrate(play_vibrate) {
            this.setPredefinedKeyValue("play_vibrate", play_vibrate + '');
        }

        ///收到通知是否闪灯,默认为"true"

    }, {
        key: "setPlayLights",
        value: function setPlayLights(play_lights) {
            this.setPredefinedKeyValue("play_lights", play_lights + '');
        }

        ///收到通知是否发出声音,默认为"true"

    }, {
        key: "setPlaySound",
        value: function setPlaySound(play_sound) {
            this.setPredefinedKeyValue("play_sound", play_sound.toString());
        }

        ///通知声音，R.raw.[sound]. 如果该字段为空，采用SDK默认的声音

    }, {
        key: "setSound",
        value: function setSound(sound) {
            this.setPredefinedKeyValue("sound", sound);
        }

        ///收到通知后播放指定的声音文件

    }, {
        key: "setPlaySound",
        value: function setPlaySound(sound) {
            this.etPlaySound(true);
            this.setSound(sound);
        }

        ///点击"通知"的后续行为，默认为打开app。

    }, {
        key: "goAppAfterOpen",
        value: function goAppAfterOpen() {
            this.setAfterOpenAction(AfterOpenAction.go_app);
        }
    }, {
        key: "goUrlAfterOpen",
        value: function goUrlAfterOpen(url) {
            this.setAfterOpenAction(AfterOpenAction.go_url);
            this.setUrl(url);
        }
    }, {
        key: "goActivityAfterOpen",
        value: function goActivityAfterOpen(activity) {
            this.setAfterOpenAction(AfterOpenAction.go_activity);
            this.setActivity(activity);
        }
    }, {
        key: "goCustomAfterOpen",
        value: function goCustomAfterOpen(custom) {
            this.setAfterOpenAction(AfterOpenAction.go_custom);
            this.setCustomField(custom);
        }
    }, {
        key: "goCustomAfterOpen",
        value: function goCustomAfterOpen(custom) {
            this.setAfterOpenAction(AfterOpenAction.go_custom);
            this.setCustomField(custom);
        }

        ///点击"通知"的后续行为，默认为打开app。原始接口

    }, {
        key: "setAfterOpenAction",
        value: function setAfterOpenAction(action) {
            this.setPredefinedKeyValue("after_open", action);
        }
    }, {
        key: "setUrl",
        value: function setUrl(url) {
            this.setPredefinedKeyValue("url", url);
        }
    }, {
        key: "setActivity",
        value: function setActivity(activity) {
            this.setPredefinedKeyValue("activity", activity);
        }

        // can be a string or a json

    }, {
        key: "setCustomField",
        value: function setCustomField(custom) {
            this.setPredefinedKeyValue("custom", custom);
        }
    }]);

    return AndroidNotification;
}(UmengNotification);

function isPayloadKey(key) {
    return utils.containsValue(PAYLOAD_KEYS, key);
}

function isBodyKey(key) {
    return utils.containsValue(BODY_KEYS, key);
}

AndroidNotification.isPayloadKey = isPayloadKey;
AndroidNotification.isBodyKey = isBodyKey;

utils.readonlyProperty(AndroidNotification, 'AfterOpenAction', AfterOpenAction);
utils.readonlyProperty(AndroidNotification, 'DisplayType', DisplayType);

exports = module.exports = AndroidNotification;