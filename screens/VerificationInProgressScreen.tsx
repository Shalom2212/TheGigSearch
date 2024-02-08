import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const VerificationInProgress = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full flex justify-center align-middle items-center p-4 ">
      <Image
        className="flex h-15 w-15 p-5"
        source={require('../assets/images/VerificationSuccesLogo.png')}
      />
      <View className="flex m-2 p-4">
        <Text className="text-3xl font-extrabold text-black text-center">
          Verification in progress
        </Text>
      </View>
      <View className="flex m-3 p-5">
        <Text className="text-base  text-black text-center">
          We have received your application and a member of our staff will get
          in touch with you shortly
        </Text>
      </View>
      <TouchableOpacity
        className="w-full bg-black rounded-xl p-4"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}>
        <Text className="text-white font-extrabold text-center text-base">
          Move to Home Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerificationInProgress;
