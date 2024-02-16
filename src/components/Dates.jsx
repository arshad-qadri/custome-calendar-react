import React from "react";

const Dates = ({ calendar }) => {
  // console.log("len===", calendar?.length);
  const col = calendar.length;
  return col ? (
    <div className={`grid`} style={{gridTemplateColumns:`repeat(${col},1fr)`}}>
      {calendar &&
        calendar?.length > 0 &&
        calendar?.map((days, index) => (
          <div key={index} className="grid grid-rows-7 border">
            {days.map((day, ind) => (
              <div
                className={`p-3 border-y text-xl font-semibold ${
                  day.active ? "bg-blue-400 text-white" : ""
                }`}
                key={ind}
              >
                {day.day}
              </div>
            ))}
          </div>
        ))}
    </div>
  ) : (
    ""
  );
};

export default Dates;
