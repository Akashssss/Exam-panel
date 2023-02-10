import React from 'react'

export default function () {
  return (
    <div className="   flex w-full h-[18rem] border border-zinc-400 rounded-md bg-[#ceecee] shadow-md">
      <div className="w-full">
        <div className=" bg-[#4c8ccc] text-lg  font-bold text-white rounded-t-md p-1 w-full h-[10%] items-center pt-1">
          Legend (Click to View)
        </div>
        <div className="grid grid-cols-2 p-1">
          <div className="bg-green-500 font-bold p-[2px] m-[2px]">
            4 Answers
          </div>
          <div className="bg-rose-500 font-bold p-[1px] m-[2px]">
            2 No Answers
          </div>
          <div className="bg-purple-500 font-bold p-[1px] m-[2px]">
            1 Review + Ans
          </div>
          <div className="bg-yellow-300 font-bold p-[1px] m-[2px]">
            1 Review - Ans
          </div>
          <div className="bg-zinc-300 font-bold p-[1px] m-[2px]">1Dump</div>
          <div className="bg-white font-bold p-[1px] m-[2px]">1 No Visit</div>
        </div>
        <div className="text-center bg-[#4c8ccc] font-semibold p-1 ml-1 mr-1 mb-3">
          10 All Questions
        </div>
        <div className="grid grid-cols-2 p-1 border-2 border-t-white">
          <div className="bg-[#4c8ccc] font-bold text-center text-white rounded-md p-1 mt-2 mb-1 ml-1 mr-1">
            Profit-2 
          </div>
          <div className="bg-[#4c8ccc] font-bold text-center text-white rounded-md p-1 mt-2 mb-1 ml-1 mr-1">
            Instra
          </div>
          <div className="bg-[#4c8ccc] font-bold text-center text-white rounded-md p-1 mt-2 mb-1 ml-1 mr-1">
            Questions
          </div>
          <div className="bg-[#4c8ccc] font-bold text-center text-white rounded-md p-1 mt-2 mb-1 ml-1 mr-1">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
}
