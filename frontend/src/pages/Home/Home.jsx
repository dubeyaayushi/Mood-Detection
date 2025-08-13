import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import axiosInstance from '../../utils/axiosInstance'
import { useState } from 'react'
import TravelStoryCard from '../../components/TravelStoryCard'
import { ToastContainer, toast } from "react-toastify"
import { IoMdAdd } from "react-icons/io"
import Modal from "react-modal"
import AddEditTravelStory from '../../components/AddEditTravelStory'

const Home = () => {

  const [allStories, setAllStories] = useState([]);
  // console.log(allStories)

   const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  })

   const [openViewModal, setOpenViewModal] = useState({
    isShown: false,
    data: null,
  })
  

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

  const updateIsFavourite = async (data) => {

   const updateIsFavourite = async (storyData) => {
    const storyId = storyData._id

     const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  }) 


    try {
      const response = await axiosInstance.put(
        "/travel-story/update-is-favourite/" + storyId,
        {
          isFavorite: !storyData.isFavorite,
        }
      )

      if (response.data && response.data.story) {
        toast.success("Story updated successfully!")
        getAllTravelStories()
      }
    } catch (error) {
      console.log("Something went wrong. Please try again.")
    }
  }
  }

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
                            isFavorite={item.isFavorite} // match backend spelling
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
    {/* Add & Edit Travel Story Modal */}

          <Modal  isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
            zIndex: 999,
          },
        }}
       appElement={document.getElementById("root")}
        className="w-[80vw] md:w-[40%] h-[80vh] bg-white rounded-lg mx-auto mt-14 p-5 overflow-y-scroll scrollbar z-50"
      >
          <AddEditTravelStory
          storyInfo={openAddEditModal.data}
          type={openAddEditModal.type}
          onClose={() => {
            setOpenAddEditModal({ isShown: false, type: "add", data: null })
          }}
          getAllTravelStories={getAllTravelStories}
          />
        </Modal>

    <button
        className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-500 hover:bg-amber-800 fixed right-10 bottom-10"
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null })
        }}
      >
        <IoMdAdd className="text-[32px] text-white" />
      </button>


     <ToastContainer />

   </>

  )
}

export default Home