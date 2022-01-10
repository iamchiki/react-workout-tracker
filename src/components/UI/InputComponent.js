import React from 'react';

// reusable Input Component
const InputComponent = React.forwardRef((props, ref) => {
  return (
    <div className='flex flex-col mb-2'>
      <label htmlFor={props.id} className='mb-1 text-sm text-at-light-green'>
        {props.children}
      </label>
      <input
        type={props.type}
        className='p-2 text-gray-500 focus:outline-none'
        id={props.id}
        ref={ref}
      />
    </div>
  );
});

export default InputComponent;
