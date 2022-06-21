import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import uniqWith from "lodash/uniqWith";
import uniq from "lodash/uniq";
import isEqual from "lodash/isEqual";

const Timetable = ({ data }) => {
  const availabilities = data.stops[0].departures
    .map(d => ({ id: d.availabilityId, description: d.availability, today: d.isAvailableToday }));
  const [selected, setSelected] = useState(uniq(availabilities.map(a => a.id)));
  const [today, setToday] = useState(false);

  const handleCheckbox = (id, { target: { checked } }) => {
    console.log(today);
    if (today) setToday(false);
    if (checked) setSelected(uniq([...selected, id]));
    else setSelected([...selected.filter(s => s !== id)]);
  };

  const handleToday = ({ target: { checked } }) => {
    if (checked) {
      setSelected([]);
      setToday(true);
    } else {
      setSelected(uniq(availabilities.map(a => a.id)));
      setToday(false);
    }
  };

  const isAvailableToday = availabilities.filter(a => a.today).length > 0;

  return (
    <>
      <div className="has-text-metallic-blue p-3">
        <div className="columns is-justify-content-space-between mb-5">
          <div className="column">
            <span className="is-size-4 is-flex is-align-items-center is-gap-1 has-text-metallic-blue has-text-weight-extra-bold">
              <span>{data.start}</span>
              <FeatherIcon icon="chevrons-right" size="30" />
              <span>{data.end}</span>
            </span>
          </div>
          {/* <div className="column is-narrow">
            <span className="tag is-size-5 is-rounded is-tiffany-blue has-text-weight-bold is-clickable">
              Descarregar
            </span>
          </div> */}
        </div>
        <div style={{ display: "grid" }}>
          <div className="table-container" style={{ overflowY: "auto", maxHeight: "100vh" }}>
            <table className="table is-bordered has-sticky-header has-sticky-column">
              <thead>
                <tr>
                  <th>Estação / Dias de operação</th>
                  {availabilities
                    .filter(a => selected.includes(a.id) || today && a.today)
                    .map((availability, idx) =>
                      <th key={idx}>
                        <span className="tag timetable-tag is-tiffany-blue is-rounded">{availability.id}</span>
                      </th>)}
                </tr>
              </thead>
              <tbody>
                {data.stops.map((stop, stopIdx) =>
                  <tr key={stop.name + stopIdx}>
                    <th>
                      {stop.name}
                    </th>
                    {stop.departures
                      .filter(d => selected.includes(d.availabilityId) || today && d.isAvailableToday)
                      .map(({ time }, timeIdx) =>
                        <td key={stop.name + stopIdx + time + timeIdx}>{time}</td>
                      )}
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6">
          <div className="mb-2">
            {isAvailableToday && <label className="checkbox">
              <input type="checkbox" className="mr-3" onChange={handleToday} checked={today} />
              <span className="tag timetable-tag is-rounded is-sunglow mr-3">Hoje</span>
              <span>Ver apenas os horários de hoje</span>
            </label>}
          </div>
          {uniqWith(availabilities, isEqual).map(availability =>
            <div key={availability.id} className="mb-2">
              <label className="checkbox">
                <input type="checkbox" className="mr-3"
                  checked={selected.includes(availability.id)}
                  onChange={(event) => handleCheckbox(availability.id, event)} />
                <span className="tag timetable-tag is-rounded is-tiffany-blue mr-3">{availability.id}</span>
                <span>{availability.description}</span>
              </label>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Timetable;
