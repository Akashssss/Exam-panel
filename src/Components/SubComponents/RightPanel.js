import React from 'react'
import Card from './Card'
import QuestionPallet from './QuestionPallet'
import Legends from './Legends';
export default function RightPanel() {
  return (
    <div className=" flex-[0.17] flex-col  w-full  min-h-full border border-black">
      
        <Card />
     
      
        <QuestionPallet />
      
      
        <Legends />
      
    </div>
  );
}
