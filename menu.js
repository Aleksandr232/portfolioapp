import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet,  View, ScrollView, Image, Button, Linking, Text,  TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Homescreen from './screens/Homescreen';
import Mescreen from './screens/Mescreen';

export default function Menu({navigation}){
    const Tab = createBottomTabNavigator();
    return(
        <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Главная') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
        <Tab.Screen name="Главная" component={Homescreen} />
        <Tab.Screen name="Про меня" component={Mescreen} />
      </Tab.Navigator>
        </NavigationContainer>
    )
}