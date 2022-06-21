import React, { useState, useRef } from "react";
import { useOnClickOutside } from "use-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import uniqWith from "lodash/uniqWith";
import isEqual from "lodash/isEqual";

const Stop = ({ stop }) => {
  const ref = useRef();
  const [open, setOpen] = useState(false);

  useOnClickOutside(ref, () => setOpen(false));

  const availabilityIds = uniqWith(
    stop.departures.map(d => ({ id: d.availabilityId, title: d.availability })),
    isEqual
  );

  return (
    <li ref={ref} className={`steps-segment ${open ? "steps-segment-active" : ""}`}>
      <span className="steps-marker"></span>
      <div className="steps-content">
        <p onClick={() => setOpen(!open)}>{stop.name}</p>
        {open &&
          <>
            <StopDetail title="Hoje" stop={stop} />
            {availabilityIds.map(({ id, title }) =>
              <StopDetail key={id} title={title} availabilityId={id} stop={stop} />)}
          </>}
      </div>
    </li>
  );
};

const StopDetail = ({ stop, title, availabilityId }) => {
  const [open, setOpen] = useState(!availabilityId);

  const calculateNextTime = () => {
    const today = new Date().toLocaleDateString("sv");
    const nextTime = todayTimes.map(time => ({ date: new Date(`${today} ${time}:00`), time }))
      .find(time => time.date > new Date());
    return nextTime?.time;
  };

  const availabilityTimes = stop.departures
    .filter(d => d.availabilityId === availabilityId)
    .map(d => d.time);
  const todayTimes = stop.departures
    .filter(d => d.isAvailableToday)
    .map(d => d.time);

  const nextTime = calculateNextTime();
  const times = availabilityId ? availabilityTimes : todayTimes;

  return (
    <div className="stop-details has-radius my-3">
      <div className="is-light-periwinkle is-flex is-justify-content-space-between px-3 py-2"
        onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span><FontAwesomeIcon icon={faAngleDown} /></span>
      </div>
      {open &&
        <div className="stop-times p-3 is-flex is-flex-wrap-wrap is-gap-1">
          {times.length > 0 ?
            times.map(time =>
              <span key={time}
                className={`${time === nextTime ? "has-text-weight-extra-bold" : ""}`}>
                {time}
              </span>
            )
            : "Sem partidas"}
        </div>}
    </div>
  );
};

export default Stop;
