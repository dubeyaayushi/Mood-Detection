import React from 'react'
import { useSelector } from 'react-redux'
import { getInitials } from '../utils/helper'

const Profile = ({onLogout}) => {

    const {currentUser} = useSelector((state) => state.user)

  return (
    <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-amber-400">
        {getInitials(currentUser?.username)}
        </div>

        <div>
            <p className="text-lg font-medium">
                {currentUser.username || ""}
            </p>
            <button className="text-xl text-amber-900 underline" onClick={onLogout}>Logout</button>
        </div>
    </div>
  )
}

export default Profile