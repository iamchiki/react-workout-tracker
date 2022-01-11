import React, { useContext, useState } from 'react';
import WorkoutContext from '../store/context';

const StrengthItem = (props) => {
  const [inputValidation, setInputValidation] = useState({
    name: '',
    sets: '',
    reps: '',
    weight: '',
  });
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
    setInputValidation({ ...inputValidation, [id]: '' });
  };

  const svgClickHandler = () => {
    props.deleteRow(props.rowIndex);
    console.log('delet clicked');
  };

  const checkInputValidation = (e) => {
    console.dir(e.target);
    const { id } = e.target;
    if (e.target.value === '') {
      setInputValidation({ ...inputValidation, [id]: 'ring-1 ring-red-500' });
    }
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
        <label htmlFor='name' className='mb-1 text-sm text-at-light-green'>
          Exercise
        </label>
        <input
          type='text'
          className={`p-2 text-gray-500 focus:outline-none ${inputValidation.name}`}
          id='name'
          onChange={inputChangeHandler}
          value={ctx.exercises[props.rowIndex].name}
          onBlur={checkInputValidation}
        />
      </div>
      <div className='flex flex-col flex-1'>
        <label htmlFor='sets' className='mb-1 text-sm text-at-light-green'>
          Sets
        </label>
        <input
          type='number'
          className={`p-2 w-full text-gray-500 focus:outline-none ${inputValidation.sets}`}
          onChange={inputChangeHandler}
          value={ctx.exercises[props.rowIndex].sets}
          id='sets'
          onBlur={checkInputValidation}
        />
      </div>
      <div className='flex flex-col flex-1'>
        <label htmlFor='reps' className='mb-1 text-sm text-at-light-green'>
          Reps
        </label>
        <input
          type='number'
          className={`p-2 w-full text-gray-500 focus:outline-none ${inputValidation.reps}`}
          onChange={inputChangeHandler}
          value={ctx.exercises[props.rowIndex].reps}
          id='reps'
          onBlur={checkInputValidation}
        />
      </div>
      <div className='flex flex-col flex-1'>
        <label htmlFor='weight' className='mb-1 text-sm text-at-light-green'>
          Weight (LB's)
        </label>
        <input
          type='number'
          className={`p-2 w-full text-gray-500 focus:outline-none ${inputValidation.weight}`}
          onChange={inputChangeHandler}
          value={ctx.exercises[props.rowIndex].weight}
          id='weight'
          onBlur={checkInputValidation}
        />
      </div>
    </div>
  );
};

export default StrengthItem;
