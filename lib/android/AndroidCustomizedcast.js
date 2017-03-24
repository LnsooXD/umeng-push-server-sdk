'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const AndroidNotification = require('../AndroidNotification');

let AndroidCustomizedcast = function (_AndroidNotification) {
    _inherits(AndroidCustomizedcast, _AndroidNotification);

    function AndroidCustomizedcast(appKey, appMasterSecret) {
        _classCallCheck(this, AndroidCustomizedcast);

        var _this = _possibleConstructorReturn(this, (AndroidCustomizedcast.__proto__ || Object.getPrototypeOf(AndroidCustomizedcast)).call(this));

        _this.appMasterSecret = appMasterSecret;
        _this.setPredefinedKeyValue("appkey", appKey);
        _this.setPredefinedKeyValue("type", "customizedcast");
        return _this;
    }

    _createClass(AndroidCustomizedcast, [{
        key: 'setAlias',
        value: function setAlias(alias, aliasType) {
            this.setPredefinedKeyValue("alias", alias);
            this.setPredefinedKeyValue("alias_type", aliasType);
        }
    }, {
        key: 'setFileId',
        value: function setFileId(fileId, aliasType) {
            this.setPredefinedKeyValue("file_id", fileId);
            this.setPredefinedKeyValue("alias_type", aliasType);
        }
    }]);

    return AndroidCustomizedcast;
}(AndroidNotification);

exports = module.exports = AndroidCustomizedcast;