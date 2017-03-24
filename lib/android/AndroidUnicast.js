'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const AndroidNotification = require('../AndroidNotification');

let AndroidUnicast = function (_AndroidNotification) {
    _inherits(AndroidUnicast, _AndroidNotification);

    function AndroidUnicast(appKey, appMasterSecret) {
        _classCallCheck(this, AndroidUnicast);

        var _this = _possibleConstructorReturn(this, (AndroidUnicast.__proto__ || Object.getPrototypeOf(AndroidUnicast)).call(this));

        _this.appMasterSecret = appMasterSecret;
        _this.setPredefinedKeyValue("appkey", appKey);
        _this.setPredefinedKeyValue("type", "unicast");
        return _this;
    }

    _createClass(AndroidUnicast, [{
        key: 'setDeviceToken',
        value: function setDeviceToken(token) {
            this.setPredefinedKeyValue("device_tokens", token);
        }
    }]);

    return AndroidUnicast;
}(AndroidNotification);

exports = module.exports = AndroidUnicast;