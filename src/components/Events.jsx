import React from "react";

const Events = ({event}) => {
  return (
    <div className="text-xs">
      {event?.length > 0 &&
        event.map((event, i) => (
          <div key={i} className="flex gap-x-1 items-start">
            <div
              className={`w-1 h-1 rounded-full mt-2`}
              style={{ background: `${event?.color}` }}
            ></div>
            {event?.title?.split(" ")[0] }{event?.title?.split(" ")?.length>1 ? "...":""}
          </div>
        ))}
    </div>
  );
};

export default Events;
