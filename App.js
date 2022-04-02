import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';
import Portfolioscreen from './screens/Portfolioscreen';
import Mescreen from './screens/Mescreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Главная'>
        <Stack.Screen name='Главная'    component={Homescreen}
        options={{
          title: 'Главная',
          headerStyle:
           {
            backgroundColor: '#fafad2',
            }
          }}
          />
        <Stack.Screen name='Портфолио'    component={Portfolioscreen}
          options={{
          title: 'Мои работы',
          headerStyle: 
            {
            backgroundColor: '#f8f8ff',
            }
          }}/>
          <Stack.Screen name='Про меня'    component={Mescreen}
          options={{
          title: 'Про меня',
          headerStyle: 
            {
            backgroundColor: '#f8f8ff',
            }
          }}/>
        

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
