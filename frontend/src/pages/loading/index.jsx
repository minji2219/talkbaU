import React from "react";
import Header from "../../components/Header";

const Loading = () => {
  return (
    <div>
      <Header />
      <div className="mt-44 relative">
        <img
          src="/image/loadingClock.png"
          alt="로딩 시계"
          className="absolute left-[14%]"
        />
        <img
          src="/image/loadingCharacter.png"
          alt="로딩 요정"
          className="mx-auto"
        />
        <div className="text-center mt-3">결과를 분석중 입니다.</div>
      </div>
    </div>
  );
};

export default Loading;
