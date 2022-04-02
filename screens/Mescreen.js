import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Button,
  Linking,
  Text,
  TouchableOpacity,
} from "react-native";

export default function Mescreen() {
  return (
    <ScrollView>
      <Image
        style={styles.img}
        source={{
          uri: "https://meportfolio.vercel.app/static/media/main_photo.e0291e7af039d255794e.jpg",
        }}
      />
      <Text style={styles.text}>
        Всем привет! {"\n"}Меня зовут Александр!{"\n"} Я начинающий фронтенд разработчик!
        Совсем недавно, я даже не знал что такое HTML{"\n"} Но, было огромное желание
        погрузиться в эту реальность... С юного возроста я занимаюсь греблей.
        Это очень красивый вид спорта, который воспитывает тебя не только
        предылевать усталость мышечнных волкон, но и волю. Гребля это не только
        красивый вид спорта, но и очень комадный спорт. {"\n"} Вы просто представьте,
        когда 9 человек гребут в одной лодке к своей мечте! Завораживающе! Не
        правда ли?
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    top: 10,
    width: 350,
    height: 350,
    borderRadius: 20,
  },
  text: {
    top: 10,
    fontSize: 24,
    fontStyle: 'italic',
    
  },
});
