'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const IOSNotification = require('../IOSNotification');

let IOSGroupcast = function (_IOSNotification) {
    _inherits(IOSGroupcast, _IOSNotification);

    function IOSGroupcast(appKey, appMasterSecret) {
        _classCallCheck(this, IOSGroupcast);

        var _this = _possibleConstructorReturn(this, (IOSGroupcast.__proto__ || Object.getPrototypeOf(IOSGroupcast)).call(this));

        _this.appMasterSecret = appMasterSecret;
        _this.setPredefinedKeyValue("appkey", appKey);
        _this.setPredefinedKeyValue("type", "groupcast");
        return _this;
    }

    _createClass(IOSGroupcast, [{
        key: 'setFilter',
        value: function setFilter(filter) {
            this.setPredefinedKeyValue("filter", filter);
        }
    }]);

    return IOSGroupcast;
}(IOSNotification);

exports = module.exports = IOSGroupcast;