'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const IOSNotification = require('../IOSNotification');

let IOSBroadcast = function (_IOSNotification) {
    _inherits(IOSBroadcast, _IOSNotification);

    function IOSBroadcast(appKey, appMasterSecret) {
        _classCallCheck(this, IOSBroadcast);

        var _this = _possibleConstructorReturn(this, (IOSBroadcast.__proto__ || Object.getPrototypeOf(IOSBroadcast)).call(this));

        _this.appMasterSecret = appMasterSecret;
        _this.setPredefinedKeyValue("appKey", appkey);
        _this.setPredefinedKeyValue("type", "broadcast");
        return _this;
    }

    return IOSBroadcast;
}(IOSNotification);

exports = module.exports = IOSBroadcast;