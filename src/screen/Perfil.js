import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const FotoPerfil = () => (
  <Image
    source={require('../../assets/FotosPerfil/Foto-perfil-Anonima.jpg')}
    style={styles.fotoPerfil}
  />
);

const InformacoesPerfil = () => (
  <View style={styles.informacoesContainer}>
    <Text style={styles.nomeAluno}>Nome do Aluno(a)</Text>
    <Text style={styles.emailAluno}>Email: alunoteste@etec.sp.gov.br</Text>
    <View style={styles.dadosAluno}>
      <Text>RM: 99999</Text>
      <Text>Linkedin: aluno.br.com</Text>
    </View>
  </View>
);

const BotaoEditar = ({ onPress }) => (
  <View style={styles.botaoContainer}>
    <Button title="Editar Perfil" onPress={onPress} />
  </View>
);

const Perfil = () => {
  const EditarPerfil = () => {
    console.log('Editar perfil');
  };

  return (
    <View style={styles.container}>
      <FotoPerfil />
      <InformacoesPerfil />
      <BotaoEditar onPress={EditarPerfil} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 60,
  },
  fotoPerfil: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  informacoesContainer: {
    alignItems: 'center',
  },
  nomeAluno: {
    fontSize: 25,
    margin: 10,
  },
  emailAluno: {
    fontSize: 20,
    width:'100%'
  },
  dadosAluno: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    margin: 20,
    marginBottom: 20,
  },
  botaoContainer: {
    marginTop: 30,
    width: '100%'
  },
});

export default Perfil;
