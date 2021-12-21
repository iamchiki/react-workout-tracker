import React, { useState } from 'react';
import { uid } from 'uid';
import StrengthItem from './StrengthItem';
import Button from './UI/Button';

const StrengthInput = () => {
  const [strengthItems, setStrengthItems] = useState([
    <StrengthItem key={uid()}></StrengthItem>,
  ]);
  const clickHandler = () => {
    setStrengthItems((prevStrengthItems) => {
      return [...prevStrengthItems, <StrengthItem key={uid()}></StrengthItem>];
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
