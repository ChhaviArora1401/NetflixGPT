import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { URL_logo } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid, email, displayName, photoURL} = user;
      dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
      navigate("/browse"); // only navigate here if the user is logged in
    } else {
      dispatch(removeUser())
      navigate("/"); // navigates here when user logged out
    }
    });

    // unsucbscribe when the component unmounts
    return () => unsubscribe();
  }, [])

  const handleSignout = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  }

  return (
    <div className='px-8 py-2 bg-gradient-to-b from-black z-1 relative flex justify-between'>
      <img src={URL_logo}
      alt="logo" className='w-44' />
      {user && <div className='flex p-2'>
        <img alt="usericon" className='w-12 h-12'
        src={user.photoURL} />
        <button className='font-bold text-white'
        onClick={handleSignout}>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header 