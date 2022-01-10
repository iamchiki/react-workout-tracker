import React, { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { uid } from 'uid';
import WorkoutContext from '../store/context';
import StrengthItem from './StrengthItem';
import Button from './UI/Button';

const StrengthInput = () => {
  const ctx = useContext(WorkoutContext);

  const [exercises, setExercises] = useState(ctx.exercises);

  const navigate = useNavigate();

  const clickHandler = () => {
    ctx.exercises = [
      ...exercises,
      { name: '', sets: '', reps: '', weight: '' },
    ];
    setExercises(ctx.exercises);
  };
  // console.log(exercises);
  const deleteHandler = (index) => {
    // ctx.exercises.splice(index, 1);
    // setExercises([...ctx.exercises]);
    if (ctx.exercises.length > 1) {
      ctx.exercises.splice(index, 1);
    } else {
      ctx.status = {
        type: 'error',
        message: 'Error: Cannot remove, need to have at least one exercise',
      };
      navigate('/create');
    }
    setExercises([...ctx.exercises]);
  };

  return (
    <div className='flex flex-col gap-y-4'>
      {exercises.map((exercise, index) => {
        return (
          <StrengthItem
            rowIndex={index}
            key={uid()}
            deleteRow={deleteHandler}></StrengthItem>
        );
      })}
      <Button onClick={clickHandler}>Add Exercise</Button>
    </div>
  );
};

export default StrengthInput;
