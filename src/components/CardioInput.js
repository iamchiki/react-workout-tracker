import React, { useContext, useState } from 'react';
import { uid } from 'uid';
import WorkoutContext from '../store/context';
import CardioItem from './CardioItem';
import Button from './UI/Button';

const CardioInput = () => {
  const ctx = useContext(WorkoutContext);
  const [exercises, setExercises] = useState(ctx.exercises);

  const clickHandler = () => {
    ctx.exercises = [
      ...exercises,
      { type: '', distance: '', duration: '', pace: '' },
    ];
    setExercises(ctx.exercises);
  };
  const deleteHandler = (index) => {
    ctx.exercises.splice(index, 1);
    setExercises([...ctx.exercises]);
  };
  return (
    <div className='flex flex-col gap-y-4'>
      {exercises.map((exercise, index) => {
        return (
          <CardioItem
            rowIndex={index}
            key={uid()}
            deleteRow={deleteHandler}></CardioItem>
        );
      })}
      <Button onClick={clickHandler}>Add Exercise</Button>
    </div>
  );
};

export default CardioInput;
