import { StyleSheet,  View, ImageBackground, Button, Linking, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const image={uri:'https://st3.depositphotos.com/1006362/12625/i/600/depositphotos_126254668-stock-photo-garibaldi-lake-in-canada.jpg'}

export default function Homescreen({navigation}) {
    

    
      return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.im} resizeMode="cover">
              <Text style={styles.name}>Я, Мельников Александр</Text>
              <Text style={styles.front}>Фронтенд-разработчик из города Казани</Text>
              <View style={styles.button}>
                  <Button title='портфолио' onPress={()=>navigation.navigate('Портфолио')}  color={'#ff8c00'} borderRadius={17} />
              </View>
              <View style={styles.bume}>
                <Button title='про меня' color={'#ff8c00'}  onPress={()=>navigation.navigate('Про меня')}  />
              </View>
                
            </ImageBackground>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      im:{
        flex: 1,
        justifyContent: "center",
        width:'100%',
        height:'100%'
      },
      button:{
        width: 150,
        left: 10,
        justifyContent: 'space-around',
        color: '#ff8c00',
        borderRadius: 50,
        
      },
      bume:{
        bottom: 36,
        width: 150,
        left: 235,
        justifyContent: 'space-around'
      },
      name:{
        textAlign:'center',
        bottom: 180,
        fontSize: 25,
        color:'black'
      },
      front:{
        bottom: 180,
        fontSize: 16
      }
    });