import React from 'react';

const WorkOutCard = (props) => {
  return (
    <div className='flex flex-col items-center bg-light-grey p-8 shadow-md cursor-pointer'>
      <p className='mt-6 py-1 px-3 text-xs text-white bg-at-light-green shadow-md rounded-lg'>
        {props.workOutInfo.workoutType}
      </p>
      <h1 className='mt-8 mb-2 text-center text-xl text-at-light-green'>
        {props.workOutInfo.workoutName}
      </h1>
    </div>
  );
};

export default WorkOutCard;
