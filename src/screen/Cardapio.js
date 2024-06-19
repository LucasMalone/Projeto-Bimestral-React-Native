import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Cardapio = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Cardápio</Text>

      <View style={styles.weekDayContainer}>
        <Text style={styles.weekDay}>Segunda-feira</Text>
        <View style={styles.menuContainer}>
          <Text>Arroz integral</Text>
          <Text>Feijão</Text>
          <Text>Carne suína</Text>
          <Text>Salada</Text>
        </View>
      </View>

      <View style={styles.weekDayContainer}>
        <Text style={styles.weekDay}>Terça-feira</Text>
        <View style={styles.menuContainer}>
          <Text>Arroz integral</Text>
          <Text>Feijão</Text>
          <Text>Ovo</Text>
          <Text style={styles.dessert}>Sobremesa: Abacaxi</Text>
        </View>
      </View>

      <View style={styles.weekDayContainer}>
        <Text style={styles.weekDay}>Quarta-feira</Text>
        <View style={styles.menuContainer}>
          <Text>Arroz</Text>
          <Text>Feijão preto</Text>
          <Text>Atum</Text>
          <Text>Batata doce</Text>
          <Text style={styles.dessert}>Sobremesa:</Text>
        </View>
      </View>

      <View style={styles.weekDayContainer}>
        <Text style={styles.weekDay}>Quinta-feira</Text>
        <View style={styles.menuContainer}>
          <Text>Arroz integral</Text>
          <Text>Feijão</Text>
          <Text>Frango</Text>
          <Text>Legumes</Text>
        </View>
      </View>

      <View style={styles.weekDayContainer}>
        <Text style={styles.weekDay}>Sexta-feira</Text>
        <View style={styles.menuContainer}>
          <Text>Arroz</Text>
          <Text>Feijão preto</Text>
          <Text>Peixe</Text>
          <Text>Salada</Text>
          <Text style={styles.dessert}>Sobremesa: Pudim</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  weekDayContainer: {
    marginBottom: 20,
  },
  weekDay: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuContainer: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  dessert: {
    fontStyle: 'italic',
  },
});

export default Cardapio;