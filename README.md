# Umeng Push Server SDK for NodeJs

## Installation

```sh
npm i -S meng-push-server-sdk
```

## Usage

> Android

```javascript
const push = require('umeng-push-server-sdk');
const client = new push.client();
const AndroidUnicast = push.android.unicast;
const AndroidNotification = push.android.base;

const appKey = 'xxxxxx';
const appMasterSecret = 'xxxxx';

const unicast = new AndroidUnicast(appKey, appMasterSecret);
// Set your device token
unicast.setDeviceToken("your device token");
unicast.setTicker("Android unicast ticker");
unicast.setTitle("中文的title");
unicast.setText("Android unicast text");
unicast.goAppAfterOpen();
unicast.setDisplayType(AndroidNotification.DisplayType.NOTIFICATION);
// Set 'production_mode' to 'false' if it's a test device.
// For how to register a test device, please see the developer doc.
unicast.setProductionMode();
// Set customized fields
unicast.setExtraField("test", "helloworld");
// Set Huawei Xiaomi Flyme Notify
unicast.setMipush(true);
unicast.setMi_activity('com.umeng.message.example.MipushTestActivity');

client.send(unicast);
```

> IOS

```javascript
const push = require('umeng-push-server-sdk');
const client = new push.client();
const IOSUnicast = push.ios.unicast;

const appKey = 'xxx';
const appMasterSecret = 'xxx';

const unicast = new IOSUnicast(appKey, appMasterSecret);
// Set your device token
unicast.setDeviceToken("Your device token");
unicast.setAlert("IOS unicast");
unicast.setBadge(0);
unicast.setSound("default");
// set 'production_mode' to 'true' if your app is under production mode
unicast.setProductionMode();
// Set customized fields
unicast.setCustomizedField("test", "helloworld");
client.send(unicast);
```

> For a full-fearture demo, see [Demo.ts](https://github.com/LnsooXD/umeng-push-server-sdk/blob/master/examples/Demo.ts) and [RunDemo.ts](https://github.com/LnsooXD/umeng-push-server-sdk/blob/master/examples/RunDemo.ts)

## Author

- [LnsooXD](https://github.com/LnsooXD)

## Contributors

- [LnsooXD](https://github.com/LnsooXD)
- [ZhichengChen](https://github.com/ZhichengChen)

## License

- [MIT](http://spdx.org/licenses/MIT)