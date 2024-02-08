import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Modal,
  Button,
  ToastAndroid,
} from 'react-native';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

// GoogleSignin.configure({
//   webClientId:
//     '290780472967-pq5esigs53hhg50rtaqh2olkjrmiop63.apps.googleusercontent.com',
//   scopes: ['email'],
//   offlineAccess: true,
// });

const LoginScreen = () => {
  const navigation = useNavigation();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSignIn = async () => {
    try {
      if (!userEmail || !userPassword) {
        throw new Error('Please enter email and password.');
      }

      const userCredential = await auth().signInWithEmailAndPassword(
        userEmail,
        userPassword,
      );
      navigation.navigate('SuccessAuthScreen');
      console.log('Signed in user:', userCredential.user);
    } catch (error: any) {
      ToastAndroid.show('Incorrect email or password', ToastAndroid.SHORT);
    }
  };

  return (
    <View className="bg-white h-full w-full flex justify-around p-2">
      <ScrollView>
        <View className="flex items-center">
          <Image
            className="flex h-15 w-15 p-5"
            source={require('../assets/images/Logo.png')}
          />
        </View>

        <View className="p-4">
          <Text className="text-black text-3xl font-extrabold text-center p-1">
            Explore the app
          </Text>
          <Text className="text-black text-lg text-center">
            Now your finances are in one place and always under control
          </Text>
        </View>

        <View className="flex items-center mx-2 space-y-5">
          <Text className="text-base">Login to your account</Text>
          <View
            className="p-1 rounded-xl w-full"
            style={{borderWidth: 1, borderColor: 'balck'}}>
            <TextInput
              placeholder="Email address"
              placeholderTextColor={'gray'}
              value={userEmail}
              onChangeText={text => setUserEmail(text)}
            />
          </View>
          <View
            className="p-1 rounded-xl w-full m-3"
            style={{borderWidth: 1, borderColor: 'balck'}}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={'gray'}
              value={userPassword}
              onChangeText={text => setUserPassword(text)}
              secureTextEntry
            />
          </View>
          <View className="w-full">
            <TouchableOpacity
              className="w-full bg-black rounded-xl p-4"
              onPress={handleSignIn}>
              <Text className="text-white text-center font-bold">Login</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center">
            <Text>Don't have an account?</Text>
            <TouchableOpacity
              className="mx-2"
              onPress={() => navigation.navigate('SignUpScreen')}>
              <Text className="text-black font-extrabold">signup</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text className="text-center my-2">OR</Text>
        </View>

        <View className="flex items-center my-2 space-y-5">
          <TouchableOpacity
            className="flex-row justify-center items-center w-full  rounded-3xl p-2"
            style={{borderWidth: 1, borderColor: 'balck'}}
            onPress={() => {
              navigation.navigate('SuccessAuthScreen');
            }}>
            <Image source={require('../assets/images/Googlelogo.png')} />
            <Text className="text-black text-center font-bold p-2">
              Login with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row justify-center items-center w-full  rounded-3xl p-2"
            style={{borderWidth: 1, borderColor: 'balck'}}
            onPress={() => {
              navigation.navigate('SuccessAuthScreen');
            }}>
            <Image source={require('../assets/images/Applelogo.png')} />
            <Text className="text-black text-center font-bold p-2">
              Login with Apple
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
