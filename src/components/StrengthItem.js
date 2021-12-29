import React, { useContext, useState } from 'react';
import WorkoutContext from '../store/context';

const StrengthItem = (props) => {
  const [inputValues, setInputValues] = useState({
    name: '',
    sets: '',
    reps: '',
    weight: '',
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
        <label htmlFor='name' className='mb-1 text-sm text-at-light-green'>
          Exercise
        </label>
        <input
          type='text'
          className='p-2 text-gray-500 focus:outline-none'
          id='name'
          onChange={inputChangeHandler}
          value={ctx.exercises[props.rowIndex].name}
        />
      </div>
      <div className='flex flex-col flex-1'>
        <label htmlFor='sets' className='mb-1 text-sm text-at-light-green'>
          Sets
        </label>
        <input
          type='text'
          className='p-2 w-full text-gray-500 focus:outline-none'
          onChange={inputChangeHandler}
          value={ctx.exercises[props.rowIndex].sets}
          id='sets'
        />
      </div>
      <div className='flex flex-col flex-1'>
        <label htmlFor='reps' className='mb-1 text-sm text-at-light-green'>
          Reps
        </label>
        <input
          type='text'
          className='p-2 w-full text-gray-500 focus:outline-none'
          onChange={inputChangeHandler}
          value={ctx.exercises[props.rowIndex].reps}
          id='reps'
        />
      </div>
      <div className='flex flex-col flex-1'>
        <label htmlFor='weight' className='mb-1 text-sm text-at-light-green'>
          Weight (LB's)
        </label>
        <input
          type='text'
          className='p-2 w-full text-gray-500 focus:outline-none'
          onChange={inputChangeHandler}
          value={ctx.exercises[props.rowIndex].weight}
          id='weight'
        />
      </div>
    </div>
  );
};

export default StrengthItem;
