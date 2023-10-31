import React from "react";
import "../styles/MainCover.css";

const MainCover = () => {
  const handleClickScrollBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="MainCover">
      <section className="typing_line">
        <div className="typing_line_first">
          <span>D</span>
          <span>o</span>&nbsp;
          <span>y</span>
          <span>o</span>
          <span>u</span>&nbsp;
          <span>w</span>
          <span>an</span>
          <span>n</span>
          <span>a</span>&nbsp;
          <span>b</span>
          <span>e</span>
        </div>
        <div className="typing_line_second">
          <span>a</span>&nbsp;
          <span>b</span>
          <span>e</span>
          <span>s</span>
          <span>t</span>&nbsp;
          <span>p</span>
          <span>l</span>
          <span>a</span>
          <span>n</span>
          <span>n</span>
          <span>e</span>
          <span>r</span>
          <span>?</span>
          <span className="typing_cursor"></span>
        </div>
      </section>
      <section className="scroll_container">
        <span onClick={handleClickScrollBottom} className="scroll_msg">
          If you right, scroll !
        </span>
        <div onClick={handleClickScrollBottom} className="scroll_arrow_center">
          <div className="scroll_arrow_A">
            <div className="downward_arrow_left_A"></div>
            <div className="downward_arrow_right_A"></div>
          </div>
          <div className="scroll_arrow_B">
            <div className="downward_arrow_left_B"></div>
            <div className="downward_arrow_right_B"></div>
          </div>
        </div>
      </section>
      <section className="deco_square">
        <div className="brown_deco_square"></div>
        <div className="green_deco_square"></div>
        <div className="gray_deco_square"></div>
      </section>
      <img
        className="paper_texture"
        src="assets/찢어진 종이.png"
        alt="찢어진 종이 질감"
      />
    </div>
  );
};

export default MainCover;
