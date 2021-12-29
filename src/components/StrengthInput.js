import React, { useContext, useState } from 'react';
import { uid } from 'uid';
import WorkoutContext from '../store/context';
import StrengthItem from './StrengthItem';
import Button from './UI/Button';

const StrengthInput = () => {
  const ctx = useContext(WorkoutContext);

  const [exercises, setExercises] = useState(ctx.exercises);

  const clickHandler = () => {
    ctx.exercises = [
      ...exercises,
      { name: '', sets: '', reps: '', weight: '' },
    ];
    setExercises(ctx.exercises);
  };

  return (
    <div className='flex flex-col gap-y-4'>
      {exercises.map((exercise, index) => {
        return <StrengthItem rowIndex={index} key={uid()}></StrengthItem>;
      })}
      <Button onClick={clickHandler}>Add Exercise</Button>
    </div>
  );
};

export default StrengthInput;
