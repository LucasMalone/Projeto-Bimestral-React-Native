import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableWithoutFeedback, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Atividades = () => {
  const [notificacoes, setNotificacoes] = useState([]);

  useEffect(() => {
    // Adicionar uma notificação ao carregar a página
    adicionarNotificacao();
  }, []); // Executa apenas uma vez, quando o componente é montado

  // Função para adicionar uma nova notificação
  const adicionarNotificacao = () => {
    const novaNotificacao = {
      id: Math.random().toString(),
      usuario: 'Usuario',
      atividade: 'reagiu ao seu comentário',
      fotoUsuario: 'https://th.bing.com/th/id/OIP.5yYQS45nqRuMUGZL6lBN9QHaHa?rs=1&pid=ImgDetMain'
//'https://thumbs.dreamstime.com/b/anonymous-male-profile-sign-circle-man-avatar-graphic-sign-anonymous-male-profile-sign-circle-isolated-white-215427929.jpg'
    };
    setNotificacoes([...notificacoes, novaNotificacao]);
  };

  // Função para excluir uma notificação
  const excluirNotificacao = (id) => {
    const novaListaNotificacoes = notificacoes.filter((notificacao) => notificacao.id !== id);
    setNotificacoes(novaListaNotificacoes);
  };

  const handleLongPressNotification = (id) => {
    Alert.alert(
      [
      'Opções',
      'O que você deseja fazer?',

        { text: 'Cancelar', onPress: () => console.log('Cancelar') },
        { text: 'Excluir', onPress: () => excluirNotificacao(id) },
        { text: 'Visualizar', onPress: () => alert('Visualizar') }
      ],
      { cancelable: true }
    );
  };

  return (
     <View style={styles.container}>
      {/* Renderiza as notificações */}
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

      {/* Barra de navegação */}
      <View style={styles.navbarPaginas}>
        <Icon name="comment" size={30} color="#900" onPress={() => navigation.navigate('ReclamacoesSugest')} />
        <Icon name="home" size={30} color="#900" onPress={() => navigation.navigate('HomeScreen')} />
        <Icon name="tasks" size={30} color="#900" onPress={() => navigation.navigate('Atividades')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 10, // Espaçamento horizontal
    paddingTop: 10, // Espaçamento superior
  },
  notificacaoContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    width: '100%'
  },
  notificacaoContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  fotoUsuario: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  navbarPaginas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
  },
});

export default Atividades;
