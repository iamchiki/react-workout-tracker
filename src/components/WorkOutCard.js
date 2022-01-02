import React from 'react';
import { Link } from 'react-router-dom';

const WorkOutCard = (props) => {
  const { id, workoutType, workoutName } = props.workOutInfo;
  console.log(props.workOutInfo);
  return (
    <Link to={`/view/${id}`} state={props.workOutInfo}>
      <div className='flex flex-col items-center bg-light-grey p-8 shadow-md cursor-pointer'>
        <p className='mt-6 py-1 px-3 text-xs text-white bg-at-light-green shadow-md rounded-lg'>
          {workoutType}
        </p>
        <h1 className='mt-8 mb-2 text-center text-xl text-at-light-green'>
          {workoutName}
        </h1>
      </div>
    </Link>
  );
};

export default WorkOutCard;
