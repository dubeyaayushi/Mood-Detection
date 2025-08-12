import React from 'react'

import moment from "moment"
import { FaLocationDot } from "react-icons/fa6"
import { FaHeart } from "react-icons/fa"


const TravelStoryCard = ({imageUrl, title, story, date, isFavorite, onEdit, onClick, onFavouriteClick,  visitedLocation = [],}
  
) => { console.log(isFavorite)
  return (
    
    <div className="border border-slate-200 rounded-lg overflow-hidden bg-white hover:shadow-lg hover:shadow-slate-200 transition-all ease-in-out relative cursor-pointer">

         <img
        src={imageUrl}
    
        // src="http://localhost:3000/uploads/1754997072180.png"
        alt={title}
        className="w-full h-56 object-cover rounded-lg"
        onClick={onClick}
      />
       <button
        className="w-12 h-12 flex items-center justify-center bg-white/40 rounded-lg border border-white/30 absolute top-4 right-4"
        onClick={onFavouriteClick}
      >
       <FaHeart
          className={`icon-btn ${
            isFavorite ? "text-red-500" : "text-white"
          } hover:text-red-500 transition-all duration-200`}
        />
      </button>
       <div className="p-4" onClick={onClick}>
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <h6 className="text-[20px] font-black">{title}</h6>

            <span className="text-sm text-slate-900">
              {date ? moment(date).format("Do MMM YYYY") : "-"}
            </span>
          </div>
        </div>
            <p className="text-xl text-slate-700 mt-2">{story?.slice(0, 60)}</p>

        <div className="inline-flex items-center gap-2 text-[13px] text-amber-600 bg-amber-100 rounded mt-3 px-2 py-1">
          <FaLocationDot className="text-sm" />

          {visitedLocation.map((item, index) =>
            visitedLocation.length === index + 1 ? `${item}` : `${item},`
          )}
          
        </div>
      </div>
    </div>
  )
}

export default TravelStoryCard