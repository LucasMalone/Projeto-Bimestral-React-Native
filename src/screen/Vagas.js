import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const VagasScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Vagas de Emprego e Estágios</Text>
      </View>
      <View style={styles.jobCard}>
        <View style={styles.profile}>
          <View style={styles.avatar}></View>
          <Text style={styles.jobTitle}>Vaga de Estágio</Text>
        </View>
        <View style={styles.jobDetails}>
          <Text style={styles.jobText}>- Promoção de vendas.</Text>
          <Text style={styles.sectionHeader}>CURSOS</Text>
          <Text style={styles.jobText}>- Técnico em Administração;</Text>
          <Text style={styles.jobText}>- Ensino Médio integrado a Administração.</Text>
          <Text style={styles.sectionHeader}>ATIVIDADES</Text>
          <Text style={styles.jobText}>- Sanar dúvidas dos clientes;</Text>
          <Text style={styles.jobText}>- Prestar atendimento via WhatsApp e telefone.</Text>
          <Text style={styles.sectionHeader}>REQUISITOS</Text>
          <Text style={styles.jobText}>- Conclusão: No 1° semestre de 2025 até o 2° semestre de 2026.</Text>
          <Text style={styles.sectionHeader}>BENEFÍCIOS</Text>
          <Text style={styles.jobText}>- Bolsa Auxílio de R$ 1200.00 por mês;</Text>
          <Text style={styles.jobText}>- Auxílio Transporte;</Text>
          <Text style={styles.jobText}>- Possibilidade de Efetivação.</Text>
          <Text style={styles.sectionHeader}>HORÁRIO E LOCAL DO ESTÁGIO</Text>
          <Text style={styles.jobText}>- De segunda a sexta-feira, das 10h às 17h, com 1h de intervalo.</Text>
          <Text style={styles.jobText}>- Vila Franca - São Bernardo do Campo - SP.</Text>
          <Text style={styles.jobText}>Anote o código 290291 e ligue para (011) 3514-9300 ou escaneie o QR code do cartaz.</Text>
        </View>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTitbpPlZxhBv9OEDhlDwl7AT8OrOSjYHbU-A&s' }}
          style={styles.image}
        />
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
  jobCard: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },
  profile: {
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
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  jobDetails: {
    marginBottom: 10,
  },
  jobText: {
    fontSize: 14,
    marginBottom: 5,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default VagasScreen;
