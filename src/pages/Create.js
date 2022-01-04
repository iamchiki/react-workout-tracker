import React, { useContext, useReducer, useRef } from 'react';
import CardioInput from '../components/CardioInput';
import StrengthInput from '../components/StrengthInput';
import InputComponent from '../components/UI/InputComponent';
import SelectComponent from '../components/UI/SelectComponent';
import WorkoutContext from '../store/context';
import { doc, setDoc } from 'firebase/firestore';
import { uid } from 'uid';
import { db } from '../firebase/firebase-config';
import { useNavigate } from 'react-router-dom';

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
  const ctx = useContext(WorkoutContext);

  const navigate = useNavigate();

  // refference for dom node
  const workOutNameRef = useRef('');
  const workOutTypeRef = useRef('');

  // workout select option
  const workoutTypeOptions = [
    { label: 'Select Workout', value: 'select-workout' },
    { label: 'Strength Training', value: 'strength' },
    { label: 'Cardio', value: 'cardio' },
  ];

  // take value onchanging select optiona
  const optionChangeHandler = (optionValue) => {
    dispatch({ type: optionValue });

    if (optionValue === 'strength') {
      ctx.exercises = [{ name: '', sets: '', reps: '', weight: '' }];
    } else if (optionValue === 'cardio') {
      ctx.exercises = [{ type: '', distance: '', duration: '', pace: '' }];
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(ctx.exercises);
      const workouts = {
        workoutName: workOutNameRef.current.value,
        workoutType: workOutTypeRef.current.value,
        exercise: ctx.exercises,
      };
      await setDoc(
        doc(db, 'users', ctx.currentUser.uid, 'workouts', uid()),
        workouts
      );

      await setDoc(doc(db, 'users', ctx.currentUser.uid), {
        userId: ctx.currentUser.uid,
      });
      navigate('/home');
      // console.log(workout);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='max-w-screen-sm mx-auto px-4 py-10'>
      <form
        onSubmit={submitHandler}
        className='p-8 flex flex-col bg-light-grey rounded-md shadow-lg'>
        <h1 className='text-3xl text-at-light-green mb-4'>Record Workout</h1>
        <InputComponent ref={workOutNameRef} id='workout-name'>
          Workout Name
        </InputComponent>
        <SelectComponent
          onOptionChange={optionChangeHandler}
          id='workout-type'
          options={workoutTypeOptions}
          ref={workOutTypeRef}>
          Workout Type
        </SelectComponent>
        {workoutState.strength && <StrengthInput></StrengthInput>}
        {workoutState.cardio && <CardioInput></CardioInput>}
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
