import React from "react";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <h1 className="font-bold text-2xl my-5">카카오톡 파일 첨부</h1>

      <div className="flex justify-center items-center relative mt-14">
        <img
          src="/image/speechBubble.png"
          alt="말풍선"
          width={350}
          className="mx-auto"
        />
        <div className="flex flex-col items-center gap-2 absolute">
          <label
            for="file"
            className="material-symbols-outlined block text-8xl cursor-pointer"
          >
            file_present
          </label>
          <input type="file" id="file" className="hidden" />
          {/* config파일에 색 지정 */}
          <button className="px-4 py-2 bg-[#D9D9D9] rounded-md font-extrabold text-lg hover:opacity-80">
            추천 받기
          </button>
          <div className="text-sm">카카오톡 대화 파일을 첨부해보세요!</div>
        </div>
      </div>

      <img
        src="/image/fileCharacter.png"
        alt="파일 첨부 캐릭터"
        className="ml-[50%]"
      />

      <div className="flex items-center gap-2 mt-14 font-bold hover:cursor-pointer">
        <img src="/image/book.png" alt="첨부방법" />
        <div>파일 첨부 방법</div>
      </div>
    </div>
  );
};

export default Home;
