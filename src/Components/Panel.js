import React from 'react'
import LeftPanel from './SubComponents/LeftPanel';
import RightPanel from './SubComponents/RightPanel' ; 
export default function Panel() {
  return (
    <div className='flex justify-between h-full border border-b-8 -mb-2'>
     <LeftPanel />
     <RightPanel/>
    </div>
  )
}
