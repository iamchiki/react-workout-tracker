import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <header className='bg-at-light-green text-white'>
      <nav className='flex justify-around px-4 py-6'>
        <div className='flex'>
          <img className='w-14' src='' alt='' />
          <h3>Active Tracker</h3>
        </div>
        <ul className='flex justify-between gap-x-6'>
          <Link to='/'>Home</Link>
          <Link to='/'>Create</Link>
          <Link to='/login'>Login</Link>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
