import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "./view/loginScreen";
import { RegisterScreen } from "./view/registerScreen";


export type RootStackParamList = {
  LoginScreen: undefined;
  RegistroScreen: undefined;
  Perfil: { correo_usuario: string };
}

const Stack = createNativeStackNavigator <RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }} initialRouteName='LoginScreen'>
        <Stack.Screen 
          name='LoginScreen' 
          component={LoginScreen} 
        />
        <Stack.Screen 
          name='RegisterScreen' 
          component={RegisterScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App