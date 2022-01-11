import React, { useContext, useState } from 'react';
import WorkoutContext from '../store/context';
import deleteIcon from '../assets/img/trash-light-green.f27ed677.png';

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
      <img
        src={deleteIcon}
        className='absolute h-4 w-auto -left-5 cursor-pointer'
        alt=''
        onClick={svgClickHandler}
      />
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
