import React from 'react'; 
import Instructions from './Instructions';
import Question from './Question';
import img from './Capture.PNG' ; 
import {useSelector} from  'react-redux' ; 


export default function QuestionPanel() {
     
   const state = useSelector((state)=>state.question ) ; 

     console.log(state.counter.count)
  return (
    <div className="ml-1  rounded-b-lg shadow-lg mb-6 pb-12">
      <div className="flex  h-full">
        <Instructions
          instructions={
            state.questionsPanel.questions[state.counter.count].instruction
          }
        />
        <Question
          questionText={
            state.questionsPanel.questions[state.counter.count].question
          }
          questionImage={
            state.questionsPanel.questions[state.counter.count].questionImage
          }
          options={state.questionsPanel.questions[state.counter.count].options}
        />
      </div>
    </div>
  );
}
