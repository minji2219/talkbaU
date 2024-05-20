import React from "react";

const GiftBox = () => {
  return (
    <div className="flex items-start gap-5 border-b-2 py-5">
      <img src="/image/gift1.png" alt="선물1" />
      <div>
        <div className="text-xl font-extrabold rounded-md">선물 1</div>
        <div>
          00이라는 단어를 많이 사용하는 것으로 보아 선물1이 [00]님에게 유용할 것
          같아요.
        </div>
        <a
          href="https://www.naver.com/"
          target="_blank"
          rel="nooper noreferrer"
          className="text-blue-600 float-right hover:opacity-80"
        >
          → 바로가기
        </a>
      </div>
    </div>
  );
};

export default GiftBox;
