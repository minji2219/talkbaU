import React, { useState } from "react";
import Header from "../../components/Header";
import { Link, useLocation } from "react-router-dom";
import Start from "./Start";

const Home = () => {
  const [homezIndex, setHomezIndex] = useState("-z-20");
  const [fileName, setFileName] = useState();
  const [recommandBtnDisabled, setRecommandBtnDisabled] = useState(true);
  const { state } = useLocation();

  setTimeout(() => {
    setHomezIndex("z-10");
  }, 3000);

  const validationFile = (e) => {
    if (e.target.files[0]?.type === "text/plain") {
      setFileName(e.target.files[0]?.name);
      setRecommandBtnDisabled(false);
      return;
    }
    alert("text 형태의 파일만 첨부가 가능합니다.");
  };

  const handleSubmit = () => {
    fetch("/file/attach", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fileName: fileName,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    // 로딩 페이지로 넘어가기
    // 에러 뜨면 error창 띄우고 다시 첨부 페이지로 넘어가기
    // 결과 도착하면 recommand페이지 띄우기
  };

  return (
    <div className="">
      {state?.pathname !== "/explain" && state?.pathname !== "/recommand" && (
        <Start />
      )}
      <div className={`relative ${homezIndex} duration-700 w-[100%]`}>
        <Header />
        <h1 className="font-bold text-2xl my-5">카카오톡 파일 첨부</h1>
        <div className="flex justify-center items-center mt-14">
          <img
            src="/image/speechBubble.png"
            alt="말풍선"
            width={350}
            className=" text-center"
          />
          <div className="flex flex-col items-center gap-2 absolute">
            <label
              htmlFor="file"
              className="material-symbols-outlined block text-8xl cursor-pointer"
            >
              file_present
            </label>
            <input
              type="file"
              id="file"
              accept=".txt"
              required
              onChange={validationFile}
              className="hidden"
            />
            {/* config파일에 색 지정 */}
            <button
              disabled={recommandBtnDisabled}
              onClick={handleSubmit}
              className="px-4 py-2 bg-[#D9D9D9] rounded-md font-extrabold text-lg hover:opacity-80 disabled:opacity-60 disabled:cursor-not-allowed"
            >
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

        <Link
          to="/explain"
          className="flex items-center gap-2 mt-14 font-bold hover:cursor-pointer"
        >
          <img src="/image/book.png" alt="첨부방법" />
          <div>파일 첨부 방법</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
