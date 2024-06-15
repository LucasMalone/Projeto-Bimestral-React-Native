// App.js

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screen/LoginScreen';
import HomeScreen from './src/screen/HomeScreen';
import ReclamacoesSugest from './src/screen/ReclamacoesSugest';
import Atividades from './src/screen/Atividades';
import Perfil from './src/screen/Perfil';
import Turma from './src/screen/Turma';
import AluProf from './src/screen/AluProf';
import Vagas from './src/screen/Vagas';
import Cardapio from './src/screen/Cardapio';
import Conf from './src/screen/Conf';
import Sobrenos from './src/screen/Sobrenos';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
      },
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Reclamacoes" component={ReclamacoesSugest} />
    <Tab.Screen name="Atividades" component={Atividades} />
  </Tab.Navigator>
);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para rastrear se o usuário está logado

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? "Home" : "Login"}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Esconde o cabeçalho na tela de Login
        />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }} // Esconde o cabeçalho na tela de Home
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
        />
          <Stack.Screen
          name="Turma"
          component={Turma}
        />
        <Stack.Screen
          name="AluProf"
          component={AluProf}
        />
        <Stack.Screen
          name="Vagas"
          component={Vagas}
        />
        <Stack.Screen
          name="Cardapio"
          component={Cardapio}
        />
        <Stack.Screen
          name="Conf"
          component={Conf}
        />
        <Stack.Screen
        name="Sobrenos"
        component={Sobrenos}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
