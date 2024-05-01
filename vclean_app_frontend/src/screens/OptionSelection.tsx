import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { Color, FontFamily } from '../components/GlobalStyles';
import {useNavigation} from '@react-navigation/native';

const OptionSelection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('.././assets/images/optionBackground.jpg')}
        resizeMode="cover"
      />
<View style={{width:'100%', alignItems:'flex-end',flex:0.2}}>
<Text style={[styles.text1,{marginRight:10}]}>Vclean</Text>
</View>
      <View style={{flex:0.5,}}>


      </View>
      <View style={{flex:0.3,}}>
        <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.textPara}>
        Start to become the savior of the earth !
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Login' as never);
        }}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button2}
        onPress={() => {
          navigation.navigate('Signup' as never);
        }}>
        <Text style={styles.buttonText2}>Sign up</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  text1: {
    fontSize: 20,
    fontFamily: FontFamily.poppinsSB,
    color: Color.white,
    marginTop: 50,
   
  },
  welcomeText: {
    fontSize: 30,
    fontFamily: FontFamily.poppinsSB,
    color: Color.white,
    marginLeft: 15,
  },
  textPara: {
    fontSize: 15,
    fontFamily: FontFamily.poppinsR,
    color: Color.white,
    marginLeft: 15,
  },

  button: {
    marginTop:10,
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent:'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: Color.primaryGreen,
    fontSize: 17,
    fontFamily: FontFamily.poppinsSB,
  },

  button2: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: Color.white,
    padding: 9,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent:'center',
    marginHorizontal: 20,
  },
  buttonText2: {
    color: Color.white,
    fontSize: 17,
    fontFamily: FontFamily.poppinsSB,
  },
});

export default OptionSelection;
