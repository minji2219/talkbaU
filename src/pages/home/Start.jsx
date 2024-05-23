import React, { useState } from "react";

const Start = () => {
  const [startDisplay, setStartDisplay] = useState("opacity-100");
  setTimeout(() => {
    setStartDisplay("opacity-0");
  }, 3000);
  return (
    <div
      className={`-my-16 h-[100vh] bg-white flex flex-col gap-10 justify-center items-center ${startDisplay} duration-700 ease-out`}
    >
      <img src="/image/mainCharacter.png" alt="메인케릭터" />
      <img src="/image/logo.png" alt="logo" />
    </div>
  );
};

export default Start;
