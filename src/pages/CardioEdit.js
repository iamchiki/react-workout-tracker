import React, { useContext, useState } from 'react';
import WorkoutContext from '../store/context';

const CardioEdit = (props) => {
  const { distance, duration, pace, type } = props.exerciseInfo;
  const [inputValues, setInputValues] = useState({
    type: type,
    duration: duration,
    distance: distance,
    pace: pace,
  });

  const ctx = useContext(WorkoutContext);

  const inputChangeHandler = (e) => {
    const { id, value } = e.target;
    ctx.exercises[props.rowIndex][id] = value;
    setInputValues({ ...inputValues, [id]: value });
  };
  console.log(ctx.exercises);

  // delet exercis inputs from client side
  const deleteHandler = () => {
    console.log('delete');
    props.deleteExercise(props.rowIndex);
  };

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
        <label className='mb-1 text-sm text-at-light-green'>Type</label>
        {props.editMode && (
          <select
            id='type'
            className='p-2 w-full text-gray-500 focus:outline-none'
            type='text'
            value={inputValues.type}
            onChange={inputChangeHandler}>
            <option value='#'>Select Type</option>
            <option value='run'>Runs</option>
            <option value='walk'>Walk</option>
          </select>
        )}
        {!props.editMode && <p>{type}</p>}
      </div>
      <div className='flex flex-1 flex-col'>
        <label className='mb-1 text-sm text-at-light-green'>Distance</label>
        {props.editMode && (
          <input
            id='distance'
            className='p-2 w-full text-gray-500 focus:outline-none'
            type='text'
            value={inputValues.distance}
            onChange={inputChangeHandler}
          />
        )}
        {!props.editMode && <p>{distance}</p>}
      </div>
      <div className='flex flex-1 flex-col'>
        <label className='mb-1 text-sm text-at-light-green'>Duration</label>
        {props.editMode && (
          <input
            id='duration'
            className='p-2 w-full text-gray-500 focus:outline-none'
            type='text'
            value={inputValues.duration}
            onChange={inputChangeHandler}
          />
        )}
        {!props.editMode && <p>{duration}</p>}
      </div>
      <div className='flex flex-1 flex-col'>
        <label className='mb-1 text-sm text-at-light-green'>Pace</label>
        {props.editMode && (
          <input
            id='pace'
            className='p-2 w-full text-gray-500 focus:outline-none'
            type='text'
            value={inputValues.pace}
            onChange={inputChangeHandler}
          />
        )}
        {!props.editMode && <p>{pace}</p>}
      </div>
    </div>
  );
};

export default CardioEdit;
