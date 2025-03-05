import React from 'react'

function TitleImage() {
  return (
    <div className='w-screen h-[440px] bg-slate-800 relative'>
        <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-6xl font-bold text-white">About Us</h1>
        </div>
        <img 
            className="w-full h-full object-cover" 
            src="https://images.pexels.com/photos/261156/pexels-photo-261156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="" 
        />    
    </div>
  )
}

export default TitleImage
