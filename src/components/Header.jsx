import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { SUPPORTED_LANGUAGES, URL_logo } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

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

  const handleGptSearchClick = () => {
    // Toggle GPT Search button
    dispatch(toggleGptSearchView());
  }

  const handleSignout = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  }

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='px-8 py-2 bg-gradient-to-b from-black z-1 relative flex justify-between'>
      <img src={URL_logo}
      alt="logo" className='w-44' />
      {user && <div className='flex p-2'>
        {showGptSearch && <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang) => {
            return <option key={lang.indetifier} value={lang.indetifier}>{lang.name}</option>
          })}
        </select>}
        <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg' 
        onClick={handleGptSearchClick}>{showGptSearch ? 'Homepage' : 'GPT Search'}</button>
        <img alt="usericon" className='w-12 h-12'
        src={user.photoURL} />  
        <button className='font-bold text-white'
        onClick={handleSignout}>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header 