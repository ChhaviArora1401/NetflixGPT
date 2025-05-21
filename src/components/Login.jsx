import React, {useState, useRef} from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null); //creates a refernce to input boxes
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    // Validate the form data
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
  }


  return (
    <div className="body">
      <Header />
      <div className="">
        <form onSubmit={(e) => e.preventDefault()} 
        className='absolute p-12 bg-black w-6/12 my-36 mx-auto right-0 left-0 z-2 text-white bg-opacity-80	' >
        <h1 className='font-bold text-3xl'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
          {(!isSignInForm) && <input type="text" placeholder='Full Name' className="p-4 my-4 w-full rounded-lg border-1 border-solid" />}
          <input ref={email} type="text" placeholder='Email Address' className="p-4 my-4 w-full rounded-lg border-1 border-solid" />

          <input ref={password} type="password" placeholder='Password' className="p-4 my-4 w-full rounded-lg border-1 border-solid" />
          <p>{errorMessage}</p>
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='py-4' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now."}</p>
        </form>
      </div>
    </div>
  )
}

export default Login