import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import axiosInstance from '../../utils/axiosInstance'
import { useState } from 'react'
import TravelStoryCard from '../../components/TravelStoryCard'

const Home = () => {

  const [allStories, setAllStories] = useState([]);
  console.log(allStories)

  //Get all travel stories
  const getAllTravelStories = async () => {
    try {
      const response = await axiosInstance.get("/travel-story/get-all")
      console.log("Full response:", response.data); // see entire API payload
        console.log("Stories array:", response.data.stories); // see only stories

      if(response.data && response.data.stories){
        setAllStories(response.data.stories);
      }
    } catch (error) {
      console.log("Something went wrong. Please try Again")
      
    }
  }

  //Handle Edit Story
  const handleEdit = (date) => {}

  const handleViewStory = (data) => {}

  const updateIsFavourite = async (data) => {}

  useEffect(() => {
    getAllTravelStories();
    return () => {}
  }, [])
  return (
    <><Navbar/>

    <div  className="container mx-auto py-10">
      <div className="flex gap-7">
        <div className="flex-1">
          {
            allStories.length > 0 ? (
              <div className='grid grid-cols-2 gap-4'>
                {
                  allStories.map((item) => {
                   
                    return(
                      // <TravelStoryCard key={item._id} imageUrl={item.imageUrl}
                      // isFavourite={item.isFavourite} onEdit={()=> handleEdit(item)}
                      // onClick={() => handleViewStory(item)}
                      // onFavouriteClick= {() => updateIsFavourite(item)}
                      
                      // />
                          <TravelStoryCard
                           key={item._id}
                            imageUrl={item.imageUrl}
                            title={item.title}
                          story={item.story}
                             date={item.visitedDate} // or createdAt if that’s what you want
                            isFavourite={item.isFavorite} // match backend spelling
                              visitedLocation={item.visitedLocation}
                             onEdit={() => handleEdit(item)}
                              onClick={() => handleViewStory(item)}
                              onFavouriteClick={() => updateIsFavourite(item)}
                            /> 
                  )
                  })
                }
              </div>
            ) : (
            

              <div>Empty Card Here</div>
            )
          }
        </div>


        <div className='w-[320px]'></div>
        
      </div>

    </div>

   </>

  )
}

export default Home