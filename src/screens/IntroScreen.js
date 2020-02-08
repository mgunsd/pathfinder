import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import IntroSlides from "../components/IntroSlides";

const INTRO_DATA = [
  {
    bColor:"black", 
    source: require("../../assets/abackend.png"),
    title1:"Future Developer", 
    title2:"Welcome", 
    color:"white", 
    description:"No matter what your background is,\nyou can learn programming skills.\nBut where to begin?..",
  },
  {
    bColor:"white", 
    source: require("../../assets/atester.png"), 
    title1:"Path",
    title2:"Finder",
    color:"black",
    description:"..Will help you to choose a starting point that suits you the best.\nAssest your background knowlege,\nLearn what lies ahead, and choose your path with confident."
  },
];
const IntroScreen = ({navigation}) => {
  const onIntroComplete = () => {
    navigation.navigate('SignUp');
  }
  const ontestComplete = () => {
    navigation.navigate('mainFlow');
  }
  return( 
    //<SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
    <IntroSlides data={INTRO_DATA} onComplete={onIntroComplete} test={ontestComplete}/>
    //</SafeAreaView>
  );
};

IntroScreen.navigationOptions = {
  header: null
};
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
export default IntroScreen;
