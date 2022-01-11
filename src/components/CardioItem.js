import React, { useContext, useState } from 'react';
import WorkoutContext from '../store/context';
import deleteIcon from '../assets/img/trash-light-green.f27ed677.png';

const CardioItem = (props) => {
  const [inputValidation, setInputValidation] = useState({
    type: '',
    distance: '',
    duration: '',
    pace: '',
  });

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
    setInputValidation({ ...inputValidation, [id]: '' });
  };

  const svgClickHandler = () => {
    props.deleteRow(props.rowIndex);
    console.log('delet clicked');
  };

  const checkInputValidation = (e) => {
    console.dir(e.target);
    const { id } = e.target;
    if (e.target.value === '' || e.target.value === 'select-type') {
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
        <label htmlFor='type' className='mb-1 text-sm text-at-light-green'>
          Type
        </label>
        <select
          id='type'
          className={`p-2 text-gray-500 focus:outline-none ${inputValidation.type}`}
          onChange={inputChangeHandler}
          value={ctx.exercises[props.rowIndex].type}
          onBlur={checkInputValidation}>
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
          className={`p-2 w-full text-gray-500 focus:outline-none ${inputValidation.distance}`}
          id='distance'
          onChange={inputChangeHandler}
          value={ctx.exercises[props.rowIndex].distance}
          onBlur={checkInputValidation}
        />
      </div>
      <div className='flex flex-col flex-1'>
        <label htmlFor='duration' className='mb-1 text-sm text-at-light-green'>
          Duration
        </label>
        <input
          type='number'
          className={`p-2 w-full text-gray-500 focus:outline-none ${inputValidation.duration}`}
          id='duration'
          onChange={inputChangeHandler}
          value={ctx.exercises[props.rowIndex].duration}
          onBlur={checkInputValidation}
        />
      </div>
      <div className='flex flex-col flex-1'>
        <label htmlFor='pace' className='mb-1 text-sm text-at-light-green'>
          Pace
        </label>
        <input
          type='number'
          className={`p-2 w-full text-gray-500 focus:outline-none ${inputValidation.pace}`}
          id='pace'
          onChange={inputChangeHandler}
          value={ctx.exercises[props.rowIndex].pace}
          onBlur={checkInputValidation}
        />
      </div>
    </div>
  );
};

export default CardioItem;
