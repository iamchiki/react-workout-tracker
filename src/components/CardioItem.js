import React, { useContext, useState } from 'react';
import WorkoutContext from '../store/context';

const CardioItem = (props) => {
  const [inputValues, setInputValues] = useState({
    type: '',
    distance: '',
    duration: '',
    pace: '',
  });
  const ctx = useContext(WorkoutContext);

  const inputChangeHandler = (e) => {
    const { id, value } = e.target;
    ctx.exercises[props.rowIndex][id] = value;
    setInputValues({ ...inputValues, [id]: value });
  };

  const svgClickHandler = () => {
    props.deleteRow(props.rowIndex);
    console.log('delet clicked');
  };
  return (
    <div className='flex flex-col gap-x-6 gap-y-2 relative md:flex-row'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 48 48'
        className='h-4 w-auto absolute -left-5 cursor-pointer'
        onClick={svgClickHandler}>
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
      <div className='flex flex-col'>
        <label htmlFor='type' className='mb-1 text-sm text-at-light-green'>
          Type
        </label>
        <select
          id='type'
          className='p-2 text-gray-500 focus:outline-none'
          onChange={inputChangeHandler}
          value={ctx.exercises[props.rowIndex].type}>
          <option value='select-type'>Select Type</option>
          <option value='run'>Runs</option>
          <option value='walk'>Walk</option>
        </select>
      </div>
      <div className='flex flex-col flex-1'>
        <label htmlFor='distance' className='mb-1 text-sm text-at-light-green'>
          Distance
        </label>
        <input
          type='number'
          className='p-2 w-full text-gray-500 focus:outline-none'
          id='distance'
          onChange={inputChangeHandler}
          value={ctx.exercises[props.rowIndex].distance}
        />
      </div>
      <div className='flex flex-col flex-1'>
        <label htmlFor='duration' className='mb-1 text-sm text-at-light-green'>
          Duration
        </label>
        <input
          type='number'
          className='p-2 w-full text-gray-500 focus:outline-none'
          id='duration'
          onChange={inputChangeHandler}
          value={ctx.exercises[props.rowIndex].duration}
        />
      </div>
      <div className='flex flex-col flex-1'>
        <label htmlFor='pace' className='mb-1 text-sm text-at-light-green'>
          Pace
        </label>
        <input
          type='number'
          className='p-2 w-full text-gray-500 focus:outline-none'
          id='pace'
          onChange={inputChangeHandler}
          value={ctx.exercises[props.rowIndex].pace}
        />
      </div>
    </div>
  );
};

export default CardioItem;
