import { useContext } from 'react';
import { assets, plans } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios'
const BuyCredit = () => {
  const {user,backendurl,loadCreditsData,token,setShowLogin}=useContext(AppContext)
  const navigate=useNavigate()
  const initPay=async(order)=>{
     const options={
      key:import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount:order.amount,
      currency:order.currency,
      name:'Credits Payment',
      description:'Credits Payment',
      order_id:order.id,
      receipt:order.receipt,
      handler:async(response)=>{
          try{
               const {data}=await axios.post(backendurl+'/api/user/verify-razor',response,{headers:{token}})
               if(data.success){
                loadCreditsData();
                navigate('/')
                toast.success('Credit Added')
               }
          }
          catch(error){
             toast.error(error.message)
          }
      }
     }
     const rzp=new window.Razorpay(options)
     rzp.open()
  }
  const paymentRazorpay = async (planId) => {
  console.log("🛒 Purchase button clicked:", planId);

  try {
    if (!user) {
      console.warn("⚠ No user found. Showing login popup.");
      setShowLogin(true);
      return; // stop here if not logged in
    }

    if (!window.Razorpay) {
      console.error("❌ Razorpay script not loaded. Add <script src='https://checkout.razorpay.com/v1/checkout.js'></script> in index.html");
      toast.error("Payment service not available. Please try again.");
      return;
    }

    console.log("📡 Sending request to backend:", backendurl + '/api/user/pay-razor');
    const { data } = await axios.post(
      backendurl + '/api/user/pay-razor',
      { userId: user._id, planId },
      { headers: { token } }
    );

    console.log("📥 Response from backend:", data);

    if (data.success) {
      initPay(data.order);
    } else {
      console.error("❌ Payment initialization failed:", data.message);
      toast.error(data.message || "Payment initialization failed");
    }
  } catch (error) {
    console.error("❌ Error in paymentRazorpay:", error);
    toast.error(error.message);
  }
};

  return (
    <motion.div className='min-h-[80vh] text-center pt-14 mb-10'
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>
        Our Plans
      </button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>
        Choose the plan
      </h1>
      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center px-4'>
        {plans.map((item, index) => (
          <div key={index} className=' bg-white drop-shadow-sm rounded-lg py-12 px-8 text-gray-600
          hover:scale-105 transition-all duration-500 '>
            <img src={assets.logo_icon} alt='Plan icon' className='mx-auto mb-4 w-12 h-12' />
            <p className='text-xl font-semibold'>{item.id}</p>
            <p className='text-gray-600'>{item.desc}</p>
            <p className='text-lg font-bold mt-2'>
              ${item.price} / {item.credits} credits
            </p>
            <button onClick={()=>paymentRazorpay(item.id)} className='w-full bg-gray-800 text-white mt-8
            text-sm rounded-md py-2.5 min-w-52 cursor-pointer'>{user ? 'Purchase' : 'Get Started'}</button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;