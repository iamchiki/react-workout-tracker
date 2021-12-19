import React from 'react';
import Button from './UI/Button';
import SelectComponent from './UI/SelectComponent';

const CardioInput = () => {
  const cardioOptions = [
    { label: 'Select Type', value: 'select-type' },
    { label: 'Runs', value: 'run' },
    { label: 'Walk', value: 'walk' },
  ];
  return (
    <div className='flex flex-col gap-y-4'>
      <div className='flex flex-col gap-x-6 gap-y-2 relative md:flex-row'>
        <SelectComponent id='cardio-type' options={cardioOptions}>
          Type
        </SelectComponent>
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
