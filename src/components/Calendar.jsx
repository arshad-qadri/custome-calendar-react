import React, { useEffect, useState } from "react";
import Dates from "./Dates";
import WeekDays from "./WeekDays";
import Header from "./Header";

const Calendar = () => {
  const [calendar, setCalendar] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [changedDate, setChangedDate] = useState();

  useEffect(() => {
    // const date = new Date("06-01-2024");
    // const date = new Date("02-01-2025");
    const date = changedDate ? new Date(changedDate) : new Date();
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const startDay = startDate.getDay();
    const end_date = endDate.getDate();
    const month = date.getMonth() ;
    const year = date.getFullYear();
    setMonth(month);
    setYear(year);
    const today = date.getDate();
    const totalDates = month+1 !== 2 && startDay >= 5 ? 42 : 35;
    let week = 0;
    let temp = [[]];
    for (let i = 1; i <= totalDates; i++) {
      if (i >= startDay + 1 && i <= end_date + startDay) {
        if (today === i - startDay) {
          temp[week].push({ day: i - startDay, active: true, event: [] });
        } else {
          temp[week].push({ day: i - startDay, active: false, event: [] });
        }
      } else {
        temp[week].push({ day: "", active: false, event: [] });
      }
      if (temp[week].length === 7 && temp[week][temp[week].length - 1].day) {
        week++;
        temp[week] = [];
      }
    }
    setCalendar(temp);

    // let temp2 = [[]];
    // let week2 = 0;
    // for (let i = 1; i <= startDay; i++) {
    //   temp2[week2].push({ day: null, active: false, event: [] });
    // }
    // for (let i = 1; i <= end_date; i++) {
    //   if (temp2[week2].length === 7) {
    //     week2++;
    //     temp2[week2] = [];
    //   }
    //   if (i === today) {
    //     temp2[week2].push({ day: i, active: true, event: [] });
    //   } else {
    //     temp2[week2].push({ day: i, active: false, event: [] });
    //   }
    // }
    // while (temp2[week2].length < 7) {
    //   temp2[week2].push({ day: null, active: false, event: [] });
    // }
    // setCalendar(temp2);
  }, [changedDate]);

  return (
    <div className="md:max-w-5xl w-full m-auto p-5 min-h-screen ">
      <Header month={month} year={year} setChangedDate={setChangedDate} />
      {calendar?.length > 0 ? (
        <div className="grid md:grid-cols-[150px,auto] grid-cols-[auto,auto] h-full">
          {/* {console.log("calendar",calendar)} */}
          <WeekDays />
          <Dates calendar={calendar} />
        </div>
      ) : null}
    </div>
  );
};

export default Calendar;
