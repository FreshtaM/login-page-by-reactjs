import React from 'react'
import img1 from './assets/Login Art.png'
import facebookimg from './assets/icons8-facebook-48.png'
import  googleimg from './assets/icons8-google-48.png'

function App() {
  return (
    <>
    <section className='flex flex-row  justify-center items-center mt-20 w-[60%] ml-[23%]  gap-28  max-sm:flex max-sm:flex-col-reverse  '>
     
    <div>
      <h2>Welcome Back 👋</h2>
      <p>Today is a new day. It's your day. You shape it.<br/>
        Sign in to start managing your projects.</p>
        

        <form action="#" class="mt-8 flex flex-col gap-6">
          <div className='flex flex-col'>
            <label htmlFor="email">
              Email
            </label>
            <input type="email" placeholder='Example@email.com' className='
             rounded-[12px] border border-gray-300 text-sm py-3 px-3 
               bg-[#F7FBFF] '/>
         </div>

         {/* pass */}
         <div className='flex flex-col'>
            <label htmlFor="password">
              Password
            </label>
            
            <input type="email" placeholder='At least 8 chracter' className='
             rounded-[12px] border border-gray-300 text-sm py-3 px-3 
               bg-[#F7FBFF] '/>
             <p className='ml-64 text-[#1E4AE9]'>Forgot password</p> 
         </div>
         <button className='w-[388px] bg-[#162D3A] text-[#FFFFFF]  rounded-[12px] py-[16px]'>Sign in</button>
         </form>

         <div class="flex items-center space-x-3 w-[50%] justify-center ml-24">
            <div class="flex-1 border-t "></div>
            <span>or</span>
            <div class="flex-1 border-t "></div>
         </div>


         <div className='flex flex-row-reverse bg-[#F3F9FA]  rounded-[12px] py-2 w-[388px] justify-center mb-6 mt-4 items-center'>
         <button className=' text-[#313957]  '>Sign in with Facebook</button>
         <img src={googleimg} alt="" className='w-[25px]' />
         </div>

         <div className='flex flex-row-reverse bg-[#F3F9FA]  rounded-[12px] py-2 w-[388px] justify-center items-center mb-8'>
         <button className='text-[#313957] '>Sign in with Google</button>
         <img src={facebookimg} alt="" className='w-[25px]' />
         </div>

         <p>Don't you have an account?<span className='text-[#1E4AE9]'><a href="">Sign up</a></span></p>

     </div>

     <div className=' flex-1 flex max-sm:w-[150%]  max-sm:h-fit '>
      <img src={img1} alt=""  className='w-[100%] rounded-[12px] h-screen '/>
     </div>
    </section>

    </>
  )
}

export default App