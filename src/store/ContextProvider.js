import { onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase-config';
import WorkoutContext from './context';

const ContextProvider = (props) => {
  const [user, setUser] = useState();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const initialValues = {
    currentUser: user,
  };
  return (
    <WorkoutContext.Provider value={initialValues}>
      {props.children}
    </WorkoutContext.Provider>
  );
};

export default ContextProvider;
