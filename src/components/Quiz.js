import React from 'react';
import { View, Text, StyleSheet,} from 'react-native';

const Quiz = ({ ques, opt1, opt2, opt3, opt4,}) => {
  return (
    <View>
      <Text>{ques}</Text>
      <Text>{opt1}</Text>
      <Text>{opt2}</Text>
      <Text>{opt3}</Text>
      <Text>{opt4}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Quiz;
