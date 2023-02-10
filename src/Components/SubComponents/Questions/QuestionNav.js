import React from 'react' ;
import {useSelector} from 'react-redux' ; 

export default function QuestionNav() {

    const state = useSelector((state)=>(state.question)) ;
  return (
    <div className="flex justify-between bg-[#4c8ccc] ml-1 font-bold text-white rounded-t-md p-1">
      <div className="font-bold text-white p-1">Q No.:{state.questionsPanel.questions[state.counter.count].id +1}</div>
      <div className='flex items-center mr-1'>
        <div>View in:</div>
        <div className='text-black font-normal mr-1 ml-[0.30rem]'> <select name="" id="">
            <option value="">English</option>
            <option value="">Hindi</option>
        </select></div>
      </div>
    </div>
  );
}
