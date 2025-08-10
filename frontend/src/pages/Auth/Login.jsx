import React from 'react'
import PasswordInput from "../../components/PasswordInput" 
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../utils/axiosInstance'
import { validateEmail } from '../../utils/helper'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../../redux/slice/userSlice"



const Login = () => {
const navigate = useNavigate();

const dispatch = useDispatch();

  // Function to handle form submission
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const {loading} = useSelector((state) => state.user)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)){
      setError('Please enter a valid email address.');
      return;
    }

    if(!password){
      setError('Password cannot be empty.');
      return;
    }

    setError(null)

    //login API call
    try{
      dispatch(signInStart())

      const response = await axiosInstance.post("/auth/signin", {
        email,
        password
      })
      if(response.data){
        dispatch(signInSuccess(response.data)) 
        navigate("/")
      }

    }catch(error){

        if(error?.response?.data?.message){
          setError(error?.response?.data?.message)
        }else{
          setError("Something went wrong, please try again later.")
        }

    }

  }
   
  return (
    <div className='h-screen bg-yellow-100 overflow-hidden relative'>

     <div className='login-ui-box right-10 -top-40'/>

      <div className='container h-screen flex items-center justify-center px-20 mx-auto'>
        <div className='w-2/4 h-[90vh] flex items-end bg-[url("https://images.pexels.com/photos/6980355/pexels-photo-6980355.jpeg")] bg-cover bg-center rounded-lg p-10 z-50'>
          <div>
            <h4 className='text-5xl text-white font-semibold leading-[58px]'>
              Create Your <br/> Stories
            </h4>
            <p className='text-[20px] text-white leading-6 pr-7 mt-4'>
              Record your daily thoughts, ideas and experiences in a personal journal.
            </p>
          </div>
        </div>

        <div className='w-2/4 h-[90vh] bg-[#e4d7c4] rounded-r-lg relative p-16 shadow-lg shadow-cyan-200/20 flex items-center'>
          <form onSubmit={handleSubmit} className='w-full' >
            <h4 className='text-6xl font-semibold mb-7'>Login</h4>
            <input type='email' placeholder="Email" className='input-box' value={email} onChange={(e) => setEmail(e.target.value)} />

           <PasswordInput 
            
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           />

            {error && <p className='text-red-500 text-sm mb-3'>{error}</p>}

             {loading ? ( <p className='animate-pulse w-full text-center btn-primary'>Loading...</p>): ( <button type='submit' className='btn-primary'>
              LOGIN
            </button>
             )}


            <p className='text-xl text-slate-500 text-center my-4'>Or</p>
            <button type='submit' className=' btn-primary btn-light' onClick={() => navigate("/sign-up") }>CREATE ACCOUNT</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login