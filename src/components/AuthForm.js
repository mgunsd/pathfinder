import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.form}>
      <Image style={styles.image} source = {require("../../assets/logofull-bw.png")}/>

      
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}  //equvalent to {newEmail=>setEmail(newEmail)}
        autoCapitalize="none"  
        autoCorrect={false}
      />
      
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword} //similar to setEmail
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={() => onSubmit({ email, password })}
        ><Text style={styles.buttonText} >{submitButtonText}</Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  },
  
  form: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
  },

  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "contain",
    marginVertical: 50,
    //padding: 150,
    //borderWidth: 5,
  },

  // textContainer: {
  //   flex: 1,
  // },
  
  // title1: {
  //   fontSize: 40,
  //   fontWeight: "300",
  // },

  // title2: {
  //   fontSize: 48,
  //   fontWeight: "600",
    
  // },

  // description: {
  //   opacity: 0.8,
  //   fontSize: 18,
  //   marginTop: 15,
    
  // },


  buttonText: {
    fontSize: 17,
    fontWeight: "600",
    color: "white",
    textAlign: 'center',
    //width: 100, //fix this temp solution
    
  },
  buttonStyle: {
    backgroundColor: 'black',
    height: 44,
    marginVertical:20,
    justifyContent: 'space-around',
    //alignItems: 'center', //why this is trouble on Android?
    borderRadius: 8, 
  },

});

export default AuthForm;
