import React, {useState} from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }


  return (
    <div className="body">
      <Header />
      <div className="">
        <form className='absolute p-12 bg-black w-6/12 my-36 mx-auto right-0 left-0 z-2 text-white bg-opacity-80	' >
        <h1 className='font-bold text-3xl'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
          {(!isSignInForm) && <input type="text" placeholder='Full Name' className="p-4 my-4 w-full rounded-lg border-1 border-solid" />}
          <input type="text" placeholder='Email Address' className="p-4 my-4 w-full rounded-lg border-1 border-solid" />

          <input type="password" placeholder='Password' className="p-4 my-4 w-full rounded-lg border-1 border-solid" />
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='py-4' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now."}</p>
        </form>
      </div>
    </div>
  )
}

export default Login