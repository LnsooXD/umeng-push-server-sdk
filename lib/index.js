exports = module.exports = {
    client: require('./PushClient'),
    ios: {
        base: require('./IOSNotification'),
        broadcast: require('./ios/IOSBroadcast'),
        customizedcast: require('./ios/IOSCustomizedcast'),
        filecast: require('./ios/IOSFilecast'),
        groupcast: require('./ios/IOSGroupcast'),
        unicast: require('./ios/IOSUnicast')
    },
    android: {
        base: require('./AndroidNotification'),
        broadcast: require('./android/AndroidBroadcast'),
        customizedcast: require('./android/AndroidCustomizedcast'),
        filecast: require('./android/AndroidFilecast'),
        groupcast: require('./android/AndroidGroupcast'),
        unicast: require('./android/AndroidUnicast')
    }
};