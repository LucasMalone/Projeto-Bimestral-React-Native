import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
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
const Drawer = createDrawerNavigator();

// Defina o conteúdo do Drawer
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Configurações"
        onPress={() => props.navigation.navigate('Conf')}
      />
    </DrawerContentScrollView>
  );
}

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

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Perfil" component={Perfil} />
    <Drawer.Screen name="Turma" component={Turma} />
    <Drawer.Screen name="AluProf" component={AluProf} />
    <Drawer.Screen name="Vagas" component={Vagas} />
    <Drawer.Screen name="Cardapio" component={Cardapio} />
    <Drawer.Screen name="Conf" component={Conf} />
    <Drawer.Screen name="Sobrenos" component={Sobrenos} />
    <Drawer.Screen name="Encessar Sessão" component={LoginScreen} />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerNavigator">
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }} // Esconde o cabeçalho na tela principal do DrawerNavigator
        />
        <Stack.Screen
          name="TabNavigator"
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
        <Stack.Screen
        name="Cardapio"
        component={Cardapio}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}