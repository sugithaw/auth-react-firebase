import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import Login from './components/login/Login';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBXMCiH4MS-rALAojCu4fc0tOiv2nz7D90',
            authDomain: 'auth-dev-f3ee3.firebaseapp.com',
            databaseURL: 'https://auth-dev-f3ee3.firebaseio.com',
            projectId: 'auth-dev-f3ee3',
            storageBucket: 'auth-dev-f3ee3.appspot.com',
            messagingSenderId: '287117193295'
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText="Login" />
                <Login />
            </View>
        );
    }
}

export default App;
