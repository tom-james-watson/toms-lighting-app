import PushNotification from 'react-native-push-notification';

let _color;

PushNotification.configure({

    onNotification: function () {
        // Recreate notification when it is selected
        setOngoingNotification(_color);
    },

    popInitialNotification: true,

    requestPermissions: true,
});

function setOngoingNotification(color) {
    _color = color;

    PushNotification.localNotification({
        id: '0',
        autoCancel: true,
        largeIcon: 'ic_notification',
        color: color,
        vibrate: false,
        playSound: false,
        ongoing: true,

        message: '',
        title: 'Tom\'s Lighting',
        actions: '["Turn Off"]',
    });
}

export { setOngoingNotification };
