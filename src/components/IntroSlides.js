import React from 'react';
import { View, Text, ScrollView, Dimensions, Image, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

const SCREEN_WIDTH = Dimensions.get('window').width; //Dimentions returns how many pixel available on the device

const IntroSlides = ({data, onComplete, test}) => {

      const renderLastSlide = (index) => {
        if (index === data.length - 1) {
          return (
            <> 
            <CustomButton
             onPress={test}
             color= 'white'
             backgroundColor='black'
             text="Test"
            />
            <CustomButton
             onPress={onComplete}
             color= 'white'
             backgroundColor='black'
             text="Let's Begin!"
            />
            </>
          );
        }
      }
      
      const renderSlides = () => {
        return data.map((slide, index) => {
          return (
            <View
              key={slide.description}
              style={[styles.slideStyle, { backgroundColor: slide.bColor }]}
            >
              <Image style={styles.image} source = {slide.source}/>
              <View style= {styles.textContainer}>
              <Text style={[styles.title1, {color: slide.color}]}>{slide.title1}</Text> 
              <Text style={[styles.title2, {color: slide.color}]}>{slide.title2}</Text>
              <Text style={[styles.description, {color: slide.color}]}>{slide.description}</Text>
              {renderLastSlide(index)}
              </View>
              {/* why [] in style are important? */}
            </View>
          );
        });
      }

    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        pagingEnabled
        //showsHorizontalScrollIndicator={false}
        >
        {renderSlides()}
      </ScrollView>
        );
      
    }
    // StyleSheet.create({ why do we need that?
    const styles = StyleSheet.create({  
      slideStyle: {
        flex: 1,
        justifyContent: 'space-around',
        paddingHorizontal: 30,
        width: SCREEN_WIDTH
      },

      image: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: "contain",
        marginVertical: 50,
        //borderWidth: 5,
      },

      textContainer: {
        flex: 1,
      },
      
      title1: {
        fontSize: 40,
        fontWeight: "300",
      },

      title2: {
        fontSize: 48,
        fontWeight: "600",
        
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
  
export default IntroSlides;