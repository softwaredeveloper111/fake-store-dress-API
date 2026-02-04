import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";

const AddItem = () => {
 
  const {register,reset,handleSubmit} = useForm();
  async function submitEventHandler(data){
     console.log(data);
    const res =  await axios.post("https://fake-store-dress-api.onrender.com/api/v1/fashion",data);
    console.log(res)
     reset()
  }

  return (
     <div>
      <h1 className="text-3xl mb-10"> <i className="ri-emotion-add-line"></i> Create a new Item</h1>
      <form className="flex flex-col gap-5 w-100" onSubmit={handleSubmit(submitEventHandler)}>
        <input {...register("image",{required:true})} className="px-3 py-3 rounded-md border border-sky-200 outline-none " type="url" placeholder="image url goes here."/>
        <input {...register("title",{required:true})} className="px-3 py-3 rounded-md border border-sky-200 outline-none " type="text" placeholder="title goes here." />
        <input {...register("description",{required:true})} className="px-3 py-3 rounded-md border border-sky-200 outline-none " type="text" placeholder="desciption goes here." />
        <input {...register("price",{required:true})} className="px-3 py-3 rounded-md border border-sky-200 outline-none " type="number" placeholder="price goes here." />
        <input {...register("category",{required:true})} className="px-3 py-3 rounded-md border border-sky-200 outline-none " type="text" placeholder="category goes here." />
        <button className="px-3 py-2 rounded-md bg-sky-300 cursor-pointer text-white">Create</button>
      </form>
    </div>
  )
}

export default AddItem