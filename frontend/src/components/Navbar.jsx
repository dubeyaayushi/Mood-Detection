import React from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile'
import axiosInstance from '../utils/axiosInstance'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signOutSuccess } from '../redux/slice/userSlice'
import SearchBar from './SearchBar'

const Navbar = ({ searchQuery, setSearchQuery, onSearchNote, handleClearSearch}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate() 


    const onLogout = async () => {
        try {
            const response = await axiosInstance.post("/user/signout")
        if(response.data){
            dispatch(signOutSuccess())

            navigate("/login")
        }
        
        } catch (error) {
            console.log(error)
            
        }
    }
   const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery)
    }
  }

  const onClearSearch = () => {
    handleClearSearch()
    setSearchQuery("")
  }

return (
    <div className="bg-gradient-to-r from-yellow-200 via-orange-100 to-yellow-300 flex items-center justify-between px-10 py-2 drop-shadow sticky top-0 z-10 w-full">
        <Link to="/Home">
            <h1 className="font-bold text-2xl sm:text-2xl flex flex-wrap">
                <span className="text-yellow-600 text-4xl">Daily</span>
                <span className="text-orange-700 ml-1 text-4xl">Diary</span>
            </h1>
        </Link>

         <SearchBar
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value)
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />


        <Profile onLogout={onLogout}/>
    </div>
)
}

export default Navbar