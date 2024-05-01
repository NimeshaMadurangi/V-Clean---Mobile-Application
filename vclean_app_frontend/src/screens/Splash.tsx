import {Image, StyleSheet, Text, View, Animated, Easing} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Color, FontFamily } from '../components/GlobalStyles';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const [animation] = useState(new Animated.Value(0));
  const [isGo, setIsGo] = useState<boolean>(true);
  const Navigation = useNavigation();

  useEffect(() => {
    if (isGo) {
      setTimeout(() => {
        Animated.timing(animation, {
          toValue: 1,
          duration: 800, // Adjust the duration of the animation as needed
          easing: Easing.ease,
          useNativeDriver: true,
        }).start(() => {
          setTimeout(() => {
            Navigation.navigate('OptionSelection' as never);
            setIsGo(false);
          }, 800); // Wait for the animation to complete before navigating
        });
      }, 1500);
    }
  }, [isGo, animation, Navigation]);

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -1000], // Adjust the distance you want to move up
  });

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        transform: [{translateY}],
      }}>
      <Image
        style={styles.logo}
        source={require('.././assets/images/vclean.png')}
      />
      <Text style={styles.bottomText}>
        {'Unite Determination and Steps to  \n Create a Waste-Free Earth'}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bottomText: {
    fontSize: 15,
    color: Color.grey,
    textAlign: 'center',
    fontFamily: FontFamily.poppinsR,
  },
  logo: {
    height: 300,
    width: 300,
    marginTop: 225,
    // alignItems:'center',
    marginHorizontal: 30,
    marginBottom: 225,
  },
  // Screen: {
  //     flex :1,
  //     backgroundColor: 'white',
  //     alignItems:"center",
  //     transform: [{ translateY }]
  // },
});

export default Splash;
