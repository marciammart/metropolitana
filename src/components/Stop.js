import React, { useState, useRef } from "react";

const Stop = ({ stop }) => {
  const ref = useRef();
  const [open, setOpen] = useState(false);

  const calculateNextTime = () => {
    const today = new Date().toLocaleDateString("sv");
    const nextTime = times.map(time => ({ date: new Date(`${today} ${time}:00`), time }))
      .find(time => time.date > new Date());
    return nextTime.time;
  };

  const times = stop.departures
    .filter(d => d.isAvailableToday)
    .flatMap(d => d.times).sort();

  const nextTime = calculateNextTime();

  return (
    <div ref={ref} className={`step ${open && "step--active"}`} onClick={() => setOpen(!open)}>
      <div>
        <div className="circle"></div>
      </div>
      <div>
        <div className="title">{stop.name}</div>
        {open && <div className="caption">
          <div className="caption-header">Partidas de hoje</div>
          <div className="caption-content">
            {times.map(time =>
              <span key={time} className={`${nextTime === time && "caption-content--next"}`}>{time}</span>
            )}
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Stop;
