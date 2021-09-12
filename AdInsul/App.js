import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Login from './src/pages/Login/index';
import Aplicar from './src/pages/Aplicar/index';
import Sobre from './src/pages/Sobre/index';

const Stack = createStackNavigator();

export default function App(){
  return (
   <NavigationContainer>
     <Stack.Navigator inicialRouteName="Login">
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Aplicar" component={Aplicar}/>
      <Stack.Screen name="Sobre" component={Sobre}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}
