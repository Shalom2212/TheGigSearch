import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SuccessAuthScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full flex justify-center align-middle items-center p-4 ">
      <Image
        className="flex h-15 w-15 p-5"
        source={require('../assets/images/SuccessAuth.png')}
      />
      <View className="flex m-2 p-4">
        <Text className="text-3xl font-extrabold text-black text-center">
          Success!
        </Text>
      </View>
      <View className="flex p-5">
        <Text className="text-base text-center">
          Congratulations! You have been successfully authenticated
        </Text>
      </View>
      <TouchableOpacity
        className="w-full bg-black rounded-xl p-4"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}>
        <Text className="text-white font-extrabold text-center text-base">
          Countinue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessAuthScreen;
