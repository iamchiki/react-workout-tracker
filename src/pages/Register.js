import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='max-w-screen-sm mx-auto px-4 py-10'>
      <form className='p-8 flex flex-col bg-light-grey rounded-md shadow-lg'>
        <h1 className='text-3xl text-at-light-green mb-4'>Register</h1>
        <div className='flex flex-col mb-2'>
          <label htmlFor='email' className='mb-1 text-sm text-at-light-green'>
            Email
          </label>
          <input
            type='text'
            className='p-2 text-gray-500 focus:outline-none'
            id='email'
          />
        </div>
        <div className='flex flex-col mb-2'>
          <label
            htmlFor='password'
            className='mb-1 text-sm text-at-light-green'>
            Password
          </label>
          <input
            type='text'
            className='p-2 text-gray-500 focus:outline-none'
            id='password'
          />
        </div>
        <div className='flex flex-col mb-2'>
          <label
            htmlFor='confirm-password'
            className='mb-1 text-sm text-at-light-green'>
            Confirm Password
          </label>
          <input
            type='text'
            className='p-2 text-gray-500 focus:outline-none'
            id='confirm-password'
          />
        </div>
        <button
          type='submit'
          className='mt-6 py-2 px-6 rounded-sm self-start text-sm
      text-white bg-at-light-green duration-200 border-solid
      border-2 border-transparent hover:border-at-light-green hover:bg-white
      hover:text-at-light-green'>
          Register
        </button>
        <Link to='/login' className='text-sm mt-6 text-center'>
          Already have an account?
          <span className='text-at-light-green'>Login</span>
        </Link>
      </form>
    </div>
  );
};

export default Register;
