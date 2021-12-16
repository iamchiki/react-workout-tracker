import React from 'react';
import { Link } from 'react-router-dom';
import InputComponent from '../components/UI/InputComponent';

const Register = () => {
  const registerHandler = () => {
    console.log('register');
  };

  return (
    <div className='max-w-screen-sm mx-auto px-4 py-10'>
      <form
        onSubmit={registerHandler}
        className='p-8 flex flex-col bg-light-grey rounded-md shadow-lg'>
        <h1 className='text-3xl text-at-light-green mb-4'>Register</h1>
        <InputComponent label='Email' id='email'></InputComponent>
        <InputComponent label='Password' id='password'></InputComponent>
        <InputComponent
          label='Confirm Password'
          id='confirm_password'></InputComponent>
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
