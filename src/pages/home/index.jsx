import React from "react";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <h1 className="font-bold text-2xl">카카오톡 파일 첨부</h1>
      <div>
        <img src="/image/speechBubble.png" alt="말풍선" />
        <span class="material-symbols-outlined">file_present</span>
        <button>추천 받기</button>
        <div>카카오톡 대화 파일을 첨부해보세요!</div>
      </div>
    </div>
  );
};

export default Home;
