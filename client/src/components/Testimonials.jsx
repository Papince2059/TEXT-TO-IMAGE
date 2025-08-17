import React from 'react';
import { assets } from '../assets/assets'; // Make sure this includes rating_star
import { testimonialsData } from '../assets/assets'; // Mock this if not available
import {motion} from 'framer-motion'
const Testimonials = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center my-20 py-12 px-4'
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    >
      <h1 className='text-3xl sm:text-4xl font-semibold'>Customer testimonials</h1>
      <p className='text-gray-500 mb-12'>What Our Users Are Saying</p>

      <div className='flex flex-wrap justify-center gap-6 max-w-5xl '>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className='p-6 border rounded-lg shadow bg-white max-w-xs text-center hover:scale-105 transition-all duration-300 '
          >
            <img
              className='rounded-full w-14 mx-auto mb-2'
              src={testimonial.image}
              alt={testimonial.name}
            />
            <h2 className='font-semibold'>{testimonial.name}</h2>
            <p className='text-sm text-gray-500 mb-2'>{testimonial.role}</p>
            <div className='flex justify-center mb-4'>
              {Array(testimonial.stars).fill().map((_, i) => (
                <img key={i} className="w-4 h-4" src={assets.rating_star} alt="star" />
              ))}
            </div>
            <p className='text-sm text-gray-600'>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
