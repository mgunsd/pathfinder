import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        style={styles.text.marginVertical}
        onPress={() => navigation.navigate('Quiz')}
        title="Go to Quiz"
      />
      <Button
        style={styles.text.marginVertical}
        title="Go to Role"
        onPress={() => navigation.navigate('Role')}
      />
      <Button
        style={styles.text.marginVertical}
        title="Go to Account"
        onPress={() => navigation.navigate('Account')}
      />
     
    </View>
  );
};


const styles = StyleSheet.create({ 
    text: {
    fontSize: 30,
    marginVertical: 20
  },
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red'
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'green'
  },
  viewTwoParent: {
    height: 100,
    justifyContent: 'flex-end'
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'purple'
  }
});

export default HomeScreen;
