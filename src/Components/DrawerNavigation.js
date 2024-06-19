import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screen/HomeScreen'; // Corrigido o caminho para as telas
import Perfil from '../screen/Perfil';
import Turma from '../screen/Turma';
import AluProf from '../screen/AluProf';
import Vagas from '../screen/Vagas';
import Cardapio from '../screen/Cardapio';
import Conf from '../screen/Conf';
import Sobrenos from '../screen/Sobrenos';
import LoginScreen from '../screen/LoginScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Perfil" component={Perfil} />
        <Drawer.Screen name="Turma" component={Turma} />
        <Drawer.Screen name="AluProf" component={AluProf} />
        <Drawer.Screen name="Vagas" component={Vagas} />
        <Drawer.Screen name="Cardapio" component={Cardapio} />
        <Drawer.Screen name="Conf" component={Conf} />
        <Drawer.Screen name="Sobrenos" component={Sobrenos} />
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
