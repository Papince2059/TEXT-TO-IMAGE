import {createContext, useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {toast} from "react-toastify"
export  const AppContext=createContext()
const AppContextProvider=(props)=>{
    const [user,setUser]=useState(null)
    const[showLogin,setshowLogin]=useState(false)
    const [token,setToken]=useState(localStorage.getItem('token'))
    const [credit,setCredit]=useState(false)
    const backendurl=import.meta.env.VITE_BACKEND_URL
    const navigate=useNavigate()
    
   const loadCreditsData = async (authToken = token) => {
  try {
    const { data } = await axios.get(
      backendurl + '/api/user/credits',
      { headers: { token: authToken } }
    );
    if (data.success) {
   
      setCredit(data.credits);
    }
  } catch (error) {
    console.log("error");
    toast.error(error?.response?.data?.message || "Failed to fetch credits");
  }
};

const generateImage=async(prompt)=>{
try{
   const {data} = await axios.post(backendurl+'/api/image/generate-image',{prompt},{headers:{token}})
   if(data.success){
    loadCreditsData()
    return data.resultImage
   }
   else{
    toast.error(error.message)
    loadCreditsData()
    if(data.creditBalance===0){
        navigate('/buy')
    }
   }
}
catch(error){
  toast.error(error.message)
}
}
    const logout=()=>{
        localStorage.removeItem('token');
            setToken('')
            setUser(null)
        
    }
    useEffect(()=>{
      if(token){
        loadCreditsData()
      }
    },[token])
    const value={
        user,setUser,showLogin,setshowLogin,backendurl,token,setToken,credit,setCredit
        ,loadCreditsData,logout,generateImage
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}
export default AppContextProvider 