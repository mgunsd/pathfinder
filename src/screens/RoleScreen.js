import React, { useState, useEffect } from 'react';
import { View,TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist'
 const ROLES = [
    { id:1, title: "Front end", pref: 1 },
    { id:2, title: "Back End", pref: 2 },
    { id:3, title: "Tester", pref: 3 ,} 
  ];
const data1 = ROLES.map((item, index) => ({
    label: item.title,
    key:item.id,
    index:index
   }));
const RoleScreen = () => {
  const [data, setData] = useState(data1);
 
  const renderItem = ({ item, index, drag, isActive }) => {
    return (
      <TouchableOpacity
        style={{ 
          height: 50, 
          backgroundColor: isActive ? 'black' : 'white',
          alignItems: 'flex-start', 
          justifyContent: 'center' 
        }}
        onLongPress={drag}
        onRelease={(index) => {index}}
      >
        <Text style={{ 
          fontWeight: 'bold',
          color: isActive ? 'white' : 'black', 
          fontSize: 18,
        }}> {index} =  {item.label}</Text>
      </TouchableOpacity>
    )
  };
  

  return (
    <View style={styles.slideStyle} >
      <Image style={styles.image} source={require("../../assets/id.png")}/>
        <View style= {styles.textContainer}>
          <Text style={styles.title}>Choose your role</Text> 
            <DraggableFlatList
              data= {data}
              renderItem={renderItem}
              keyExtractor={(item) => `draggable-item-${item.key}`}
              onDragEnd={({ data }) => setData(data)}
              onRelease={(item) => {item.index}}
            />  
        </View>
  </View>
    
  );
};
const styles = StyleSheet.create({
  slideStyle: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 30,
  },

  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "contain",
    marginVertical: 50,
    //borderWidth: 1,
  },

  textContainer: {
    flex: 1,
  },
  
  title: {
    fontSize: 20,
    fontWeight: "600",
  },

  text: {
    fontSize: 14,
    //fontWeight: "600",
    marginVertical: 20
    
  },

  description: {
    opacity: 0.8,
    fontSize: 18,
    marginTop: 15,
    
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "600",
    color: "white",
    textAlign: 'center',
    //width: 100, //fix this temp solution
  
  },
  buttonStyle: {
    backgroundColor: 'black',
    height: 50,
    marginVertical:20,
    justifyContent: 'space-around',
    //alignItems: 'center', //why this is trouble on Android?
    borderRadius: 8, 
  },
});


export default RoleScreen;
