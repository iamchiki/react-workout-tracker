import React, { useContext, useState } from 'react';
import WorkoutContext from '../store/context';
import deleteIcon from '../assets/img/trash-light-green.f27ed677.png';

const CardioEdit = (props) => {
  const [inputValidation, setInputValidation] = useState({
    type: '',
    distance: '',
    duration: '',
    pace: '',
  });

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
    setInputValidation({ ...inputValidation, [id]: '' });
  };
  console.log(ctx.exercises);

  // delet exercis inputs from client side
  const deleteHandler = () => {
    console.log('delete');
    props.deleteExercise(props.rowIndex);
  };

  const checkInputValidation = (e) => {
    console.dir(e.target);
    const { id } = e.target;
    if (e.target.value === '' || e.target.value === '#') {
      setInputValidation({ ...inputValidation, [id]: 'ring-1 ring-red-500' });
    }
  };

  return (
    <div className='flex flex-col gap-x-6 gap-y-2 relative sm:flex-row'>
      {props.editMode && (
        <img
          src={deleteIcon}
          className='absolute h-4 w-auto -left-5 cursor-pointer'
          alt=''
          onClick={deleteHandler}
        />
      )}
      <div className='flex flex-2 flex-col md:w-1/3'>
        <label className='mb-1 text-sm text-at-light-green'>Type</label>
        {props.editMode && (
          <select
            id='type'
            className={`p-2 w-full text-gray-500 focus:outline-none ${inputValidation.type}`}
            type='text'
            value={inputValues.type}
            onChange={inputChangeHandler}
            onBlur={checkInputValidation}>
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
            className={`p-2 w-full text-gray-500 focus:outline-none ${inputValidation.distance}`}
            type='number'
            value={inputValues.distance}
            onChange={inputChangeHandler}
            onBlur={checkInputValidation}
          />
        )}
        {!props.editMode && <p>{distance}</p>}
      </div>
      <div className='flex flex-1 flex-col'>
        <label className='mb-1 text-sm text-at-light-green'>Duration</label>
        {props.editMode && (
          <input
            id='duration'
            className={`p-2 w-full text-gray-500 focus:outline-none ${inputValidation.duration}`}
            type='number'
            value={inputValues.duration}
            onChange={inputChangeHandler}
            onBlur={checkInputValidation}
          />
        )}
        {!props.editMode && <p>{duration}</p>}
      </div>
      <div className='flex flex-1 flex-col'>
        <label className='mb-1 text-sm text-at-light-green'>Pace</label>
        {props.editMode && (
          <input
            id='pace'
            className={`p-2 w-full text-gray-500 focus:outline-none ${inputValidation.pace}`}
            type='number'
            value={inputValues.pace}
            onChange={inputChangeHandler}
            onBlur={checkInputValidation}
          />
        )}
        {!props.editMode && <p>{pace}</p>}
      </div>
    </div>
  );
};

export default CardioEdit;
