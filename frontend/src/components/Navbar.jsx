import React from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile'


const Navbar = () => {
return (
    <div className="bg-gradient-to-r from-yellow-200 via-orange-100 to-yellow-300 flex items-center justify-between px-10 py-2 drop-shadow sticky top-0 z-10 w-full">
        <Link to="/Home">
            <h1 className="font-bold text-2xl sm:text-2xl flex flex-wrap">
                <span className="text-yellow-600 text-4xl">Daily</span>
                <span className="text-orange-700 ml-1 text-4xl">Diary</span>
            </h1>
        </Link>

        <Profile/>
    </div>
)
}

export default Navbar