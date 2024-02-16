import React from "react";

const WeekDays = () => {
  const days = [
    { day: "Sunday", dayShort: "Sun" },
    { day: "Monday", dayShort: "Mon" },
    { day: "Tuesday", dayShort: "Tue" },
    { day: "Wednesday", dayShort: "Wed" },
    { day: "Thursday", dayShort: "Thu" },
    { day: "Friday", dayShort: "Fri" },
    { day: "Saturday", dayShort: "Sat" },
  ];
  return (
    <div className="grid grid-rows-7 border-y border-l bg-gray-100">
      {days.map((day, index) => (
        <div key={index} className="p-3 border text-xl font-semibold">{day.dayShort}</div>
      ))}
    </div>
  );
};

export default WeekDays;
