import React from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from 'react'

const PasswordInput = ({ value, onChange, placeholder }) => {
    const [isShowPassword, setIsShowPassword] = useState(false)

  // Toggle password visibility
   const togglePasswordVisibility = () => {
    setIsShowPassword(!isShowPassword);
  }

  return (
    <div className='flex items-center bg-amber-300 px-5 rounded-sm mb-3'>
      <input
      
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Enter your password"}
        className='w-full text-sm bg-transparent py-3 mr-3 rounded-sm outline-hidden'
          type={isShowPassword ? "text" : "password"}
      />

      {isShowPassword ? <FaEye size={22} className='text-amber-300 cursor-pointer'  onClick={() => setIsShowPassword(false)}/> : <FaEyeSlash size={22} className='text-amber-300 cursor-pointer' onClick={() => setIsShowPassword(true)}/>}

    </div>
  )
}

export default PasswordInput