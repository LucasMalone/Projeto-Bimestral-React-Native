// import React from 'react';
// import styles from "./style";
// import { Button, StyleSheet, Text, TextInput, View } from 'react-native'


// const HomeScreen = ({navigation}) => {
//     return (
//         <View style={styles.container}>
//             <Text>NEYMAR</Text>
//             <TextInput style={styles.input}></TextInput>

//             <Text>Senha</Text>
//             <TextInput secureTextEntry={true}></TextInput>
//         </View>
//     );
// }

// export default HomeScreen

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('Feed');

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Sugestões</Text>
          <Text style={styles.headerButtonText}>Reclamações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Pesquisar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Atividade</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.tabs}>
          <TouchableOpacity 
          onPress={() => handleTabPress('Feed')} 
          style={[styles.tab, selectedTab === 'Feed' && styles.selectedTab]}>
            <Text style={styles.tabText}>Feed</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress('Perfil')} style={[styles.tab, selectedTab === 'Perfil' && styles.selectedTab]}>
            <Text style={styles.tabText}>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress('Turma')} style={[styles.tab, selectedTab === 'Turma' && styles.selectedTab]}>
            <Text style={styles.tabText}>Turma</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress('Boletim')} style={[styles.tab, selectedTab === 'Boletim' && styles.selectedTab]}>
            <Text style={styles.tabText}>Boletim</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress('Estágios')} style={[styles.tab, selectedTab === 'Estágios' && styles.selectedTab]}>
            <Text style={styles.tabText}>Estágios</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress('Cardápio')} style={[styles.tab, selectedTab === 'Cardápio' && styles.selectedTab]}>
            <Text style={styles.tabText}>Cardápio</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress('Calendário')} style={[styles.tab, selectedTab === 'Calendário' && styles.selectedTab]}>
            <Text style={styles.tabText}>Calendário</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress('Eventos Escolares')} style={[styles.tab, selectedTab === 'Eventos Escolares' && styles.selectedTab]}>
            <Text style={styles.tabText}>Eventos Escolares</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress('Configurações')} style={[styles.tab, selectedTab === 'Configurações' && styles.selectedTab]}>
            <Text style={styles.tabText}>Configurações</Text>
          </TouchableOpacity>
        </View>

        {selectedTab === 'Feed' && (
          <View style={styles.feed}>
            <Text style={styles.feedText}>Feed Content</Text>
            <TouchableOpacity style={styles.feedButton}>
              <Text style={styles.feedButtonText}>Reagir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.feedButton}>
              <Text style={styles.feedButtonText}>Comentar</Text>
            </TouchableOpacity>
          </View>
        )}

        {selectedTab === 'Perfil' && (
          <View style={styles.profile}>
            <Text style={styles.profileText}>Perfil Content</Text>
          </View>
        )}

        {selectedTab === 'Turma' && (
          <View style={styles.turma}>
            <Text style={styles.turmaText}>Turma Content</Text>
          </View>
        )}

        {selectedTab === 'Boletim' && (
          <View style={styles.boletim}>
            <Text style={styles.boletimText}>Boletim Content</Text>
          </View>
        )}

        {selectedTab === 'Estágios' && (
          <View style={styles.estagios}>
            <Text style={styles.estagiosText}>Estágios Content</Text>
          </View>
        )}

        {selectedTab === 'Cardápio' && (
          <View style={styles.cardapio}>
            <Text style={styles.cardapioText}>Cardápio Content</Text>
          </View>
        )}

        {selectedTab === 'Calendário' && (
          <View style={styles.calendario}>
            <Text style={styles.calendarioText}>Calendário Content</Text>
          </View>
        )}

        {selectedTab === 'Eventos Escolares' && (
          <View style={styles.eventosEscolares}>
            <Text style={styles.eventosEscolaresText}>Eventos Escolares Content</Text>
          </View>
        )}

        {selectedTab === 'Configurações' && (
          <View style={styles.configuracoes}>
            <Text style={styles.configuracoesText}>Configurações Content</Text>
            <TouchableOpacity style={styles.configuracoesButton}>
              <Text style={styles.configuracoesButtonText}>Sair</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 10,
    marginBottom: 10,
  },
  headerButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  headerButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tab: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#e9ecef',
  },
  selectedTab: {
    backgroundColor: '#007bff',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  feed: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  feedText: {
    fontSize: 16,
    marginBottom: 10,
  },
  feedButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#007bff',
    marginBottom: 10,
  },
  feedButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  profile: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  profileText: {
    fontSize: 16,
  },
  turma: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  turmaText: {
    fontSize: 16,
  },
  boletim: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  boletimText: {
    fontSize: 16,
  },
  estagios: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  estagiosText: {
    fontSize: 16,
  },
  cardapio: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  cardapioText: {
    fontSize: 16,
  },
  calendario: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  calendarioText: {
    fontSize: 16,
  },
  eventosEscolares: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  eventosEscolaresText: {
    fontSize: 16,
  },
  configuracoes: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  configuracoesText: {
    fontSize: 16,
    marginBottom: 10,
  },
  configuracoesButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#dc3545',
  },
  configuracoesButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default App;