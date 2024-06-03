import React from "react";

const GiftBox = ({giftNum,gift,description}) => {
  return (
    <div className="flex items-center gap-5 border-b-2 py-5">
      <img src={`/image/gift${giftNum}.png`} alt={`선물${1}`} width={100}/>
      <div className="flex-1">
        <div className="text-xl font-extrabold rounded-md">{gift}</div>
        <div>
          {description}
        </div>
        <a
          href={`https://www.coupang.com/np/search?component=&q=${gift}&channel=user`}
          target="_blank"
          rel="nooper noreferrer"
          className="text-blue-600 float-right hover:opacity-80 block"
        >
          → 바로가기
        </a>
      </div>
    </div>
  );
};

export default GiftBox;
