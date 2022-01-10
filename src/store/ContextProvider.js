import { onAuthStateChanged } from 'firebase/auth';
import React, { useReducer, useState } from 'react';
import { auth } from '../firebase/firebase-config';
import WorkoutContext from './context';

const ContextProvider = (props) => {
  const [user, setUser] = useState();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const initialValues = {
    currentUser: user,
    exercises: [],
    status: {
      type: null,
      message: '',
    },
  };
  return (
    <WorkoutContext.Provider value={initialValues}>
      {props.children}
    </WorkoutContext.Provider>
  );
};

export default ContextProvider;
