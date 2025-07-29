import React from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from 'react'

const PasswordInput = ({ value, onChange, placeholder }) => {
    const [isShowPassword, setIsShowPassword] = useState(false)

  // Toggle password visibility
   const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  }

  return (
    <div className='flex items-center bg-amber-300 px-5 rounded-sm mb-3'>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Enter your password"}
        className='w-full text-sm bg-transparent py-3 mr-3 rounded-sm outline-hidden password-input'
        type={isShowPassword ? "text" : "password"}
        autoComplete="off"
        style={{ WebkitTextSecurity: isShowPassword ? 'none' : 'disc' }}
      />
      {isShowPassword ? (
        <FaEye size={22} className='text-amber-100 cursor-pointer' onClick={toggleShowPassword} />
      ) : (
        <FaEyeSlash size={22} className='text-amber-100 cursor-pointer' onClick={toggleShowPassword} />
      )}
    </div>
  )
}

export default PasswordInput

// Add this CSS to hide the default password reveal icon in Chrome, Edge, and Safari
const style = document.createElement('style');
style.innerHTML = `
.password-input::-ms-reveal,
.password-input::-ms-clear {
  display: none;
}
.password-input::-webkit-credentials-auto-fill-button,
.password-input::-webkit-input-decoration-container {
  display: none !important;
}
.password-input::-webkit-input-password-toggle {
  display: none !important;
}
`;
document.head.appendChild(style);