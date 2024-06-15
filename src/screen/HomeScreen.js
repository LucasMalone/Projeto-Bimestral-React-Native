// HomeScreen.js

import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Você está na Home</Text>
      
      <Button
        title="Sobre nós"
        onPress={() => navigation.navigate('Sobrenos')}
        style={styles.button}
      />

      <Button
        title="Encerrar Sessão"
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
      />

      <Button
        title="Perfil"
        onPress={() => navigation.navigate('Perfil')}
        style={styles.button}
      />

      <Button
        title="Turma"
        onPress={() => navigation.navigate('Turma')}
        style={styles.button}
      />

      <Button
        title="Alunos e Professores"
        onPress={() => navigation.navigate('AluProf')}
        style={styles.button}
      />

      <Button
        title="Vagas"
        onPress={() => navigation.navigate('Vagas')}
        style={styles.button}
      />

      <Button
        title="Cardapio"
        onPress={() => navigation.navigate('Cardapio')}
        style={styles.button}
      />

      <Button
        title="Configurações"
        onPress={() => navigation.navigate('Conf')}
        style={styles.button}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    width: '80%',
  },
});
