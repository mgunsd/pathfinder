import React from 'react';
import { Text, TouchableOpacity,} from 'react-native';

const CustomButton = ({onPress, text, color, backgroundColor}) => {
  
  return(
    <TouchableOpacity 
      style={[styles.buttonStyle, {backgroundColor}]}
      onPress={onPress}
    >
      <Text 
        style={[styles.buttonText, {color}]}
        >
      {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = {
    buttonText: {
      fontSize: 17,
      fontWeight: "600",
      textAlign: 'center',
    },
    buttonStyle: {
      height: 50,
      marginVertical:20,
      justifyContent: 'space-around',
      borderRadius: 8, 
    },
  };    
export default CustomButton;