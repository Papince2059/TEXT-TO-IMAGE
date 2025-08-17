import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import {motion} from "framer-motion"
import {useNavigate} from 'react-router-dom'
import {AppContext} from '../context/AppContext'

const Header = () => {
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
    <motion.div className='flex flex-col justify-center items-center text-center my-20'
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    >
      <motion.div className='text-stone-500 inline-flex text-center gap-2
      bg-white px-6 py-1 rounded-full border border-neutral-500'
      initial={{opacity:0,y:-20}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.2,duration:0.8}}
    >
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt=''/>
      </motion.div>
      <motion.h1 className='text-4xl  max-w-[300px] mx-auto mt-10 text-center'>
        Turn text to <span className='text-blue-600'
         initial={{opacity:0}}
         transition={{delay:0.4,duration:2}}
          animate={{opacity:1}}>image</span>, in seconds</motion.h1>

     <motion.p className='text-center max-w-xl mx-auto mt-5'
      initial={{opacity:0}}
      transition={{delay:0.6,duration:2}}
      animate={{opacity:1}}
     >Unleash your creativity
        with AI.Turn your imagination into visual art in seconds - just type,and watch the magic happen
     </motion.p>
     <motion.button onClick={onClickHandler}className='sm:text-lg rounded-full mt-8  w-auto text-white cursor-pointer bg-black flex items-center
     gap-2 px-12 py-2.5'
     whileHover={{scale:1.05}}
     whileTap={{scale:0.95}}
     initial={{opacity:0}}
     animate={{opacity:1}}
     transition={{default:{duration:0.5},opacity:{delay:0.8,duration:1}}}
     >
        Generate images
        <img className="h-6" src={assets.star_group} alt=""/>
     </motion.button>
  <motion.div className=" gap-3 p-4 flex justify-center mt-10"
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{delay:1,duration:1}}>
  <img className='hover:scale-105 transition-all duration-300 h-15 rounded-lg w-full' src={assets.sample_img_1} alt="Image 1" />
  <img className='hover:scale-105 transition-all duration-300 h-15 rounded-lg w-full' src={assets.sample_img_2} alt="Image 2" />
  <img className='hover:scale-105 transition-all duration-300 h-15 rounded-lg w-full' src={assets.sample_img_1} alt="Image 3" />
  <img className='hover:scale-105 transition-all duration-300 h-15 rounded-lg w-full' src={assets.sample_img_2} alt="Image 4" />
  <img className='hover:scale-105 transition-all duration-300 h-15 rounded-lg w-full' src={assets.sample_img_1} alt="Image 5" />
  <img className='hover:scale-105 transition-all duration-300 h-15 rounded-lg w-full' src={assets.sample_img_2} alt="Image 6" />
</motion.div>

   <p className='mt-2 text-neutral-600'>Generated images from imagify</p>
    </motion.div>
    
  )
}

export default Header
