import React from 'react';
import Button from './UI/Button';

const CardioInput = () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <div className='flex flex-col gap-x-6 gap-y-2 relative md:flex-row'>
        <div className='flex flex-col'>
          <label
            htmlFor='cardio-type'
            className='mb-1 text-sm text-at-light-green'>
            Type
          </label>
          <select
            id='cardio-type'
            className='p-2 text-gray-500 focus:outline-none'>
            <option value='select-type'>Select Type</option>
            <option value='run'>Runs</option>
            <option value='walk'>Walk</option>
          </select>
        </div>
        <div className='flex flex-col flex-1'>
          <label
            htmlFor='distance'
            className='mb-1 text-sm text-at-light-green'>
            Distance
          </label>
          <input
            type='text'
            className='p-2 w-full text-gray-500 focus:outline-none'
          />
        </div>
        <div className='flex flex-col flex-1'>
          <label
            htmlFor='duration'
            className='mb-1 text-sm text-at-light-green'>
            Duration
          </label>
          <input
            type='text'
            className='p-2 w-full text-gray-500 focus:outline-none'
          />
        </div>
        <div className='flex flex-col flex-1'>
          <label htmlFor='pace' className='mb-1 text-sm text-at-light-green'>
            Pace
          </label>
          <input
            type='text'
            className='p-2 w-full text-gray-500 focus:outline-none'
          />
        </div>
      </div>
      <Button>Add Exercise</Button>
    </div>
  );
};

export default CardioInput;
