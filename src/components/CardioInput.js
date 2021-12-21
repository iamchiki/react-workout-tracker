import React, { useState } from 'react';
import { uid } from 'uid';
import CardioItem from './CardioItem';
import Button from './UI/Button';

const CardioInput = () => {
  const [cardioItems, setCardioItems] = useState([
    <CardioItem key={uid()}></CardioItem>,
  ]);
  const clickHandler = () => {
    setCardioItems((prevCardioItems) => {
      return [...prevCardioItems, <CardioItem key={uid()}></CardioItem>];
    });
  };

  return (
    <div className='flex flex-col gap-y-4'>
      {cardioItems}
      <Button onClick={clickHandler}>Add Exercise</Button>
    </div>
  );
};

export default CardioInput;
