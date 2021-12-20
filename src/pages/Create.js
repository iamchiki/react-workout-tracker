import React, { useReducer } from 'react';
import CardioInput from '../components/CardioInput';
import StrengthInput from '../components/StrengthInput';
import Button from '../components/UI/Button';
import InputComponent from '../components/UI/InputComponent';
import SelectComponent from '../components/UI/SelectComponent';

const initialState = { strength: false, cardio: false };
const reducer = (state, action) => {
  switch (action.type) {
    case 'strength':
      return {
        strength: true,
        cardio: false,
      };
    case 'cardio':
      return {
        strength: false,
        cardio: true,
      };
    default:
      return initialState;
  }
};

const Create = () => {
  const [workoutState, dispatch] = useReducer(reducer, initialState);
  const workoutTypeOptions = [
    { label: 'Select Workout', value: 'select-workout' },
    { label: 'Strength Training', value: 'strength' },
    { label: 'Cardio', value: 'cardio' },
  ];

  const optionChangeHandler = (optionValue) => {
    dispatch({ type: optionValue });
  };

  return (
    <div className='max-w-screen-sm mx-auto px-4 py-10'>
      <form className='p-8 flex flex-col bg-light-grey rounded-md shadow-lg'>
        <h1 className='text-3xl text-at-light-green mb-4'>Record Workout</h1>
        <InputComponent id='workout-name'>Workout Name</InputComponent>
        <SelectComponent
          onOptionChange={optionChangeHandler}
          id='workout-type'
          options={workoutTypeOptions}>
          Workout Type
        </SelectComponent>
        {workoutState.strength && <StrengthInput></StrengthInput>}
        {workoutState.cardio && <CardioInput></CardioInput>}
        <Button>Record Workout</Button>
      </form>
    </div>
  );
};

export default Create;
