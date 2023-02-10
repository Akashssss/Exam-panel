import React from 'react'
import Response from './SubComponents/Response';

export default function Footer(props) {
const copy = String.fromCodePoint(0x00a9);
    return (
    <div className="pt-[0.125rem] bg-gray-600 w-min-full h-8 text-lg font-bold text-slate-50 border border-b-black shadow-md text-center">
      <span>{copy}</span>
      {!!props.content ? props.content : ""}
    </div>
  );
}
