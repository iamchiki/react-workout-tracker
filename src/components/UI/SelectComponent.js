import React from 'react';

const SelectComponent = (props) => {
  return (
    <div className='flex flex-col'>
      <label
        htmlFor='workout-type'
        className='mb-1 text-sm text-at-light-green'>
        {props.children}
      </label>
      <select id={props.id} className='p-2 text-gray-500 focus:outline-none'>
        {props.options.map((option) => {
          return <option value={option.value}>{option.name}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectComponent;