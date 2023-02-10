import React from 'react'

export default function Tab({value  , submitHandler}) {
  let b = true;
  if (value.toUpperCase() == "ALL SECTIONS" || value.toUpperCase() == "NEXT")
    b = false;
  return (
    <div onClick={()=>{submitHandler()}}
      className={`mr-2 text-center font-bold text-white ${
        b ? "bg-[#4c8ccc]" : "bg-blue-900"
      } rounded drop-shadow-md pt-[0.30rem] pb-[0.30rem] pr-3 pl-3 flex-[0.140] cursor-pointer hover:bg-[#32587d]  transition duration-75`} >
      {value.toUpperCase()}
    </div>
  );
}
