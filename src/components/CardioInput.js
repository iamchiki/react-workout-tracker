import React, { useState } from 'react';
import CardioItem from './CardioItem';
import Button from './UI/Button';

const CardioInput = () => {
  const cardioItem = <CardioItem key='a'></CardioItem>;
  const [cardioItems, setCardioItems] = useState([cardioItem]);
  const clickHandler = () => {
    setCardioItems((prevCardioItems) => {
      return [...prevCardioItems, cardioItem];
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
