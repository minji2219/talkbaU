import React from "react";
import Header from "../../components/Header";
import GiftBox from "../../components/GiftBox";

const Recommand = () => {
  return (
    <div>
      <Header />
      <h1 className="font-bold text-xl mt-10">[00]님을 위한 선물</h1>
      <hr className="my-5 border-1" />
      <div className="flex justify-center items-center gap-2 py-2 mb-3 rounded-md w-36 bg-[#0085ff] text-white hover:cursor-pointer hover:opacity-80">
        <span className="material-symbols-outlined">refresh</span>
        <span>다시 추천 받기</span>
      </div>
      <GiftBox />
      <GiftBox />
      <GiftBox />
      <GiftBox />
      <GiftBox />
    </div>
  );
};

export default Recommand;
