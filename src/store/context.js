import React from 'react';

const WorkoutContext = React.createContext({
  currentUser: null,
  exercises: [],
  status: {
    type: null,
    message: '',
  },
});

export default WorkoutContext;
