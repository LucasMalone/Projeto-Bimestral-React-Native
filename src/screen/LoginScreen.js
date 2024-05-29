import React from 'react';
import styles from "./style";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'


const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>E-mail</Text>
            <TextInput style={styles.input}></TextInput>

            <Text>Senha</Text>
            <TextInput style={styles.input} /*secureTextEntry={true}*/></TextInput>

            <Button
                title='Entrar'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

export default LoginScreen

