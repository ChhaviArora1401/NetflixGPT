import React, {useState, useRef} from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate';
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
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
    setErrorMessage(message);
    if(message) return;
    // Sign in SIgn Up logic
    
    if(!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name.current.value, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCw-H2WFkuQtHjKrbsiUxPsq2iMvy4KGkVQ&s"
        }).then(() => {
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          navigate("/browse");
        }).catch((error) => {
          setErrorMessage(error.message);
        });
        // console.log(user);
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log(user, "sign in")
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }
  }


  return (
    <div className="body">
      <Header />
      <div className="">
        <form onSubmit={(e) => e.preventDefault()} 
        className='absolute p-12 bg-black w-4/12 my-36 mx-auto right-0 left-0 z-2 text-white bg-opacity-80' >
        <h1 className='font-bold text-3xl'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
          {(!isSignInForm) && <input ref={name} type="text" placeholder='Full Name' className="p-4 my-4 w-full rounded-lg border-1 border-solid bg-gray-600" />}
          <input ref={email} type="text" placeholder='Email Address' className="p-4 my-4 w-full rounded-lg border-1 border-solid bg-gray-600" />

          <input ref={password} type="password" placeholder='Password' className="p-4 my-4 w-full rounded-lg border-1 border-solid bg-gray-600" />
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='py-4' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now."}</p>
        </form>
      </div>
    </div>
  )
}

export default Login