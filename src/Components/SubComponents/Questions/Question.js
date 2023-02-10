import React from "react";

export default function Question({ questionText, questionImage, options }) {
  let code = 65;
  return (
    <div className="flex-[0.5] flex flex-col border border-gray-200 rounded-b-lg">
      <div className="font-bold text-blue-700 border-2 border-b-gray-100 shadow-sm mb-2 pl-2">
        {"Question".toUpperCase()}
      </div>
      <div className="text-justify mr-12 pl-2">{questionText}</div>

      <div>{<img src={questionImage}></img>}</div>

      <div>
        {options.map((option) => (
          <div className="border border-t-gray-100 " key={option}>
            <label className="flex ml-2 h-[5rem] text-center items-center">
              <input type="radio" name="option" value={option} />
              <div className="ml-1">({String.fromCharCode(code++)}).</div>
              <div className="ml-3"> {option}</div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
