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
  return (
    <div className='flex flex-col gap-x-6 gap-y-2 relative md:flex-row'>
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
          type='text'
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
          type='text'
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
          type='text'
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
