import React from 'react'
import Tab from './Tab'
export default function SubjectsTab({subjects}) {
  return (
    <div className='flex p-3 border border-b shadow-sm shadow-slate-400 mb-2'>
        
         {
            subjects.map((subject)=>
                (<Tab value={subject} key  = {subject}/>)
            )
         }

        </div>
  
  )
}
