import React from "react";
import Questions from "./Components/Questions";
import GetInTouch from "./Components/GetInTouch";
import Footer from "./Components/Footer";

function Home() {
  return (
    <div className="lg:p-28 p-7 inter">
      <Questions />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default Home;
