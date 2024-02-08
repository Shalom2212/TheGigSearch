import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full flex justify-start align-middle items-center p-4 ">
      <View className="flex items-center">
        <Image
          className="flex h-15 w-15 p-5"
          source={require('../assets/images/Logo.png')}
        />
      </View>

      <View className="flex ">
        <Text className="text-3xl font-extrabold text-black ">Hey!</Text>
        <Text className="text-3xl font-extrabold text-black ">
          This is Gig Search prototype, which we are launching soon.
        </Text>
      </View>

      <View className="flex p-5">
        <Text className="text-base text-center">
          Assuming this is a home page, and students or comapny submit there
          application to check
        </Text>
      </View>
      <TouchableOpacity
        className="w-full bg-black rounded-xl p-4"
        onPress={() => {
          navigation.navigate('VerificationInProgressScreen');
        }}>
        <Text className="text-white font-extrabold text-center text-base">
          Submit application
        </Text>
      </TouchableOpacity>

      <View className="flex p-5">
        <Text className="text-base text-center">
          Thank very much for giving me oppertunity, I just want to be a part of
          this whole journey!
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;
