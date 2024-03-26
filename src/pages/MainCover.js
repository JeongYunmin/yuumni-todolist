import React, { useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import "../styles/MainCover.css";

const MainCover = () => {
  const firstObj = useRef({});
  const secondObj = useRef({});
  const firstLineTextArr = "Do you wanna be".split("");
  const secondLineTextArr = "the best planner?".split("");

  const TypingEffect = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
  `;
  const TypingSpanFirstLine = styled.span`
    opacity: 0;
    animation: forwards ${TypingEffect};
    ${(props) =>
      props.delay &&
      css`
        animation-delay: ${props.delay}s;
      `}
  `;
  const TypingSpanSecondLine = styled.span`
    opacity: 0;
    animation: forwards ${TypingEffect};
    ${(props) =>
      props.delay &&
      css`
        animation-delay: ${props.delay}s;
      `}
  `;

  const handleClickScrollBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  (function createRandomNum() {
    const firstLineDelayTime = firstLineTextArr.map(() =>
      (Math.random() * 1.4).toFixed(2)
    );
    const secondLineDelayTime = secondLineTextArr.map(() =>
      (Math.random() * 2.1 + 1.4).toFixed(2)
    );

    firstLineDelayTime.sort((a, b) => a - b);
    secondLineDelayTime.sort((a, b) => a - b);

    firstLineTextArr.forEach((el, i) => {
      firstObj.current[i] = firstLineDelayTime[i];
    });
    secondLineTextArr.forEach((el, i) => {
      secondObj.current[i] = secondLineDelayTime[i];
    });
  })();

  return (
    <div className="MainCover">
      <section className="typing_line">
        <div className="typing_line_first">
          {firstLineTextArr.map((el, index) => (
            <TypingSpanFirstLine
              key={index}
              delay={firstObj.current[index] || 0}
            >
              {el}
            </TypingSpanFirstLine>
          ))}
        </div>
        <div className="typing_line_second">
          {secondLineTextArr.map((el, index) => (
            <TypingSpanSecondLine
              key={index}
              delay={secondObj.current[index] || 0}
            >
              {el}
            </TypingSpanSecondLine>
          ))}
          <span className="typing_cursor"></span>
        </div>
      </section>
      <section className="scroll_container">
        <span onClick={handleClickScrollBottom} className="scroll_msg">
          If you are right, click !
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
    </div>
  );
};

export default MainCover;
