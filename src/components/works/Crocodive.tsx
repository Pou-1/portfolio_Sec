import React from "react";

const CrocoDiveBG: React.FC = () => {
  return (
    <div className="w-full h-screen relative flex-center gap-10 flex border-b bg-white">
      <div className="flex flex-col w-full h-full gap-10 pl-4">
        <div className="bg-[#9EF01A] rounded-b-[150px] h-1/3  w-full" />
        <div className="bg-[#004B23] rounded-t-[150px] w-full h-full" />
      </div>
      <div className="w-full flex flex-col h-full">
        <div className="h-full w-full flex gap-10">
          <div className="bg-[#38B000] rounded-b-[150px] h-2/3  w-full" />
          <div className="bg-[#006400] rounded-b-[150px] h-1/3  w-full" />
        </div>
        <div className="bg-gray-200 rounded-t-[150px] w-full h-2/3">
        
        </div>
      </div>
      <div className="w-full h-full flex flex-col">
        <div className="h-full w-full flex gap-10">
          <div className="bg-[#9EF01A] rounded-l-[150px] h-2/4  w-full" />
        </div>
        <div className="bg-[#004B23] rounded-t-[150px] w-full h-1/6" />
      </div>
    </div>
  );
};

export default CrocoDiveBG;
