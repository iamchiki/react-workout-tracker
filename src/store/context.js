import React from 'react';

const WorkoutContext = React.createContext({
  currentUser: null,
  exercises: [],
});

export default WorkoutContext;
