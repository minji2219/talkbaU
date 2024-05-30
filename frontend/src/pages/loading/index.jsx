import React from "react";
import Header from "../../components/Header";

const Loading = () => {
  return (
    <div>
      <Header />
      <div className="mt-44">
      <div className="flex gap-6 items-start justify-center mb-5">
          <img
            src="/image/loadingClock.png"
            alt="로딩 시계"
            className=""
          />
          <img
            src="/image/loadingCharacter.png"
            alt="로딩 요정"
            className=""
          />
      </div>
      <div className="text-center mt-3">결과를 분석중 입니다.</div>
      </div>
    </div>
  );
};

export default Loading;
