/**
 * This file is part of umeng-push-server-sdk.
 * Copyright(c) 2018 LnsooXD<LnsooXD@gmail.com>
 * MIT Licensed
 *
 * @format
 * @Author: LnsooXD<LnsooXD@gmail.com>
 * @Date: 2018-07-24 00:35:24
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2018-07-24 02:31:00
 */

import {Demo} from './Demo';

(async () => {
  // TODO set your appkey and master secret here
  const demo: Demo = new Demo('your appkey', 'the app master secret');
  demo.sendAndroidUnicast();

  /* TODO these methods are all available, just fill in some fields and do the test
   * await demo.sendAndroidCustomizedcastFile();
   * await demo.sendAndroidBroadcast();
   * await demo.sendAndroidGroupcast();
   * await demo.sendAndroidCustomizedcast();
   * await demo.sendAndroidFilecast();
   * 
   * await demo.sendIOSBroadcast();
   * await demo.sendIOSUnicast();
   * await demo.sendIOSGroupcast();
   * await demo.sendIOSCustomizedcast();
   * await demo.sendIOSFilecast();
   */
})();
