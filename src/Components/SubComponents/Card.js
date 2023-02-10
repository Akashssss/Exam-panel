import React from 'react'
import Avatar from "./Henry.jpg";
export default function Card() {
  return (
    <div className="flex w-full h-[7.0rem] border border-zinc-400 rounded-md bg-[#ceecee] shadow-md mb-4">
      <div className="flex-grow   pt-1 pl-1">
        <img className=" w-[5rem] h-[6rem] overflow-hidden" src={Avatar}></img>
      </div>
      <div className="flex font-bold text-base flex-col flex-grow">
        <div className="flex items-center w-full justify-between">
          <div>
            <div>Time</div>
            <div>Left:</div>
          </div>
          <div className="pr-2">02:39:29</div>
        </div>
        <div className="pt-5">Akash Singh</div>
      </div>
    </div>
  );
}
