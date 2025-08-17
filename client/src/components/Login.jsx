import { assets } from '../assets/assets'
import { useEffect, useState,useContext } from 'react';
import{AppContext} from '../context/AppContext'
import {motion} from "framer-motion"
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
    const [state,setState]=useState('Login')
    const {setshowLogin,backendurl,setToken,setUser,loadCreditsData}=useContext(AppContext)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const onSubmitHandler= async(e)=>{
      e.preventDefault();
      try{
            if(state==='Login'){
             const {data}= await axios.post(backendurl+'/api/user/login',{email,password})
             if(data.success){
                
                 setToken(data.token)
                 setUser(data.user)
                 localStorage.setItem('token',data.token)
                await loadCreditsData(data.token);
                 setshowLogin(false)
                 
             }
             else{
              toast.error(data.message)
             }
            }
            else{
               const {data}= await axios.post(backendurl+'/api/user/register',{name,email,password})
             if(data.success){
             
                 setToken(data.token)
                 setUser(data.user)
                 localStorage.setItem('token',data.token)
                 setshowLogin(false)
                 
             }
             else{
              toast.error(data.message)
             }
            }
      }
      catch(error){
            toast.error(data.message)
      }
    }
    useEffect(()=>{
        document.body.style.overflow='hidden';
        return ()=>{
             document.body.style.overflow='unset'
        }
        
    },[])
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <motion.form onSubmit={onSubmitHandler} className=' relative bg-white p-10 rounded-xl text-slate-500'
      initial={{opacity:0.2,y:50}}
    transition={{duration:0.3}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
      >
        <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
        <p>Welcome back! Please sign in to continue</p>
       {state !=='Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
            <img className='h-5 w-5' src={assets.user_icon} alt=""/>
             <input onChange={e=>setName(e.target.value)} value={name}className='outline-none text-sm' type="text" placeholder='Full Name' />
        </div>}
         <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
            <img className='h-5 w-5' src={assets.email_icon} alt=""/>
             <input onChange={e=>setEmail(e.target.value)} value={email} className='outline-none text-sm' type="email" placeholder='Email id' />
        </div>
         <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
            <img className='h-5 w-5' src={assets.lock_icon} alt=""/>
             <input onChange={e=>setPassword(e.target.value)} value={password} className='outline-none text-sm' type="password" placeholder='Password'/>
        </div>
       <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot password?</p>
       <button className='bg-blue-600 w-full text-white py-2 rounded-full cursor-pointer'>{state==='Login'?'Login':'create account'}</button>
      {state== 'Login' ? <p className='mt-5 text-center'>Don't have an account?<span className='text-blue-600 cursor-pointer' onClick={()=>setState('Sign Up')}>Sign up</span></p> 
      :
        <p className='mt-5 text-center'>Already have an account?<span className='text-blue-600' onClick={()=>setState('Login')}>Login</span></p>}
        <img onClick={()=>setshowLogin(false)} className='absolute top-5 right-5 cursor-pointer' src={assets.cross_icon}/>
      </motion.form>
    </div>
  )
}

export default Login