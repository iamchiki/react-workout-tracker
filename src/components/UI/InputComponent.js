import React from 'react';

// reusable Input Component
const InputComponent = (props) => {
  return (
    <div className='flex flex-col mb-2'>
      <label htmlFor={props.id} className='mb-1 text-sm text-at-light-green'>
        {props.label}
      </label>
      <input
        type='text'
        className='p-2 text-gray-500 focus:outline-none'
        id={props.id}
      />
    </div>
  );
};

export default InputComponent;
