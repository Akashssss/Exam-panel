import React from 'react'
import Tab from '../Tab'
import {useDispatch} from 'react-redux' ;
import { Next ,Previous ,Review ,Dump  , ClearResponse} from '../Store/QuestionSlice';
export default function Response() {

 const dispatch = useDispatch() ; 
  return (
    <div className="flex  m-10  ">
      <Tab
        value="Clear Response"
        key="Clear Response"
        submitHandler={() => {
          dispatch(ClearResponse());
        }}
      />
      <Tab
        value="Review"
        key="Review"
        submitHandler={() => {
          dispatch(Review());
        }}
      />
      <Tab
        value="Dump"
        key="Dump"
        submitHandler={() => {
          dispatch(Dump());
        }}
      />
      <Tab
        value="Previous"
        key="Previous"
        submitHandler={() => {
          dispatch(Previous());
        }}
      />
      <Tab
        value="Next"
        key="Next"
        submitHandler={() => {
          dispatch(Next());
        }}
      />
    </div>
  );
}
