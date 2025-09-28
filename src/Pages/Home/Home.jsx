import React from "react";
import Questions from "./Components/Questions";
import GetInTouch from "./Components/GetInTouch";

function Home() {
  return (
    <div className="lg:p-28 p-7 inter">
      <Questions />
      <GetInTouch />
    </div>
  );
}

export default Home;
