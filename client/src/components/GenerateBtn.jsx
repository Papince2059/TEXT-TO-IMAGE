import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'
import {useNavigate} from 'react-router-dom'
import {AppContext} from '../context/AppContext'


const GenerateBtn = () => {
   const {user,setshowLogin}=useContext(AppContext)
  const navigate=useNavigate()
  const onClickHandler=()=>{
    if(user){
      navigate('/result')
    }
    else{
      setshowLogin(true)
    }
  }
  return (
    <motion.div className=' flex flex-col py-10 items-center justify-center'
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    >
      <h1 className='text-2xl md:text-3xl lg:text-4xl my-8'>See the magic. Try now</h1>
      <div className='bg-black flex  text-white px-9  py-3 text-xs rounded-full hover:scale-105 transition-all duration-500'>
        <button onClick={onClickHandler}className='cursor-pointer text-whit text-xs rounded-full'>Generate Images</button>
        <img className='h-6 ' src={assets.star_group}/>
      </div>
    </motion.div>
  )
}

export default GenerateBtn
