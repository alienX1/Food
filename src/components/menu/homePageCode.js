import React from "react";
import HomePage from "./homePage";

const HomePageCode = () => {
  const // x3000Kd,
    // total,
    // product_Minus,
    // product_Minus_Sign,
    hTitle = "Edartee online ordering",
    sTitle = "Best online ordering in town",
    bStart = "Start ordering";
  return (
    <div>
      <HomePage headerTitle={hTitle} subTitle={sTitle} buttonStart={bStart} />
    </div>
  );
};
export default HomePageCode;
