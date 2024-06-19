import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TurmaScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.avatar}></View>
        <View>
          <Text style={styles.studentName}>Nome do aluno(a)</Text>
          <Text style={styles.rm}>RM</Text>
        </View>
      </View>

      <View style={styles.newsSection}>
        <Text style={styles.newsHeader}>Notícias da Turma</Text>
        <View style={styles.newsItem}>
          <Text>Leonardo: Postada a atividade de PAM</Text>
          <Text>Jefferson: Data de entrega da atividade de DES</Text>
          <Text>Ederson: Enviado o Power Point da aula de sexta</Text>
        </View>
      </View>

      <View style={styles.courseSection}>
        <Text style={styles.courseHeader}>Curso</Text>
        <Text style={styles.courseName}>Desenvolvimento de Sistemas</Text>

        {/* Mini tabela */}
        <View style={styles.table}>
          {/* Cabeçalho da tabela */}
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Turma</Text>
            <Text style={styles.tableHeaderText}>Semestre</Text>
            <Text style={styles.tableHeaderText}>Ano</Text>
            <Text style={styles.tableHeaderText}>Módulo</Text>
            <Text style={styles.tableHeaderText}>Situação</Text>
          </View>

          {/* Linha de dados da tabela */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>A1</Text>
            <Text style={styles.tableCell}>1º Semestre</Text>
            <Text style={styles.tableCell}>2024</Text>
            <Text style={styles.tableCell}>Introdução</Text>
            <Text style={styles.tableCell}>Em andamento</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>A1</Text>
            <Text style={styles.tableCell}>1º Semestre</Text>
            <Text style={styles.tableCell}>2024</Text>
            <Text style={styles.tableCell}>Introdução</Text>
            <Text style={styles.tableCell}>Em andamento</Text>
          </View>
          {/* Adicione mais linhas de dados conforme necessário */}
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
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ddd',
    marginRight: 10,
  },
  studentName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rm: {
    fontSize: 14,
    color: '#555',
  },
  newsSection: {
    padding: 10,
  },
  newsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newsItem: {
    backgroundColor: '#f1f1f1',
    padding: 30,
    borderRadius: 5,
  },
  courseSection: {
    padding: 10,
  },
  courseHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  courseName: {
    fontSize: 16,
    marginBottom: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    padding: 10,
  },
});

export default TurmaScreen;
