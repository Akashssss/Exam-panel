import React from 'react'

export default function Header(props) {
  return (
    <div className="w-full bg-gradient-to-tr to-[#4c8ccc] from-[#104273] w-min-full h-14 text-xl font-bold text-slate-50 border border-b-black shadow-md text-center pt-[0.65rem] static">
      {!!props.content ? props.content.toUpperCase() : ""}
    </div>
  );
}
