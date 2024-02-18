import React from "react";
import Events from "./Events";

const Dates = ({ calendar, setIsOpenModel, setIndexNumbers }) => {
  const handleDate = (outerIndex, innerIndex) => {
    setIsOpenModel(true);
    setIndexNumbers({ outerIndex, innerIndex });
  };
  const col = calendar.length;
  return col ? (
    <div
      className={`grid`}
      style={{ gridTemplateColumns: `repeat(${col},1fr)` }}
    >
      {calendar &&
        calendar?.length > 0 &&
        calendar?.map((days, index) => (
          <div key={index} className="grid grid-rows-7 border">
            {days.map((day, ind) => (
              <div
                className={`p-3 border-y text-xl font-semibold cursor-pointer ${
                  day.active ? "bg-blue-400 text-white" : ""
                }`}
                key={ind}
                onDoubleClick={
                  day?.day ? () => handleDate(index, ind) : () => {}
                }
              >
                <div className="flex gap-x-2">
                  <span>{day.day}</span>
                  <Events event={day?.event}/>
                </div>
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
