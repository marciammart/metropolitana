import React from "react";
import FeatherIcon from "feather-icons-react";
import Stop from "./Stop";

const Trajectory = ({ data }) => {
  return (
    <div className="route-trajectory has-text-metallic-blue p-3">
      <div className="columns is-justify-content-space-between">
        <div className="column">
          <Header data={data} className="mb-5" />
          {!data.hasNextDeparture && <span className="tag is-danger is-light is-medium">
            Sem próximas partidas para hoje
          </span>}
        </div>
        <div className="column is-narrow">
          <span className="tag is-size-5 is-rounded is-tiffany-blue has-text-weight-bold">
            {data.durationInMinutes} minutos
          </span>
        </div>
      </div>
      <ul className="steps is-vertical is-thin">
        {data.stops.map((stop, stopIdx) =>
          <Stop key={stopIdx} stop={stop} />
        )}
      </ul>
    </div >
  );
};

export const Header = ({ data, className = "" }) => {
  return (
    <span className={`is-size-4 is-flex is-align-items-center is-gap-1 has-text-metallic-blue has-text-weight-extra-bold ${className}`} >
      <span className="tag is-large is-sunglow is-rounded">{data.currentRouteId}</span>
      <span>{data.start}</span>
      {data.end && <>
        <FeatherIcon icon="chevrons-right" size="30" />
        <span>{data.end}</span>
      </>}
    </span >
  );
};

export default Trajectory;
