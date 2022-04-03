import React, { useRef, useState, useEffect } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { View, Text, Dimensions, StyleSheet, Platform } from "react-native";

const ENTRIES1 = [
  {
    title: <Text style={{fontSize: 20}}>Все привет! Меня зовут Александр!</Text>,
    illustration:
      "https://meportfolio.vercel.app/static/media/main_photo.e0291e7af039d255794e.jpg",
  },
  {
    title: (
      <Text style={{fontSize: 20}} >
        Я начинающий фронтенд разработчик! Совсем недавно, я даже не знал что
        такое HTML
      </Text>
    ),
    illustration:
      "https://meportfolio.vercel.app/static/media/rowing.3f4610345f198705e393.jpeg",
  },
  {
    title: (
      <Text style={{fontSize: 20}} >Но, было огромное желание погрузиться в эту реальность...</Text>
    ),
    illustration:
      "https://meportfolio.vercel.app/static/media/row.c901fd202e9e7bb08d74.jpeg",
  },
  {
    title: (
      <Text  style={{fontSize: 20}}>
        С юного возроста я занимаюсь греблей. Это очень красивый вид спорта,
        который воспитывает тебя не только предылевать усталость мышечнных
        волкон, но и волю.
      </Text>
    ),
    illustration:
      "https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRUs16WQNIGIo8Wc4PfeQn0A",
  },
  {
    title: (
      <Text style={{fontSize: 20}} >
        Гребля это не только красивый вид спорта, но и очень комадный спорт. Вы
        просто представьте, когда 9 человек гребут в одной лодке к своей мечте!
        Завораживающе! Не правда ли?
      </Text>
    ),
    illustration:
      "https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxR6tpHyZBBn7MHNaOnHrlzGQ",
  },
];
const { width: screenWidth } = Dimensions.get("window");

const Mescreen = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={4}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default Mescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 100,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
  
});

const text=StyleSheet.create({
  tex:{
    fontSize: 20
  }
})
