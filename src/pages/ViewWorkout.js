import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { uid } from 'uid';
import { db } from '../firebase/firebase-config';
import WorkoutContext from '../store/context';
import CardioEdit from './CardioEdit';
import StrengthEdit from './StrengthEdit';

const ViewWorkout = (props) => {
  // get context from store
  const ctx = useContext(WorkoutContext);

  // get workout info from previous router
  const location = useLocation();
  console.log(location.state);
  const workout = location.state;

  const [exerciseList, setExerciseList] = useState(workout.exercise);

  const [editMode, setEditMode] = useState(false);
  const [inputValues, setInputValues] = useState({
    workoutName: workout.workoutName,
  });

  // to enable edit mode for workouts update
  const toggleEditMode = () => {
    setEditMode((prevMode) => {
      return !prevMode;
    });
  };

  // to render strength or cardiio conditionally
  const renderExerciseList = (workoutType, exercise, index) => {
    if (workoutType == 'strength') {
      return (
        <StrengthEdit
          key={uid()}
          editMode={editMode}
          exerciseInfo={exercise}
          rowIndex={index}></StrengthEdit>
      );
    }
    return (
      <CardioEdit
        key={uid()}
        editMode={editMode}
        exerciseInfo={exercise}
        rowIndex={index}></CardioEdit>
    );
  };

  //  to add exercises inputs row
  const addExercise = () => {
    let exerciseInputs =
      workout.workoutType === 'strength'
        ? { name: '', sets: '', reps: '', weight: '' }
        : { type: '', distance: '', duration: '', pace: '' };

    ctx.exercises = [...exerciseList, exerciseInputs];
    console.log(ctx.exercises);
    setExerciseList(ctx.exercises);
  };

  // update value of existing workout
  const updateRecord = (params) => {
    console.log(ctx.exercises);
  };

  return (
    <div className='max-w-screen-sm mx-auto px-4 py-10'>
      <div
        className='flex flex-col items-center p-8 rounded-md shadow-md 
      bg-light-grey relative'>
        <div className='flex absolute left-2 top-2 gap-x-2'>
          <div
            onClick={toggleEditMode}
            className='h-7 w-7 rounded-full flex justify-center items-center cursor-pointer
        bg-at-light-green shadow-lg'>
            <img
              className='h-3.5 w-auto'
              src='@/assets/images/pencil-light.png'
              alt=''
            />
          </div>
          <div
            className='h-7 w-7 rounded-full flex justify-center items-center cursor-pointer
        bg-at-light-green shadow-lg'>
            <img
              className='h-3.5 w-auto'
              src='@/assets/images/trash-light.png'
              alt=''
            />
          </div>
        </div>
        <span
          className='mt-6 py-1.5 px-5 text-xs text-white bg-at-light-green
        rounded-lg shadow-md'>
          {workout.workoutType}
        </span>
        <div className='w-full mt-6'>
          {editMode && (
            <input
              type='text'
              className='p-2 w-full text-gray-500 focus:outline-none'
              defaultValue={inputValues.workoutName}
            />
          )}
          {!editMode && (
            <h1 className='text-at-light-green text-2xl text-center'>
              {workout.workoutName}
            </h1>
          )}
        </div>
      </div>
      <div
        className='mt-10 p-8 rounded-md flex flex-col item-center
      bg-light-grey shadow-md'>
        <div className='flex flex-col gap-y-4 w-full'>
          {exerciseList.map((exercise, index) => {
            return renderExerciseList(workout.workoutType, exercise, index);
          })}
          {editMode && (
            <button
              type='button'
              onClick={addExercise}
              className='py-2 px-6 rounded-sm self-start text-sm text-white
            bg-at-light-green duration-200 border-solid border-2 border-transparent
            hover:border-at-light-green hover:bg-white hover:text-at-light-green'>
              Add Exercise
            </button>
          )}
        </div>
      </div>
      {editMode && (
        <button
          type='button'
          onClick={updateRecord}
          className='mt-10 py-2 px-6 rounded-sm self-start text-sm text-white
            bg-at-light-green duration-200 border-solid border-2 border-transparent
            hover:border-at-light-green hover:bg-white hover:text-at-light-green'>
          Update Workout
        </button>
      )}
    </div>
  );
};

export default ViewWorkout;
