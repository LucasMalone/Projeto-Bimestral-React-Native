import React from 'react';
import styles from "./style";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'


const LoginScreen = ({navigation}) => {
    return (

        <View style={styles.container}>

            <View style={styles.titleLogin}>
                <Text style={styles.pageTitle}>JK Info</Text>
            </View>

            <View>
                <Text>Login</Text>
            </View>
                
            <View style={styles.formLogin}>
            <Text>E-mail</Text>
                <TextInput style={styles.input}></TextInput>

                <Text>Senha</Text>
                <TextInput style={styles.input} /*secureTextEntry={true}*/></TextInput>

                <Button
                    title='Entrar'
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>
    );
}

export default LoginScreen

