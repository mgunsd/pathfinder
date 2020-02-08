import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
//this screen to prevent signup scrren when waiting for the token
const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return null;
};

export default ResolveAuthScreen;
