import React from 'react'
import Background from '@/assets/logo.png'
import Victory from '@/assets/victory.svg'
import { Tabs, TabsList } from '@/components/ui/tabs'
import { TabsTrigger } from '@/components/ui/tabs'
import { TabsContent } from '@radix-ui/react-tabs'
import { Input } from '@/components/input'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {toast} from "sonner"
import {apiClient} from "@/lib/api-client"
import { LOGIN_ROUTE, SIGNUP_ROUTE } from '@/utils/constants'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from '@/store'

const Auth = () => {
  const navigate=useNavigate();
  const {setUserInfo}=useAppStore();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const validateLogin=()=>{
      if(!email.length)
        {
          toast.error("Email is required");
          return false;
        }
        if(!password.length)
        {
          toast.error("Password is required");
          return false;
        }
        return true;
    }
    const validateSignUp=()=>{
    if(!email.length)
    {
      toast.error("Email is required");
      return false;
    }
    if(!password.length)
    {
      toast.error("Password is required");
      return false;
    }
    if(password!==confirmPassword)
    {
      toast.error("Confirm Password and Password must be the same");
      return false;
    }
    return true;
    };
   const handleLogin=async()=>{
   
     if(validateLogin)
     {
      const response= await apiClient.post(LOGIN_ROUTE,{email,password},{
        withCredentials:true,
      })
      if(response.data.user.id)
        {
          setUserInfo(response.data.user);
          if(response.data.user.profileSetup)
            navigate("/chat");
          else navigate("/profile");
        }
     }
   }
   const handleSignup=async()=>{
    console.log("comming");
  if(validateSignUp())
  {
    try {
      const response = await axios.post(SIGNUP_ROUTE, {
        email,
        password,
      }, {
        withCredentials: true,
      });
    
      console.log('Signup successful:', response.data);
      if(response.status===201)
      {
        setUserInfo(response.data.user)
        navigate("/profile");
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Error response:', error.response.data);
      } else if (error.request) {
        // Request was made, but no response received
        console.error('No response received:', error.request);
      } else {
        // Something else happened in setting up the request
        console.error('Axios error:', error.message);
      }
    }
  }
   }

  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
      <div className='h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[50vw] md:w-[50vw] lg:w-[60vw] xl:w-[50vw] rounded-3xl '>
        <div className='flex flex-col gap-10 items-center justify-center'>
          <div className='flex items-center justify-center flex-col '>
            <div className='flex items-center justify-center ml-4'>
              <h1 className='text-5xl font-bold md:text-6xl'>Welcome</h1>
              <img src={Victory} alt="Victory Emoji" className='h-[100px]' />
            </div>
            <p className='font-medium text-center ml-2'>Fill in the details to get started with the best chat app!</p>
          </div>
          <div className='flex items-center justify-center w-full'>
          <Tabs className='w-3/4' defaultValue='signin'>
            <TabsList className="bg-transparent rounded-none w-full">
            <TabsTrigger value="signin"  className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]: font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">Sign in</TabsTrigger>

              <TabsTrigger value="signup"  className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]: font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">SignUp</TabsTrigger>
            </TabsList>
            <TabsContent className="flex flex-col gap-5 mt-10" value="signin">
            <Input 
            placeholder="Email"
             type="email" 
             className="roounded-full p-6 "
             value={email}
              onChange={(e)=>setEmail(e.target.value)}/>
            <Input 
            placeholder="Password"
             type="password" 
             className="roounded-full p-6 "
             value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
              <Button className="rounded-full p-6 " onClick={handleLogin}>Sign in</Button>
            </TabsContent>
            <TabsContent className="flex flex-col gap-5 " value="signup">
            <Input 
            placeholder="Email"
             type="email" 
             className="roounded-full p-6 "
             value={email}
              onChange={(e)=>setEmail(e.target.value)}/>
            <Input 
            placeholder="Password"
             type="password" 
             className="roounded-full p-6 "
             value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
            <Input 
            placeholder=" Confirm Password"
             type="password" 
             className="roounded-full p-6 "
             value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}/>
              <Button className="rounded-full p-6 " onClick={handleSignup}>SignUp</Button>
            </TabsContent>
          </Tabs>

          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Auth
