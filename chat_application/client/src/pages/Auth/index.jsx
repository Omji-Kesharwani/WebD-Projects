import React from 'react'
import Background from '@/assets/logo.png'
import Victory from '@/assets/victory.svg'
import { Tabs, TabsList } from '@/components/ui/tabs'
import { TabsTrigger } from '@/components/ui/tabs'
import { TabsContent } from '@radix-ui/react-tabs'
import { Input } from '@/components/input'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
const Auth = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
   const handleLogin=async()=>{

   }
   const handleSignup=async()=>{

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
          <Tabs className='w-3/4'>
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
              <Button className="rounded-full p-6 " onClick={handleLogin}>SignUp</Button>
            </TabsContent>
          </Tabs>

          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Auth
