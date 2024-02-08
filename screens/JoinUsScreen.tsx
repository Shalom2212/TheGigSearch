import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const JoinUsScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full flex justify-around p-4 ">
      <View className="flex items-center">
        <Image
          className="flex h-15 w-15 p-5"
          source={require('../assets/images/Logo.png')}
        />
      </View>

      <View className="space-y-6 mb-20 pb-14">
        <Text className="text-3xl font-extrabold text-black">Join Us!</Text>
        <View>
          <Text className="text-xl text-black/4">
            To begin this journey, tell us what
          </Text>
          <Text className="text-xl">type of account you’d be opening.</Text>
        </View>
        <View>
          <TouchableOpacity
            className="flex-row justify-between items-center w-full  rounded-xl p-5"
            // style={{
            //   shadowOffset: {width: 0, height: 1},
            //   shadowOpacity: 0.1,
            //   shadowColor: '#000',
            //   shadowRadius: 1,
            //   elevation: 10,
            // }}
            style={{borderWidth: 1, borderColor: 'balck'}}
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}>
            <Image
              source={require('../assets/images/IndiviualLogo.png')}
              className="h-12 w-12 mx-8"
            />
            <View className="px-12 mx-2">
              <Text className="text-black font-bold p-2 text-xl">
                Individual
              </Text>
              <Text className="text-black  p-2 text-base">
                Looking for Jobs
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            className="flex-row justify-between items-center w-full  rounded-xl p-5"
            // style={{
            //   shadowOffset: {width: 0, height: 1},
            //   shadowOpacity: 0.1,
            //   shadowColor: '#000',
            //   shadowRadius: 2,
            //   elevation: 10,
            // }}
            style={{borderWidth: 1, borderColor: 'balck'}}
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}>
            <Image
              source={require('../assets/images/CompanyLogo.png')}
              className="h-12 w-12 mx-8"
            />
            <View className="px-12 mx-2">
              <Text className="text-black font-bold p-2 text-xl">Company</Text>
              <Text className="text-black  p-2 text-base">
                Looking for Staffs
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default JoinUsScreen;
