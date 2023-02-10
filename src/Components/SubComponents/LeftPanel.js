import React from 'react'
import SubjectsTab from '../SubjectsTab' ;
import QuestionNav from './Questions/QuestionNav';
import Question from './Questions/QuestionPanel';
import Response from './Response';
export default function LeftPanel() {
    const subjects = ["All Sections" , "Physics" , "Chemistry" , "Maths"] ; 

  return (
    <div className=" flex-[0.83] mr-1 ml-2 max-h-[80%] border border-black">
      <SubjectsTab subjects={subjects} />
       <QuestionNav  />
        <Question />
          <div className=''> <Response/></div>
    </div>
  );
}
