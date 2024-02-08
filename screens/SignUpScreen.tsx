import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const navigate = useNavigation();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSignup = async () => {
    try {
      if (!userEmail || !userPassword) {
        throw new Error('Please enter email and password.');
      }
      const userCredential = await auth().createUserWithEmailAndPassword(
        userEmail,
        userPassword,
      );

      navigate.navigate('SuccessAuthScreen');
      console.log('Signed up user:', userCredential.user);
    } catch (error: any) {
      ToastAndroid.show(`${error.message}`, ToastAndroid.SHORT);
    }
  };
  return (
    <View className="bg-white h-full w-full flex justify-around p-2">
      <View className="flex items-center">
        <Image
          className="flex h-15 w-15 p-5"
          source={require('../assets/images/Logo.png')}
        />
      </View>

      <View className="flex items-center mx-2 space-y-5">
        <View className="p-4">
          <Text className="text-black text-3xl font-extrabold text-center p-1">
            Create account
          </Text>
        </View>
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
          className="p-1 rounded-xl w-full "
          style={{borderWidth: 1, borderColor: 'balck'}}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={'gray'}
            secureTextEntry
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
            onPress={handleSignup}>
            <Text className="text-white text-center font-bold">
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex justify-center">
          <Text>By creating an account or signing you agree to our </Text>
          <TouchableOpacity className="mx-2">
            <Text className="text-black font-extrabold text-center">
              Terms and Conditions
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
