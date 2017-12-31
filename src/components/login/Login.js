import React, { Component } from 'react';
import { Image, View, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={logo} />
                    <Text style={styles.title} >CSR Astra Daihatsu</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        width: 150,
        height: 150,
        marginTop: 18

    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    title: {
        color: '#df0e2c',
        fontSize: 18,
        fontWeight: '600',
        width: 200,
        textAlign: 'center'
    },
    formContainer: {
        padding: 5
    }
});

const logo = require('../../../images/head-csr2.jpg');

export default Login;
