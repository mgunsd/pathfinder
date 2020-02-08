import React, {useReducer} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Quiz from '../components/Quiz';
const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'increment' || 'decrement', payload: 1 }

  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};
//----
fetchQuestions = async () => {
  await this.setState({ loading: true });
  const response = await fetch(
    `https://opentdb.com/api.php?amount=10&difficulty=medium`
  );
  const questions = await response.json();

  const { results } = questions;

  results.forEach(item => {
    item.id = Math.floor(Math.random() * 10000);
  });

  await this.setState({ questions: results, loading: false });
};
//----

const QuizScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Text>Current Count:{state.count} </Text>
      <Quiz
        ques="How many bits make a byte?"
        opt1="16 bits"
        opt2="8 bits"
        opt3="128 bits"
        opt4="2 bits"
      />
      <Button
        title="Increase"
        onPress={() => {
         dispatch({ type: 'increment', payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
         dispatch({ type: 'decrement', payload: 1 });
        }}
      />
      


    </View>
  );
};

const styles = StyleSheet.create({});

export default QuizScreen;
