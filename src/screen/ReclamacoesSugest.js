// ReclamacoesSugest.js
import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ReclamacoesSugest = () => {
  const [assunto, setAssunto]= useState('');
  const [mensagem, setMensagem] = useState('');

  const EnviarReclamacoesouSugestoes=()=>{
    console.log('Assunto: ', assunto);
    console.log('Mensagem: ', mensagem);
  };

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.inputAssunto}
      placeholder="Assunto"
      value={assunto}
      onChangeText={text=>setAssunto(text)}
      />

      <TextInput
      style={[styles.inputMensagem,{height:150}]}
      multiline
      placeholder="Descreva a sua Reclamação ou Sugestão"
      value={mensagem}
      onChangeText={text=>setMensagem(text)}
      />

      <Button
      title="Enviar" onPress={EnviarReclamacoesouSugestoes}
      />

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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  inputAssunto: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },

  inputMensagem:{
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
    padding: 10
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

export default ReclamacoesSugest;

