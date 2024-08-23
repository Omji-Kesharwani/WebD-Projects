import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import Chat from './pages/Auth/Chat'
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/auth' element={<Auth/>}/>
    <Route path='/chat' element={<Chat/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path="*" element={<Navigate to="/auth"/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
