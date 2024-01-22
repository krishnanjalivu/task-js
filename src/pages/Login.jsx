

import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const Login = () => {
 
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

   
    if (email === 'user@example.com' && password === 'password') {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };


    const navigate=useNavigate();
  const errorMessage = (error) => {
    console.log(error);
  };

  const handleLoginSuccess = () =>navigate('/home')// Return JSX

  return (
    <div className='flex flex-row justify-center p-[50px]'>
    <div className='flex flex-col rounded-[20px] bg-blue-950 w-[400px] p-10 '>
     <p className='p-9 mt-[70px] text-5xl font-bold font-sans rounded border-2 text-white leading-[80px]'>Welcome to <br></br> JS Tigers</p>
     {/* <p className='text-xl font-bold p-5 mt-12 ml-[100px] rounded-[30px] border-2  bg-white  text-[#756AB6]'> Simply dummy text of the printing and typesetting industry.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.</p> */}
    </div>
    <div className='flex justify-center flex-col ml-6 mt-12 border-2 border-blue-950 rounded-[20px] p-9'>
      <h1 className='text-4xl font-bold text-blue-950 '>Let's Get Started!</h1>
      <form onSubmit={handleSubmit} >
     <div className='flex flex-col mt-9'>
      <input
      className='text-xl text-gray font-bold m-3 border-2 border-blue-950 rounded-[20px] p-3'
        type="email"
        id="email"
        placeholder='E-mail'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

    
      <input
            className='text-xl text-gray font-bold m-3 border-2 border-blue-950 rounded-[20px] p-3'
        type="password"
        id="password"
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className='rounded-[20px] ml-4 mr-4 mt-6 mb-7 p-3 bg-blue-950 text-white' type="submit">Login</button>
      
      </div>
    </form>
     
     <h1 className='text-2xl text-gray-300 mb-5'>OR</h1>
     <div className='ml-12'>
      <GoogleLogin class="google"  onSuccess={handleLoginSuccess} onError={errorMessage} />
      </div>
    </div>
    </div>
  );
};

export default Login;


