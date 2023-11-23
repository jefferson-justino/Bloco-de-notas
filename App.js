// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './src/login.js';
import TelaCadastro from './src/cadastro.js';
import TelaInicial from './src/inicial.js';
import TelaRestaurarSenha from './src/restaurarSenha.js';
import Anotacoes from './src/anotacoes.js';
import Edicoes from './src/editar.js';

const Stack = createNativeStackNavigator();

export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator inicialRouteName='login'> 

        <Stack.Screen name="login" component={TelaLogin} options={{ headerShown: false }} />

        <Stack.Screen name='cadastro' component={TelaCadastro} options={{ headerShown: false }} />

        <Stack.Screen name='inicial' component={TelaInicial} options={{ headerShown: false }} />

        <Stack.Screen name='anotar' component={Anotacoes} options={{ headerShown: false }} />

        <Stack.Screen name='restaurar' component={TelaRestaurarSenha} options={{ headerShown: false }} />

        <Stack.Screen name='editar' component={Edicoes} options={{ headerShown: false }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}


