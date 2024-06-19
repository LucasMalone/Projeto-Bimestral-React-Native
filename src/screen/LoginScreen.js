import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Aqui você faria a lógica de autenticação
    // Por simplicidade, vamos apenas navegar para HomeScreen
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text>E-mail</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Text>Senha</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Digite sua senha"
        secureTextEntry={true}
      />

      <Button
        title="Logar"
        onPress={handleLogin}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
