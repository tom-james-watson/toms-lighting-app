/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ToolbarAndroid,
    View,
    DeviceEventEmitter,
} from 'react-native';
import { TriangleColorPicker } from 'react-native-color-picker';
import PushNotification from 'react-native-push-notification';
import { setColor, turnOff } from './unicorn';
import { setOngoingNotification } from './notification';

export default class TomsLighting extends Component {

    constructor(props) {
        super(props);
        this.state = { color: null };
        this.registerNotificationHandler();
    }

    registerNotificationHandler() {
        PushNotification.registerNotificationActions(['Turn Off']);
        DeviceEventEmitter.addListener(
            'notificationActionReceived',
            function (action){
                console.log ('Notification action received: ', action);
                const info = JSON.parse(action.dataJSON);
                if (info.action == 'Turn Off') {
                    this.handleOff();
                }
            }.bind(this)
        );
    }

    handleColorSelected(color) {
        setOngoingNotification(color);
        setColor(color);
        this.setState({ color: color });
    }

    handleOff() {
        turnOff();
        PushNotification.cancelAllLocalNotifications();
        this.setState({ color: null });
    }

    render() {
        let toolbarActions = [];
        if (this.state.color) {
            toolbarActions = [{title: 'Turn Off', show: 'always'}];
        }
        return (
            <View>
                <ToolbarAndroid
                    title="Tom's Lighting"
                    style={styles.toolbar}
                    actions={toolbarActions}
                    onActionSelected={this.handleOff.bind(this)}
                />
                <View style={styles.body}>
                    <TriangleColorPicker
                        onColorSelected={this.handleColorSelected.bind(this)}
                        style={styles.triangleColorPicker}
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    toolbar: {
        height: '10%',
        backgroundColor: 'white'
    },
    body: {
        height: '90%',
        padding: 30,
        backgroundColor: 'black',
    },
    triangleColorPicker: {
        flex: 1,
        marginTop: 5,
        marginBottom: 50
    },
});


AppRegistry.registerComponent('TomsLighting', () => TomsLighting);
