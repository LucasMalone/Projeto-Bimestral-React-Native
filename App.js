import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Reclamacoes e Sugestoes"
          component={ReclamacoesSugest}
        />

        <Stack.Screen
          name="Atividades"
          component={Atividades}
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

      </Stack.Navigator>
    </NavigationContainer>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

