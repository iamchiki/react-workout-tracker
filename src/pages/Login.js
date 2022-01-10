import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { uid } from 'uid';
import InputComponent from '../components/UI/InputComponent';
import StatusMessage from '../components/UI/StatusMessage';
import { auth } from '../firebase/firebase-config';
import WorkoutContext from '../store/context';

const Login = () => {
  // input values
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const ctx = useContext(WorkoutContext);

  console.log(ctx);
  //to navigate to other routes
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      // login existing user
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      // navigate to dashboard after sucessfull login
      navigate('/home');
    } catch (error) {
      console.dir(error);
      console.log(error);
      console.log(error.code.slice(5));
      ctx.status = {
        type: 'error',
        message: `Error: ${error.code.slice(5)}`,
      };
      navigate('/login');
    }
  };
  return (
    <div className='max-w-screen-sm mx-auto px-4 py-10'>
      {ctx.status.type && (
        <StatusMessage key={uid()} status={ctx.status}></StatusMessage>
      )}
      <form
        onSubmit={loginHandler}
        className='p-8 flex flex-col bg-light-grey rounded-md shadow-lg'>
        <h1 className='text-3xl text-at-light-green mb-4'>Login</h1>
        <InputComponent id='email' type='email' ref={emailRef}>
          Email
        </InputComponent>
        <InputComponent id='password' type='password' ref={passwordRef}>
          Password
        </InputComponent>
        <button
          type='submit'
          className='mt-6 py-2 px-6 rounded-sm self-start text-sm
      text-white bg-at-light-green duration-200 border-solid
      border-2 border-transparent hover:border-at-light-green hover:bg-white
      hover:text-at-light-green'>
          Login
        </button>
        <Link to='/register' className='text-sm mt-6 text-center'>
          Don't have an account?
          <span className='text-at-light-green'>Register</span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
