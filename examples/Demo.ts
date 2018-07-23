/**
 * This file is part of umeng-push-server-sdk.
 * Copyright(c) 2018 LnsooXD<LnsooXD@gmail.com>
 * MIT Licensed
 *
 * @format
 * @Author: LnsooXD<LnsooXD@gmail.com>
 * @Date: 2018-07-24 00:35:24
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2018-07-24 02:28:07
 */

import PushClient = require('../lib/PushClient');

import AndroidBroadcast = require('../lib/android/AndroidBroadcast');
import AndroidUnicast = require('../lib/android/AndroidUnicast');
import AndroidGroupcast = require('../lib/android/AndroidGroupcast');
import AndroidCustomizedcast = require('../lib/android/AndroidCustomizedcast');
import AndroidFilecast = require('../lib/android/AndroidFilecast');
import {DisplayType} from '../lib/android/DisplayType';

import IOSBroadcast = require('../lib/ios/IOSBroadcast');
import IOSUnicast = require('../lib/ios/IOSUnicast');
import IOSGroupcast = require('../lib/ios/IOSGroupcast');
import IOSCustomizedcast = require('../lib/ios/IOSCustomizedcast');
import IOSFilecast = require('../lib/ios/IOSFilecast');

export class Demo {
  private readonly appkey: string = null;
  private readonly appMasterSecret: string = null;
  private readonly client: PushClient;

  public constructor(key: string, secret: string) {
    try {
      this.appkey = key;
      this.appMasterSecret = secret;
      this.client = new PushClient();
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

  public async sendAndroidBroadcast() {
    const broadcast: AndroidBroadcast = new AndroidBroadcast(
      this.appkey,
      this.appMasterSecret
    );
    broadcast.setTicker('Android broadcast ticker');
    broadcast.setTitle('中文的title');
    broadcast.setText('Android broadcast text');
    broadcast.goAppAfterOpen();
    broadcast.setDisplayType(DisplayType.NOTIFICATION);
    // TODO Set 'production_mode' to 'false' if it's a test device.
    // For how to register a test device, please see the developer doc.
    broadcast.setProductionMode();
    // Set customized fields
    broadcast.setExtraField('test', 'helloworld');
    await this.client.send(broadcast);
  }

  public async sendAndroidUnicast() {
    const unicast: AndroidUnicast = new AndroidUnicast(
      this.appkey,
      this.appMasterSecret
    );
    // TODO Set your device token
    unicast.setDeviceToken('your device token');
    unicast.setTicker('Android unicast ticker');
    unicast.setTitle('中文的title');
    unicast.setText('Android unicast text');
    unicast.goAppAfterOpen();
    unicast.setDisplayType(DisplayType.NOTIFICATION);
    // TODO Set 'production_mode' to 'false' if it's a test device.
    // For how to register a test device, please see the developer doc.
    unicast.setProductionMode();
    // Set customized fields
    unicast.setExtraField('test', 'helloworld');
    await this.client.send(unicast);
  }

  public async sendAndroidGroupcast() {
    const groupcast: AndroidGroupcast = new AndroidGroupcast(
      this.appkey,
      this.appMasterSecret
    );
    /*  TODO
		 *  Construct the filter condition:
		 *  "where": 
		 *	{
    	 *		"and": 
    	 *		[
      	 *			{"tag":"test"},
      	 *			{"tag":"Test"}
    	 *		]
		 *	}
		 */
    const filterJson = {
      where: {
        and: [
          {
            tag: 'test'
          },
          {
            tag: 'Test'
          }
        ]
      }
    };

    console.log(filterJson);

    groupcast.setFilter(filterJson);
    groupcast.setTicker('Android groupcast ticker');
    groupcast.setTitle('中文的title');
    groupcast.setText('Android groupcast text');
    groupcast.goAppAfterOpen();
    groupcast.setDisplayType(DisplayType.NOTIFICATION);
    // TODO Set 'production_mode' to 'false' if it's a test device.
    // For how to register a test device, please see the developer doc.
    groupcast.setProductionMode();
    await this.client.send(groupcast);
  }

  public async sendAndroidCustomizedcast() {
    const customizedcast: AndroidCustomizedcast = new AndroidCustomizedcast(
      this.appkey,
      this.appMasterSecret
    );
    // TODO Set your alias here, and use comma to split them if there are multiple alias.
    // And if you have many alias, you can also upload a file containing these alias, then
    // use file_id to send customized notification.
    customizedcast.setAlias('alias', 'alias_type');
    customizedcast.setTicker('Android customizedcast ticker');
    customizedcast.setTitle('中文的title');
    customizedcast.setText('Android customizedcast text');
    customizedcast.goAppAfterOpen();
    customizedcast.setDisplayType(DisplayType.NOTIFICATION);
    // TODO Set 'production_mode' to 'false' if it's a test device.
    // For how to register a test device, please see the developer doc.
    customizedcast.setProductionMode();
    await this.client.send(customizedcast);
  }

  public async sendAndroidCustomizedcastFile() {
    const customizedcast: AndroidCustomizedcast = new AndroidCustomizedcast(
      this.appkey,
      this.appMasterSecret
    );
    // TODO Set your alias here, and use comma to split them if there are multiple alias.
    // And if you have many alias, you can also upload a file containing these alias, then
    // use file_id to send customized notification.
    const fileId: string = await this.client.uploadContents(
      this.appkey,
      this.appMasterSecret,
      'aa' + '\n' + 'bb' + '\n' + 'alias'
    );
    customizedcast.setFileId(fileId, 'alias_type');
    customizedcast.setTicker('Android customizedcast ticker');
    customizedcast.setTitle('中文的title');
    customizedcast.setText('Android customizedcast text');
    customizedcast.goAppAfterOpen();
    customizedcast.setDisplayType(DisplayType.NOTIFICATION);
    // TODO Set 'production_mode' to 'false' if it's a test device.
    // For how to register a test device, please see the developer doc.
    customizedcast.setProductionMode();
    await this.client.send(customizedcast);
  }

  public async sendAndroidFilecast() {
    const filecast = new AndroidFilecast(this.appkey, this.appMasterSecret);
    // TODO upload your device tokens, and use '\n' to split them if there are multiple tokens
    const fileId: string = await this.client.uploadContents(
      this.appkey,
      this.appMasterSecret,
      'aa' + '\n' + 'bb'
    );
    filecast.setFileId(fileId);
    filecast.setTicker('Android filecast ticker');
    filecast.setTitle('中文的title');
    filecast.setText('Android filecast text');
    filecast.goAppAfterOpen();
    filecast.setDisplayType(DisplayType.NOTIFICATION);
    await this.client.send(filecast);
  }

  public async sendIOSBroadcast() {
    const broadcast: IOSBroadcast = new IOSBroadcast(
      this.appkey,
      this.appMasterSecret
    );

    broadcast.setAlert('IOS 广播测试');
    broadcast.setBadge(0);
    broadcast.setSound('default');
    // TODO set 'production_mode' to 'true' if your app is under production mode
    broadcast.setTestMode();
    // Set customized fields
    broadcast.setCustomizedField('test', 'helloworld');
    await this.client.send(broadcast);
  }

  public async sendIOSUnicast() {
    const unicast: IOSUnicast = new IOSUnicast(
      this.appkey,
      this.appMasterSecret
    );
    // TODO Set your device token
    unicast.setDeviceToken('xx');
    unicast.setAlert('IOS 单播测试');
    unicast.setBadge(0);
    unicast.setSound('default');
    // TODO set 'production_mode' to 'true' if your app is under production mode
    unicast.setTestMode();
    // Set customized fields
    unicast.setCustomizedField('test', 'helloworld');
    await this.client.send(unicast);
  }

  public async sendIOSGroupcast() {
    const groupcast: IOSGroupcast = new IOSGroupcast(
      this.appkey,
      this.appMasterSecret
    );
    /*  TODO
		 *  Construct the filter condition:
		 *  "where": 
		 *	{
    	 *		"and": 
    	 *		[
      	 *			{"tag":"iostest"}
    	 *		]
		 *	}
		 */
    const filterJson: any = {
      where: {
        and: [
          {
            tag: 'iostest'
          }
        ]
      }
    };

    console.log(filterJson);

    // Set filter condition into rootJson
    groupcast.setFilter(filterJson);
    groupcast.setAlert('IOS 组播测试');
    groupcast.setBadge(0);
    groupcast.setSound('default');
    // TODO set 'production_mode' to 'true' if your app is under production mode
    groupcast.setTestMode();
    await this.client.send(groupcast);
  }

  public async sendIOSCustomizedcast() {
    const customizedcast: IOSCustomizedcast = new IOSCustomizedcast(
      this.appkey,
      this.appMasterSecret
    );
    // TODO Set your alias and alias_type here, and use comma to split them if there are multiple alias.
    // And if you have many alias, you can also upload a file containing these alias, then
    // use file_id to send customized notification.
    customizedcast.setAlias('alias', 'alias_type');
    customizedcast.setAlert('IOS 个性化测试');
    customizedcast.setBadge(0);
    customizedcast.setSound('default');
    // TODO set 'production_mode' to 'true' if your app is under production mode
    customizedcast.setTestMode();
    await this.client.send(customizedcast);
  }

  public async sendIOSFilecast() {
    const filecast: IOSFilecast = new IOSFilecast(
      this.appkey,
      this.appMasterSecret
    );
    // TODO upload your device tokens, and use '\n' to split them if there are multiple tokens
    const fileId: string = await this.client.uploadContents(
      this.appkey,
      this.appMasterSecret,
      'aa' + '\n' + 'bb'
    );
    filecast.setFileId(fileId);
    filecast.setAlert('IOS 文件播测试');
    filecast.setBadge(0);
    filecast.setSound('default');
    // TODO set 'production_mode' to 'true' if your app is under production mode
    filecast.setTestMode();
    await this.client.send(filecast);
  }
}
