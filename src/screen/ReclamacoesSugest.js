import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SwipeGestures from 'react-native-swipe-gestures';

const ReclamacoesSugest = () => {
  const navigation = useNavigation();
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mensagemEnviada, setMensagemEnviada] = useState(false);
  const [mensagemErro, setMensagemErro] = useState('');

  const EnviarReclamacoesouSugestoes = () => {
    if (!assunto || !mensagem) {
      setMensagemErro('Por favor, preencha todos os campos.');
      setTimeout(() => {
        setMensagemErro('');
      }, 5000);
      return;
    }

    console.log('Assunto: ', assunto);
    console.log('Mensagem: ', mensagem);
    setAssunto('');
    setMensagem('');
    setMensagemEnviada(true);
    setMensagemErro('');

    setTimeout(() => {
      setMensagemEnviada(false);
    }, 5000);
  };

  const onSwipeLeft = () => {
    navigation.navigate('Home');
  };

  const onSwipeRight = () => {
    // Não faz nada na tela de ReclamacoesSugest
  };

  return (
    <SwipeGestures
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      config={{ velocityThreshold: 0.1, directionalOffsetThreshold: 80 }}
      style={styles.container}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.inputAssunto}
          placeholder="Assunto"
          value={assunto}
          onChangeText={text => setAssunto(text)}
        />

        <ScrollView
          style={styles.inputMensagemContainer}
          contentContainerStyle={styles.inputMensagemContentContainer}
        >
          <TextInput
            style={styles.inputMensagem}
            multiline
            placeholder="Descreva a sua Reclamação ou Sugestão"
            value={mensagem}
            onChangeText={text => setMensagem(text)}
          />
        </ScrollView>

        <Button
          title="Enviar"
          onPress={EnviarReclamacoesouSugestoes}
        />
        {mensagemErro !== '' && (
          <Text style={styles.mensagemErro}>{mensagemErro}</Text>
        )}
        {mensagemEnviada && (
          <Text style={styles.mensagemEnviada}>Mensagem enviada com sucesso!</Text>
        )}
      </View>
    </SwipeGestures>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: '#f0f0f0',
  },
  inputAssunto: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  inputMensagemContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
    maxHeight: 300,
    marginBottom: 10,
  },
  inputMensagemContentContainer: {
    flexGrow: 1,
  },
  inputMensagem: {
    flex: 1,
    padding: 10,
  },
  mensagemEnviada: {
    color: 'green',
    marginTop: 10,
  },
  mensagemErro: {
    color: 'red',
    marginTop: 10,
  },
});

export default ReclamacoesSugest;
