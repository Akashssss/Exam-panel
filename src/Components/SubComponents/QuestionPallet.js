import React from 'react'
import {useSelector} from "react-redux"

export default function QuestionPallet() {
  const state  = useSelector((state)=>state.question) 
  return (
    <div className="   flex w-full h-[20rem] border bg- border-zinc-400 rounded-md bg-[#ceecee] shadow-md mb-4">
      <div className='w-full'>
        <div className=" bg-[#4c8ccc] text-lg  font-bold text-white rounded-t-md p-1 w-full h-[10%] items-center pt-1">Question Pallete</div>
        <div className='grid grid-cols-5 gap-1'>
          {
            state.questionsPanel.questions.map((question)=>(
              <div className={`${question.color} text-center p-2`} key = {question.id}> {question.id+1}</div>
            ) )}

        </div>
      </div>
    </div>
  );
}
