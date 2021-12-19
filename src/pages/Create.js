import React from 'react';
import InputComponent from '../components/UI/InputComponent';
import SelectComponent from '../components/UI/SelectComponent';

const Create = () => {
  const workoutTypeOptions = [
    { label: 'Select Workout', value: 'select-workout' },
    { label: 'Strength Training', value: 'strength' },
    { label: 'Cardio', value: 'cardio' },
  ];
  return (
    <div className='max-w-screen-sm mx-auto px-4 py-10'>
      <form className='p-8 flex flex-col bg-light-grey rounded-md shadow-lg'>
        <h1 className='text-3xl text-at-light-green mb-4'>Record Workout</h1>
        <InputComponent id='workout-name'>Workout Name</InputComponent>
        <SelectComponent id='workout-type' options={workoutTypeOptions}>
          Workout Type
        </SelectComponent>
        <button
          type='submit'
          className='mt-6 py-2 px-6 rounded-sm self-start text-sm
      text-white bg-at-light-green duration-200 border-solid
      border-2 border-transparent hover:border-at-light-green hover:bg-white
      hover:text-at-light-green'>
          Record Workout
        </button>
      </form>
    </div>
  );
};

export default Create;
