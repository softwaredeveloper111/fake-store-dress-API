import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import {useForm} from "react-hook-form";

const AllItems = () => {
  const [dressList, setdressList] = useState(null);
  const [toggle, setToggle] = useState({val:false,id:null});
  const {register,reset,handleSubmit}  = useForm()

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("https://fake-store-dress-api.onrender.com/api/v1/fashion");
      //  console.log(data.dresses)
      setdressList(data.dresses);
    }
    fetchData();
  }, []);


  useEffect(()=>{

     if (toggle.val) {
      document.documentElement.style.overflow = "hidden"; // html
      document.body.style.overflow = "hidden"; // body
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };

  },[toggle])



  async function deleteEventHandler(id) {
    await axios.delete(`https://fake-store-dress-api.onrender.com/api/v1/fashion/${id}`);
    setdressList((prev) => prev.filter((item) => item._id !== id));
  }

  function editEventHandler(id) {
    setToggle(prev=>({...prev,val:true,id}))
  }


 async function updateEventHandlerfunc(data){

    await axios.patch(`https://fake-store-dress-api.onrender.com/api/v1/fashion/${toggle.id}`,data);
    setdressList(prev=>prev.map(item=>item._id===toggle.id? {...item,...data} : item ))
    setToggle((prev)=>({...prev,val:false,id:null}));
    reset();
  }




  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-[2fr_3fr_3fr_1fr_1.5fr_1fr_1fr] border border-zinc-300 bg-zinc-100 font-semibold">
        <div className="p-3 border-r">Title</div>
        <div className="p-3 border-r">Description</div>
        <div className="p-3 border-r">Image URL</div>
        <div className="p-3 border-r">Price</div>
        <div className="p-3 border-r">Category</div>
        <div className="p-3 border-r text-center">Edit</div>
        <div className="p-3 text-center">Delete</div>
      </div>

      {dressList ? (
        dressList.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-[2fr_3fr_3fr_1fr_1.5fr_1fr_1fr] border-x border-b border-zinc-300"
          >
            <div className="p-3 border-r">{item.title}</div>

            <div className="p-3 border-r line-clamp-3">{item.description}</div>

            <div className="p-3 border-r break-all text-sky-600 text-sm">
              {item.image}
            </div>

            <div className="p-3 border-r font-medium">₹${item.price}</div>

            <div className="p-3 border-r">{item.category}</div>

            <div className="p-3 border-r text-center">
              <button
                onClick={() => editEventHandler(item._id)}
                className="px-3 py-1 text-sm bg-sky-400 text-white rounded cursor-pointer"
              >
                Edit
              </button>
            </div>

            <div className="p-3 text-center">
              <button
                onClick={() => deleteEventHandler(item._id)}
                className="px-3 py-1 text-sm bg-red-400 text-white rounded cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <Loading />
      )}

      {toggle.val && (
        <div className='fixed inset-0 z-20 bg-["rgba(255, 255, 255, 0.3)] backdrop-blur-md flex justify-center items-center'>
            <span onClick={()=>setToggle((prev)=>({...prev,val:false,id:null}))} className="cross absolute right-8 top-8"> <i className="ri-close-line text-red-600 text-4xl cursor-pointer font-semibold"></i>
           </span>

             <form className="flex flex-col gap-5 w-100" onSubmit={handleSubmit(updateEventHandlerfunc)}>
                  <input {...register("image",{required:true})} className="px-3 py-3 rounded-md border border-sky-200 outline-none " type="url" placeholder="image url goes here."/>
    
                  <input {...register("price",{required:true})} className="px-3 py-3 rounded-md border border-sky-200 outline-none " type="number" placeholder="price goes here." />
                  
                  <button className="px-3 py-2 rounded-md bg-orange-300 cursor-pointer text-white">update</button>
            </form>

        </div>
      )}
    </div>
  );

  
};

export default AllItems;
