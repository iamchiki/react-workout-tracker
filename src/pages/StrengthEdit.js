import React, { useContext, useState } from 'react';
import WorkoutContext from '../store/context';
import deleteIcon from '../assets/img/trash-light-green.f27ed677.png';

const StrengthEdit = (props) => {
  // for input validation
  const [inputValidation, setInputValidation] = useState({
    name: '',
    sets: '',
    reps: '',
    weight: '',
  });

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
    setInputValidation({ ...inputValidation, [id]: '' });
  };

  const deleteHandler = () => {
    props.deleteExercise(props.rowIndex);
  };

  const checkInputValidation = (e) => {
    console.dir(e.target);
    const { id } = e.target;
    if (e.target.value === '') {
      setInputValidation({ ...inputValidation, [id]: 'ring-1 ring-red-500' });
    }
  };
  console.log(ctx.exercises);
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
        <label className='mb-1 text-sm text-at-light-green'>Exercise</label>
        {props.editMode && (
          <input
            id='name'
            className={`p-2 w-full text-gray-500 focus:outline-none ${inputValidation.name}`}
            type='text'
            value={inputValues.name}
            onChange={inputChangeHandler}
            onBlur={checkInputValidation}
          />
        )}
        {!props.editMode && <p>{name}</p>}
      </div>
      <div className='flex flex-1 flex-col'>
        <label className='mb-1 text-sm text-at-light-green'>Sets</label>
        {props.editMode && (
          <input
            id='sets'
            className={`p-2 w-full text-gray-500 focus:outline-none ${inputValidation.sets}`}
            type='number'
            value={inputValues.sets}
            onChange={inputChangeHandler}
            onBlur={checkInputValidation}
          />
        )}
        {!props.editMode && <p>{sets}</p>}
      </div>
      <div className='flex flex-1 flex-col'>
        <label className='mb-1 text-sm text-at-light-green'>Reps</label>
        {props.editMode && (
          <input
            id='reps'
            className={`p-2 w-full text-gray-500 focus:outline-none ${inputValidation.reps}`}
            type='number'
            value={inputValues.reps}
            onChange={inputChangeHandler}
            onBlur={checkInputValidation}
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
            className={`p-2 w-full text-gray-500 focus:outline-none ${inputValidation.weight}`}
            type='number'
            value={inputValues.weight}
            onChange={inputChangeHandler}
            onBlur={checkInputValidation}
          />
        )}
        {!props.editMode && <p>{weight}</p>}
      </div>
    </div>
  );
};

export default StrengthEdit;
