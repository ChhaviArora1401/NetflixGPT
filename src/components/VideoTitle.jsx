import React from 'react';

const VideoTitle =  ({title, overview}) => {
  return (
   <div className="w-screen aspect-video pt-[20%] px-30 absolute text-white bg-gradient-to-tr from-black ">
    <h1 className='text-6xl font-bold'>{title}</h1>
    <p className='py-6 text-lg w-1/3'>{overview}</p>
    <div className='flex gap-5'>
      <button className="bg-gray-200 text-black p-4 px-10 text-xl rounded-md hover:bg-opacity-80">
        ▶ Play
      </button>
      <button className="bg-black text-white p-4 px-8 text-xl rounded-md">ⓘ More info </button>
    </div>
  </div>
  )
}

export default VideoTitle