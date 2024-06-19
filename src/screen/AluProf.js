import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';

const dataAlunos = [
  { key: '1', name: 'Guilherme Gomes', email: 'guilherme.silva2616@etec.sp.gov.br' },
  { key: '2', name: 'Fernanda Santos', email: 'fernanda.santos@etec.sp.gov.br' },
  { key: '3', name: 'Pedro Souza', email: 'pedro.souza@etec.sp.gov.br' },
  { key: '4', name: 'Mariana Oliveira', email: 'mariana.oliveira@etec.sp.gov.br' },
];

const dataProfessores = [
  { key: '1', name: 'Prof. Carlos Silva', email: 'carlos.silva@etec.sp.gov.br' },
  { key: '2', name: 'Prof. Ana Paula', email: 'ana.paula@etec.sp.gov.br' },
  { key: '3', name: 'Prof. Marcos Oliveira', email: 'marcos.oliveira@etec.sp.gov.br' },
];

const AlunosProfessoresScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.avatar}></View>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Alunos e Professores</Text>
      </View> */}

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Alunos da sua turma</Text>
        <View style={styles.sectionContent}>
          <FlatList
            data={dataAlunos}
            renderItem={renderItem}
            keyExtractor={item => item.key}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Professores da sua turma</Text>
        <View style={styles.sectionContent}>
          <FlatList
            data={dataProfessores}
            renderItem={renderItem}
            keyExtractor={item => item.key}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section: {
    padding: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionContent: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ddd',
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#555',
  },
});

export default AlunosProfessoresScreen;
