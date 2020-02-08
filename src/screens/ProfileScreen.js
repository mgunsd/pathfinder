import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import CustomButton from '../components/CustomButton';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

const ProfileScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={{ fontSize: 48, margin: 15 }}>Profile Screen</Text>
      <Spacer>
      <CustomButton
        onPress={signout}
        color= 'white'
        backgroundColor='black'
        text="Sign Out"
      />
      </Spacer>
    </SafeAreaView>
  );
};

ProfileScreen.navigationOptions = {
  title: 'Profile',
  tabBarIcon: <FontAwesome name="gear" size={20} />
 };

const styles = StyleSheet.create({});

export default ProfileScreen;
