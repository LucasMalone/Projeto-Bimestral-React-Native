import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Alert, ScrollView } from 'react-native';
import SwipeGestures from 'react-native-swipe-gestures';

const Atividades = ({ navigation }) => {
  const [notificacoes, setNotificacoes] = useState([]);

  useEffect(() => {
    adicionarNotificacao();
  }, []);

  const adicionarNotificacao = () => {
    const novaNotificacao = {
      id: Math.random().toString(),
      usuario: 'Usuario',
      atividade: 'reagiu ao seu comentário',
      fotoUsuario: 'https://th.bing.com/th/id/OIP.5yYQS45nqRuMUGZL6lBN9QHaHa?rs=1&pid=ImgDetMain'
    };
    setNotificacoes(prevNotificacoes => [...prevNotificacoes, novaNotificacao]);
  };

  const excluirNotificacao = (id) => {
    setNotificacoes(prevNotificacoes => prevNotificacoes.filter(notificacao => notificacao.id !== id));
  };

  const handleLongPressNotification = (id) => {
    Alert.alert(
      'Opções',
      'O que você deseja fazer?',
      [
        { text: 'Cancelar', onPress: () => console.log('Cancelar') },
        { text: 'Excluir', onPress: () => excluirNotificacao(id) },
        { text: 'Visualizar', onPress: () => alert('Visualizar') }
      ],
      { cancelable: true }
    );
  };

  const onSwipeLeft = () => {
    // Não faz nada ao deslizar para a esquerda
  };

  const onSwipeRight = () => {
    navigation.navigate('HomeScreen'); // Volta para a tela HomeScreen ao deslizar para a direita
  };

  return (
    <SwipeGestures
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      config={{ velocityThreshold: 0.1, directionalOffsetThreshold: 80 }}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.container}>
          {notificacoes.map((notificacao) => (
            <TouchableWithoutFeedback key={notificacao.id} onLongPress={() => handleLongPressNotification(notificacao.id)}>
              <View style={styles.notificacaoContainer}>
                <View style={styles.notificacaoContent}>
                  <Image source={{ uri: notificacao.fotoUsuario }} style={styles.fotoUsuario} />
                  <Text>{`${notificacao.usuario} ${notificacao.atividade}`}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    </SwipeGestures>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#f0f0f0',
    width: '100%', // Deixa o container principal expandir 100% da largura do dispositivo
  },
  notificacaoContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%', // Ajusta para preencher 100% da largura do container principal
  },
  notificacaoContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%' // Ajusta para preencher 100% da largura da notificação
  },
  fotoUsuario: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});

export default Atividades;
