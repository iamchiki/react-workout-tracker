import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputComponent from '../components/UI/InputComponent';
import { auth } from '../firebase/firebase-config';

const Register = () => {
  // input values
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');
  console.log(auth);
  // to navigate to other pages
  const navigate = useNavigate();
  // creat new user
  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      if (passwordRef.current.value === confirmPasswordRef.current.value) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        );
        // navigating to login page after creating new user
        navigate('/login');
      } else {
        throw new Error('Password does not match');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='max-w-screen-sm mx-auto px-4 py-10'>
      <form
        onSubmit={registerHandler}
        className='p-8 flex flex-col bg-light-grey rounded-md shadow-lg'>
        <h1 className='text-3xl text-at-light-green mb-4'>Register</h1>
        <InputComponent id='email' ref={emailRef}>
          Email
        </InputComponent>
        <InputComponent id='password' ref={passwordRef}>
          Password
        </InputComponent>
        <InputComponent id='confirm_password' ref={confirmPasswordRef}>
          Confirm Password
        </InputComponent>
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
