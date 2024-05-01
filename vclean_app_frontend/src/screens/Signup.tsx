import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import { Color, FontFamily } from '../components/GlobalStyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.backImage}
        source={require('.././assets/images/siugupImage.jpg')}
        resizeMode="cover"
      />
      <Text style={styles.signupText}>Sign up</Text>
      <Text style={styles.miniText}>to get an account ! </Text>

      <View style={styles.squareFlex}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps={'never'}
          enableOnAndroid={true}
          automaticallyAdjustKeyboardInsets={true}
          showsVerticalScrollIndicator={false}>
          <InputField />

          <TouchableOpacity>
            <Text style={styles.bottomText}>
              Already have an account?
              <Text
                style={{color: '#00A3FF'}}
                onPress={() => {
                  navigation.navigate('Login' as never);
                }}>
                {' '}
                Login
              </Text>
            </Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

function InputField() {
  const [username, setUsername] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [errors, setErrors] = useState<{
    username?: string;
    phonenumber?: string;
    email?: string;
    password?: string;
    cpassword?: string;
  }>({});

  const validateForm = () => {
    let newErrors: {
      username?: string;
      phonenumber?: string;
      email?: string;
      password?: string;
      cpassword?: string;
    } = {};
    if (!username) newErrors.username = 'Enter Name';
    if (!phonenumber) newErrors.phonenumber = 'Enter Phone Number ';
    if (!email) newErrors.email = 'Enter Email';
    if (!password) newErrors.password = 'Enter Password';
    if (!cpassword) newErrors.cpassword = 'Enter Confirm password';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log(
        'Submitted',
        username,
        phonenumber,
        email,
        password,
        cpassword,
      );
      setUsername('');
      setPhonenumber('');
      setEmail('');
      setPassword('');
      setCpassword('');
      setErrors({});
    }
  };

  return (
    <View>
      <Text style={styles.attributeName}> Name </Text>
      <View
        style={{
          // backgroundColor:'red',
          height: 50,
          borderBottomWidth: 1,
          borderColor: errors.username ? 'red' : Color.grey,
          marginHorizontal: 20,
        }}>
        <TextInput
          placeholder={errors.username ? errors.username : 'Full name'}
          placeholderTextColor={errors.username ? 'red' : Color.lightGrey}
          style={{
            fontFamily: FontFamily.poppinsR,
            color: 'black',
            fontSize: 15,
          }}
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <Text style={styles.attributeName}> Phone </Text>
      <View
        style={{
          height: 50,
          borderBottomWidth: 1,
          borderColor: errors.phonenumber ? 'red' : Color.grey,
          marginHorizontal: 20,
        }}>
        <TextInput
          placeholder={
            errors.phonenumber ? errors.phonenumber : '+94XX-XXXX-XXXX'
          }
          placeholderTextColor={errors.phonenumber ? 'red' : Color.lightGrey}
          style={{
            fontFamily: FontFamily.poppinsR,
            color: 'black',
            fontSize: 15,
          }}
          value={phonenumber}
          onChangeText={setPhonenumber}
        />
      </View>

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
      <Text style={styles.attributeName}> Confirm Password </Text>
      <View
        style={{
          // backgroundColor:'red',
          height: 50,
          borderBottomWidth: 1,
          borderColor: errors.cpassword ? 'red' : Color.grey,
          marginHorizontal: 20,
        }}>
        <TextInput
          placeholder={
            errors.cpassword ? errors.cpassword : '*******************'
          }
          placeholderTextColor={errors.cpassword ? 'red' : Color.lightGrey}
          secureTextEntry={true}
          style={{
            fontFamily: FontFamily.poppinsR,
            color: 'black',
            fontSize: 15,
          }}
          value={cpassword}
          onChangeText={setCpassword}
        />
      </View>
      <TouchableOpacity
        style={{marginHorizontal: 20, marginTop: 20}}
        onPress={handleSubmit}>
        <LinearGradient
          colors={['#53E88B', '#1DB954']}
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          style={styles.gradientMap}>
          <Text style={styles.buttonText}>Sign up</Text>
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
    backgroundColor: Color.white,
    borderRadius: 15,
    marginTop: 20,
    marginHorizontal: 20,
    elevation: 20,
    shadowColor: Color.grey,
  },

  attributeName: {
    fontFamily: FontFamily.poppinsSB,
    fontSize: 16,
    color: Color.darkGrey,
    marginTop: 20,
    marginLeft: 20,
  },

  buttonText: {
    color: Color.white,
    fontSize: 17,
    fontFamily: FontFamily.poppinsSB,
  },

  gradientMap: {
    padding: 12,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    fontFamily: FontFamily.poppinsR,
    textAlign: 'center',
    padding: 10,
    marginTop: 11,
    color:Color.semiBlack,
  },

  ErrorText: {
    color: 'red',
    fontFamily: FontFamily.poppinsSB,
    textAlign: 'right',
    marginTop: 5,
    marginBottom: 5,
  },
});

export default Signup;
