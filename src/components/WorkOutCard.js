import React from 'react';
import { Link } from 'react-router-dom';
import cardioImg from '../assets/img/running-light-green.599f4302.png';
import strenghtImg from '../assets/img/dumbbell-light-green.e9869f64.png';

const WorkOutCard = (props) => {
  const { id, workoutType, workoutName } = props.workOutInfo;
  let imgSrc;
  if (workoutType === 'cardio') {
    imgSrc = cardioImg;
  } else {
    imgSrc = strenghtImg;
  }
  return (
    <Link to={`/view/${id}`} state={props.workOutInfo}>
      <div className='flex flex-col items-center bg-light-grey p-8 shadow-md cursor-pointer'>
        <img src={imgSrc} className='h-24 w-auto' alt='' />
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
