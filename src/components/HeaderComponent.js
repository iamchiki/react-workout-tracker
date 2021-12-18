import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase-config';
import WorkoutContext from '../store/context';

const HeaderComponent = () => {
  const navigate = useNavigate();

  // user state
  const ctx = useContext(WorkoutContext);

  // logout current user
  const logoutHandler = async () => {
    try {
      const userCredential = await signOut(auth);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className='bg-at-light-green text-white'>
      <nav className='flex justify-around px-4 py-6'>
        <div className='flex'>
          <img className='w-14' src='' alt='' />
          <h3>Active Tracker</h3>
        </div>
        <ul className='flex justify-between gap-x-6'>
          <Link className='cursor-pointer' to='/home'>
            Home
          </Link>
          {ctx.currentUser && (
            <Link className='cursor-pointer' to='/create'>
              Create
            </Link>
          )}
          {!ctx.currentUser && (
            <Link className='cursor-pointer' to='/login'>
              Login
            </Link>
          )}
          {ctx.currentUser && (
            <li className='cursor-pointer' onClick={logoutHandler}>
              Logout
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
