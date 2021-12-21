import React, { useState } from 'react';
import StrengthItem from './StrengthItem';
import Button from './UI/Button';

const StrengthInput = () => {
  const strengthItem = <StrengthItem></StrengthItem>;
  const [strengthItems, setStrengthItems] = useState([strengthItem]);
  const clickHandler = () => {
    setStrengthItems((prevStrengthItems) => {
      return [...prevStrengthItems, strengthItem];
    });
  };

  return (
    <div className='flex flex-col gap-y-4'>
      {strengthItems}
      <Button onClick={clickHandler}>Add Exercise</Button>
    </div>
  );
};

export default StrengthInput;
