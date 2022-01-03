import React, { useContext, useState } from 'react';
import WorkoutContext from '../store/context';

const StrengthEdit = (props) => {
  const { name, sets, reps, weight } = props.exerciseInfo;
  const [inputValues, setInputValues] = useState({
    name: name,
    sets: sets,
    reps: reps,
    weight: weight,
  });

  const ctx = useContext(WorkoutContext);

  const inputChangeHandler = (e) => {
    const { id, value } = e.target;
    ctx.exercises[props.rowIndex][id] = value;
    setInputValues({ ...inputValues, [id]: value });
  };

  const deleteHandler = () => {
    props.deleteExercise(props.rowIndex);
  };

  console.log(ctx.exercises);
  return (
    <div className='flex flex-col gap-x-6 gap-y-2 relative sm:flex-row'>
      {props.editMode && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 48 48'
          className='h-4 w-auto absolute -left-5 cursor-pointer'
          onClick={deleteHandler}>
          <path
            fill='#44ba9f'
            d='M30.6,44H17.4c-2,0-3.7-1.4-4-3.4L9,11h30l-4.5,29.6C34.2,42.6,32.5,44,30.6,44z'
          />
          <path fill='#286d5d' d='M28 6L20 6 14 12 34 12z' />
          <path
            fill='#286d5d'
            d='M10,8h28c1.1,0,2,0.9,2,2v2H8v-2C8,8.9,8.9,8,10,8z'
          />
        </svg>
      )}
      <div className='flex flex-2 flex-col md:w-1/3'>
        <label className='mb-1 text-sm text-at-light-green'>Exercise</label>
        {props.editMode && (
          <input
            id='name'
            className='p-2 w-full text-gray-500 focus:outline-none'
            type='text'
            value={inputValues.name}
            onChange={inputChangeHandler}
          />
        )}
        {!props.editMode && <p>{name}</p>}
      </div>
      <div className='flex flex-1 flex-col'>
        <label className='mb-1 text-sm text-at-light-green'>Sets</label>
        {props.editMode && (
          <input
            id='sets'
            className='p-2 w-full text-gray-500 focus:outline-none'
            type='text'
            value={inputValues.sets}
            onChange={inputChangeHandler}
          />
        )}
        {!props.editMode && <p>{sets}</p>}
      </div>
      <div className='flex flex-1 flex-col'>
        <label className='mb-1 text-sm text-at-light-green'>Reps</label>
        {props.editMode && (
          <input
            id='reps'
            className='p-2 w-full text-gray-500 focus:outline-none'
            type='text'
            value={inputValues.reps}
            onChange={inputChangeHandler}
          />
        )}
        {!props.editMode && <p>{reps}</p>}
      </div>
      <div className='flex flex-1 flex-col'>
        <label className='mb-1 text-sm text-at-light-green'>
          Weight (LB's)
        </label>
        {props.editMode && (
          <input
            id='weight'
            className='p-2 w-full text-gray-500 focus:outline-none'
            type='text'
            value={inputValues.weight}
            onChange={inputChangeHandler}
          />
        )}
        {!props.editMode && <p>{weight}</p>}
      </div>
    </div>
  );
};

export default StrengthEdit;
