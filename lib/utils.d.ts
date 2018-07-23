/**
 * This file is part of umeng-push-server-sdk.
 * Copyright(c) 2018 LnsooXD<LnsooXD@gmail.com>
 * MIT Licensed
 *
 * @format
 * @Author: LnsooXD<LnsooXD@gmail.com>
 * @Date: 2018-07-24 00:35:24
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2018-07-24 00:35:48
 */
declare function md5Hex(value: string | ArrayBufferView): string;
declare function containsValue(obj: any, value: any): boolean;
declare function readonlyProperty(obj: any, name: string, value: any): void;
declare function readonlyPropertyObject(obj: any): {};
declare const _default: {
    md5Hex: typeof md5Hex;
    containsValue: typeof containsValue;
    readonlyProperty: typeof readonlyProperty;
    readonlyPropertyObject: typeof readonlyPropertyObject;
};
export = _default;
