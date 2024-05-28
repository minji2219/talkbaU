import React, { useContext } from "react";
import Header from "../../components/Header";
import GiftBox from "../../components/GiftBox";
import { giftContext } from "../../context/giftsContext";

const Recommand = () => {
  const {gifts} = useContext(giftContext);
  const handleClick = ()=>{

  }
  return (
    <div>
      <Header />
      <h1 className="font-bold text-xl mt-10">[{gifts ? gifts[5] : "00"}]님을 위한 선물</h1>
      <hr className="my-5 border-1" />
      <div onClick={handleClick} 
        className="flex justify-center items-center gap-2 py-2 mb-3 rounded-md w-36 bg-[#0085ff] text-white hover:cursor-pointer hover:opacity-80">
        <span className="material-symbols-outlined">refresh</span>
        {/* 다시 추천 받기 버튼 활성화 */}
        <span>다시 추천 받기</span>
      </div>
      {gifts?.map((gift,index)=>{
        if(index < 5)
        return <GiftBox key={gift.number} giftNum={gift.number} gift={gift.gift} description={gift.description}/>  
        })}
    </div>
  );
};

export default Recommand;
