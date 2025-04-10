import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import TextFontFamily from '../../components/TextFontFamily';
import { TextInput } from 'react-native-gesture-handler';
import Button from '../../components/Button';

const logo = require('../../assets/icons/logo.png');

const Login = () => {
  return (
    <View>
        <Image source={logo} />
        <TextFontFamily>Loging</TextFontFamily>
        <TextFontFamily>Enter your emails and password</TextFontFamily>
        <View>
            <TextFontFamily>Email</TextFontFamily>
            <TextInput />
        </View>
        <View>
            <TextFontFamily>Password</TextFontFamily>
            <TextInput />
            <TextFontFamily>Forgon Password?</TextFontFamily>
        </View>
        <Button text="Log In" />
        <View>
        <TextFontFamily>Don't have an account?</TextFontFamily>
        <TouchableOpacity>
            <TextFontFamily>Singup</TextFontFamily>
        </TouchableOpacity>
        </View>
    </View>
  );
};

export default Login;
