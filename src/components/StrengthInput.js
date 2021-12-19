import React from 'react';
import Button from './UI/Button';
import InputComponent from './UI/InputComponent';

const StrengthInput = () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <div className='flex flex-col gap-x-6 gap-y-2 relative md:flex-row'>
        <InputComponent id='exercise'>Exercise</InputComponent>
        <div className='flex flex-col flex-1'>
          <label htmlFor='sets' className='mb-1 text-sm text-at-light-green'>
            Sets{' '}
          </label>
          <input
            type='text'
            className='p-2 w-full text-gray-500 focus:outline-none'
          />
        </div>
        <div className='flex flex-col flex-1'>
          <label htmlFor='reps' className='mb-1 text-sm text-at-light-green'>
            Reps{' '}
          </label>
          <input
            type='text'
            className='p-2 w-full text-gray-500 focus:outline-none'
          />
        </div>
        <div className='flex flex-col flex-1'>
          <label htmlFor='weight' className='mb-1 text-sm text-at-light-green'>
            Weight (LB's)
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

export default StrengthInput;
