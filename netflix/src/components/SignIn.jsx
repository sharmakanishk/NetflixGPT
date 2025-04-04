import React, { useState } from 'react'
import { BG_IMG, LOGO_IMG } from '../utils/ImgURL'

const SignIn = () => {
    const [isSingnIn, setIsSignIn] = useState(true);
    const handleClick = ()=>{

    }
  return (
    <div>
      <img src={BG_IMG} alt='Background_Image' className='w-full h-screen'></img>
      <div className='absolute top-0'>
        <img className='bg-gradient-to-b from-black  w-44 ' 
        src={LOGO_IMG} alt='Netflix_Logo' 
        ></img>
      </div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-88 z-10 bg-black opacity-85  rounded-md flex items-center justify-center '>
        <form onSubmit={(e)=>e.preventDefault()} className='p-6 px-8  m-auto'>
            <h1 className='text-white font-bold text-3xl my-3'>{isSingnIn?"SignIn":"SignUp"}</h1>
            {!isSingnIn &&  <input type="text" placeholder='Full Name' className='text-white bg-zinc-800 p-4 my-4 text-sm border-amber-50 border
            w-full rounded-md'/>}
            <input type="text" placeholder='Email' className='text-white bg-zinc-800 p-4 my-4 text-sm border-amber-50 border
            w-full rounded-md'/>
            <input type='password' placeholder='Password' className='text-white bg-zinc-800 p-4 my-4 text-sm  border-amber-50 border
            w-full rounded-md'/>

            <button className='bg-red-700 text-white block p-4 my-6 text-sm
            w-full rounded-md'>{isSingnIn?"SignIn":"SignUp"}</button>
            <p className='p-2 my-8 text-white cursor-pointer text-sm text-center'
            onClick={()=>setIsSignIn(!isSingnIn)}>
                {isSingnIn ? "New to Netflix? SignUp Now" : "Already registered? SignIn"}</p>
        </form>
      </div>
    </div>
  )
}

export default SignIn
