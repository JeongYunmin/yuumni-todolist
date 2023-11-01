import React, { useState } from "react";
import Btn from "./Btn";

const getYear = new Date().getFullYear();
const getMonth = new Date().getMonth() + 1;
const getDate = new Date().getDate();

const Header = () => {
  const [date, setDate] = useState(parseInt(getDate));
  const [month, setMonth] = useState(parseInt(getMonth));
  const [year, setYear] = useState(parseInt(getYear));

  const handleClickPlusDate = () => {
    const longDayMonth = [1, 3, 5, 7, 8, 10, 12];

    if (
      ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) &&
      month === 2
    ) {
      if (date < 29) {
        setDate(date + 1);
      } else {
        setMonth(month + 1);
        setDate(1);
      }
    } else if (month === 2) {
      if (date < 28) {
        setDate(date + 1);
      } else {
        setMonth(month + 1);
        setDate(1);
      }
    } else if (longDayMonth.includes(month)) {
      if (date < 31) {
        setDate(date + 1);
      } else {
        setMonth(month + 1);
        setDate(1);
      }
    } else {
      if (date < 30) {
        setDate(date + 1);
      } else {
        setMonth(month + 1);
        setDate(1);
      }
    }
    if (month === 12 && date === 31) {
      setYear(year + 1);
      setMonth(1);
    }
  };

  return (
    <div className="Header">
      <Btn type="left" />
      <div>{`${year} ${month} ${date}`}</div>
      <Btn type="right" onClick={handleClickPlusDate} />
    </div>
  );
};

export default Header;
