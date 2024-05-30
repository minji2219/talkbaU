import React from "react";
import Header from "../../components/Header";

const Explain = () => {
  return (
    <div>
      <Header />
      <h1 className="font-bold text-2xl mt-10">카카오톡 대화 내보내기</h1>
      <hr className="mt-5 mb-12 border-1" />
      <div>
        PC카톡에서 선물을 주고 싶은 사람의 카톡을 text 파일로 추출해주세요.
      </div>
      <div className="text-sm mt-7 mb-3">
        더보기 &lt; 대화 내용 &lt; 대화 내보내기
      </div>
      <img src="/image/kakaoFile.jpg" alt="대화 내보내기" />
      <div className="relative flex gap-2 mt-3 float-right">
        <img src="/image/speechBubbleSmall.png" alt="말풍선" />
        <div className="w-[150px] text-xs text-red-500 absolute top-12 left-5">
          ※ 모바일에서 추출한 파일은 추천이 이루어지지 않습니다.
        </div>
        <img src="/image/explainCharacter.png" alt="설명 요정" />
      </div>
    </div>
  );
};

export default Explain;
