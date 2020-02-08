import React, { useReducer } from 'react';

export default (reducer, actions, defaultValue) => {
  //default value essentialy default state 
  const Context = React.createContext();

  const Provider = ({ children }) => {
    //helper provider component takes children as props

    const [state, dispatch] = useReducer(reducer, defaultValue);
    //setting up use reducer call, (dispatch here is the action)
    //wo reducer, we pass reducer function from abovr having all switch statements and cases in
    const boundActions = {};
    //loop over all of the function passed in (actions will be objects so will have key and value pairs)
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
//provider is component that makes the data available for everything else inside app
//contect is the contect object that we use to access that information from a child comp.
  return { Context, Provider };
};
