import React from 'react'

export default function Instructions({instructions}) {
    const headingInstruction = "Question Instructions" ; 
  return (
    <div className="flex-[0.5] flex flex-col border border-gray-100 ">
      <div className="font-bold text-blue-700 border-2 border-b-gray-100 shadow-sm mb-2 pl-2">{headingInstruction.toUpperCase()}</div>
      <div className='text-justify mr-12 pl-2'>{instructions} </div>
    </div>

  );
}
