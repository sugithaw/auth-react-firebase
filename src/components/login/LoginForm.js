import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection } from '../common';


class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    }

    onButtonPress() {
        const { email, password } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password);
    }

    render() {
        return (
            <Card>
            <CardSection>
                <View style={styles.container}>
                    <Text style={styles.labelStyle}>Email</Text>
                    <TextInput
                        style={styles.inputStyle}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        returnKeyType="next"
                        placeholder="user@gmail.com"
                        underlineColorAndroid="transparent"
                        keyboardType="email-address"
                        onSubmitEditing={() => this.passwordInput.focus()}                        
                    />
                </View>
            </CardSection>

            <CardSection>
                <View style={styles.container}>
                    <Text style={styles.labelStyle}>Password</Text>
                    <TextInput 
                        style={styles.inputStyle}
                        secureTextEntry
                        placeholder="*******"
                        returnKeyType="go"
                        value={this.state.password}
                        underlineColorAndroid="transparent"
                        onChangeText={password => this.setState({ password })}
                        ref={(input) => this.passwordInput = input}
                    />
                </View>
            </CardSection>

            <CardSection>
                <Button>
                    Register
                </Button>
                <Button onPress={this.onButtonPress.bind(this)}>
                    Login
                </Button>
            </CardSection>
        </Card>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 28,
        flex: 1
    }
});

export default LoginForm;
