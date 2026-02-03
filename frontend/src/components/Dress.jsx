import React from "react";

const Dress = ({item}) => {
  const {image,title,price,description} = item

  return (
    <div className="w-75 h-100 p-4 bg-zinc-200 shadow-2xl rounded-lg overflow-hidden">
      <div className="w-full h-[70%] ">
        <img
          className="w-full h-full object-cover  object-center rounded-lg"
          src={image}
          alt=""
        />
      </div>
      <h5 className="mt-3  truncate w-64 font-semibold text-xl">{title}</h5>
      <span className="block truncate w-64 mt-1 text-sm">
        {description}
      </span>
      <h5 className="mt-4"><span className="font-bold text-lg">Price:</span> ₹{price}</h5> 
    </div>
  );
};

export default Dress;
