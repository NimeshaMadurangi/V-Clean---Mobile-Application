import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import { Color, FontFamily } from '../components/GlobalStyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from '@rneui/themed';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Svg, {Path} from 'react-native-svg';

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.backImage}
        source={require('.././assets/images/siugupImage.jpg')}
        resizeMode="cover"
      />
      <Text style={styles.signupText}>Login</Text>
      <Text style={styles.miniText}>to access the app ! </Text>

      <View style={[styles.squareFlex, {alignItems: 'center'}]}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps={'never'}
          enableOnAndroid={true}
          automaticallyAdjustKeyboardInsets={true}>
          <InputField />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 35,
            }}>
            <View>
              <Text style={{color:Color.semiBlack,}}>___________</Text>
            </View>
            <View>
              <Text style={{fontFamily: FontFamily.poppinsR,color:Color.semiBlack,}}>
                or continue with
              </Text>
            </View>
            <View>
              <Text style={{color:Color.semiBlack,}}>___________</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 40,
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.iconBox}>
              <View style={{justifyContent: 'center'}}>
                <Icon color="#395185" name={'facebook'} type="font-awesome-5" />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 15}}>
                <Text style={{fontFamily: FontFamily.poppinsR,color:Color.semiBlack,}}>Facebook</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBox}>
              <View style={{justifyContent: 'center'}}>
                <View>
                  <Svg width="30" height="30" viewBox="0 0 50 50">
                    <Path
                      fill="#ffc107"
                      d="M43.611 20.083h-1.611v-.083h-18v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-11.045 0-20 8.955-20 20s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                    />
                    <Path
                      fill="#1976d2"
                      d="M43.611 20.083h-1.611v-.083h-18v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238c-.438.398 6.591-4.807 6.591-14.807 0-1.341-.138-2.65-.389-3.917z"
                    />

                    <Path
                      fill="#ff3d00"
                      d="M15.306 18.691 15.306 18.691c1.778-4.402 6.084-7.51 11.123-7.51 3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-7.682 0-14.344 4.337-17.694 10.691z"
                    />

                    <Path
                      fill="#4caf50"
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238c-2.008 1.521-4.504 2.43-7.219 2.43-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025c3.31 6.477 10.032 10.921 17.805 10.921z"
                    />
                  </Svg>
                </View>
              </View>
              <View style={{justifyContent: 'center', marginLeft: 15}}>
                <Text style={{fontFamily: FontFamily.poppinsR,color:Color.semiBlack,}}>google</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text style={styles.bottomText}>
              Don't have an account yet?
              <Text
                style={{color: '#00A3FF'}}
                onPress={() => {
                  navigation.navigate('Signup' as never);
                }}>
                {' '}
                Sign up
              </Text>
            </Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};
function InputField() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const tempMail = 'abc@gmail.com';
  const tempPs = '123';
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  const validateForm = () => {
    let newErrors: {
      email?: string;
      password?: string;
    } = {};
    if (!email) newErrors.email = 'Enter email';
    if (!password) newErrors.password = 'Enter password';

    if (tempMail === email && tempPs === password) {
      navigation.navigate('Home' as never);
    } else {
      setErrors(newErrors);
    }

    return Object.keys(newErrors).length === 0;
  };

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Submitted', email, password);
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <View>
      <Text style={styles.attributeName}> Email </Text>
      <View
        style={{
          height: 50,
          borderBottomWidth: 1,
          borderColor: errors.email ? 'red' : Color.grey,
          marginHorizontal: 20,
        }}>
        <TextInput
          placeholder={errors.email ? errors.email : 'xxxxx@gmail.com'}
          placeholderTextColor={errors.email ? 'red' : Color.lightGrey}
          style={{
            fontFamily: FontFamily.poppinsR,
            color: 'black',
            fontSize: 15,
          }}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <Text style={styles.attributeName}> Password </Text>
      <View
        style={{
          height: 50,
          borderBottomWidth: 1,
          borderColor: errors.password ? 'red' : Color.grey,
          marginHorizontal: 20,
        }}>
        <TextInput
          placeholder={
            errors.password ? errors.password : '*******************'
          }
          placeholderTextColor={errors.password ? 'red' : Color.lightGrey}
          secureTextEntry={true}
          style={{
            fontFamily: FontFamily.poppinsR,
            color: 'black',
            fontSize: 15,
          }}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password ?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{marginHorizontal: 20, marginTop: 20}}
        onPress={handleSubmit}>
        <LinearGradient
          colors={['#53E88B', '#1DB954']}
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          style={styles.gradientMap}>
          <Text style={styles.buttonText}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Color.bone,
    alignContent: 'center',
  },

  backImage: {
    width: '100%',
    height: 250,
    position: 'absolute',
  },

  signupText: {
    fontSize: 30,
    fontFamily: FontFamily.poppinsSB,
    color: 'white',
    marginTop: 43,
    marginLeft: 20,
  },

  miniText: {
    fontSize: 14,
    fontFamily: FontFamily.poppinsR,
    color: Color.white,
    marginLeft: 20,
  },

  squareFlex: {
    flex: 1,
    backgroundColor: Color.white,
    borderRadius: 15,
    width: 360,
    height: 625,
    position: 'absolute',
    marginTop: 150,
    marginHorizontal: 16,
    elevation: 20,
    shadowColor: Color.grey,
    alignContent: 'center',
    alignItems: 'center',
  },

  attributeName: {
    fontFamily: FontFamily.poppinsSB,
    fontSize: 16,
    color: Color.darkGrey,
    marginTop: 20,
    marginLeft: 20,
  },

  button: {
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 30,
    width: 350,
    marginHorizontal: 20,
  },
  buttonText: {
    color: Color.white,
    fontSize: 17,
    fontFamily: FontFamily.poppinsSB,
  },

  gradientMap: {
    padding: 12,
    borderRadius: 30,
    width: 325,
    justifyContent: 'center',
    alignItems: 'center',
  },

  forgotText: {
    color: Color.darkGrey,
    fontFamily: FontFamily.poppinsR,
    textAlign: 'right',
    marginRight: 20,
    marginTop: 15,
  },

  iconBox: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-evenly',
    borderColor: Color.grey,
    borderWidth: 1,
    borderRadius: 10,
    width: 160,
    height: 67,
  },

  bottomText: {
    marginTop: 40,
    fontFamily: FontFamily.poppinsR,
    marginHorizontal: 50,
    color:Color.semiBlack,
  },
});

export default Login;
