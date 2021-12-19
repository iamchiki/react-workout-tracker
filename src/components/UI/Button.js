import React from 'react';

const Button = (props) => {
  return (
    <button
      type='button'
      className='mt-6 py-2 px-6 rounded-sm self-start text-sm
text-white bg-at-light-green duration-200 border-solid
border-2 border-transparent hover:border-at-light-green hover:bg-white
hover:text-at-light-green'>
      {props.children}
    </button>
  );
};

export default Button;
