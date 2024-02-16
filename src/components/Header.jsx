import React, { useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const Header = ({ month, year, setChangedDate }) => {
  const date = new Date();
  const [currentMonth, setCurrentMonth] = useState(date.getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(date.getFullYear());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleNext = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
      setChangedDate(`1-1-${currentYear + 1}`);
    } else {
        // alert("2")
      setCurrentMonth(currentMonth + 1);
      setChangedDate(`${currentMonth + 1}-1-${currentYear}`);
    }
  };
  const handlePerv = ()=>{
    // if(currentYear)
    if (currentMonth === 1) {
        setCurrentMonth(12);
        setCurrentYear(currentYear - 1);
        setChangedDate(`1-1-${currentYear - 1}`);
      } else {
          // alert("2")
        setCurrentMonth(currentMonth - 1);
        setChangedDate(`${currentMonth - 1}-1-${currentYear}`);
      }
  }
  return (
    <div className="flex justify-between my-2">
      <div className="text-xl font-semibold">
        {months[month]} {year}
      </div>
      <div>
        <button className="rounded border hover:bg-gray-100" onClick={handlePerv}>
          <IoMdArrowDropleft size={30} />
        </button>{" "}
        <button className="rounded border hover:bg-gray-100" onClick={handleNext}>
          <IoMdArrowDropright size={30} />
        </button>
      </div>
    </div>
  );
};

export default Header;
