import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({ 
    label, value, onChangeText, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container} >
            <Text style={styles.labelStyle} >{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                style={styles.inputStyle}
                value={value}
                onChangeText={onChangeText}
                autoCorrect={false}
                placeholder={placeholder}
                underlineColorAndroid="transparent"
            />
        </View>
    );
};

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

export { Input };
