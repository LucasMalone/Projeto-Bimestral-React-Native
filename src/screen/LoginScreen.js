import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'


const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>E-mail</Text>
            <TextInput></TextInput>

            <Text>Senha</Text>
            <TextInput secureTextEntry={true}></TextInput>

            <Button
                title='Logar'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems: "center",
        justifyContent:"center"
    },
})