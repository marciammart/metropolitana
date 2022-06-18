import React from "react";
import FeatherIcon from "feather-icons-react";
import Stop from "./Stop";

const Trajectory = ({ data }) => {
  return (<>
    <div className="selected-route-header">
      <div className="selected-route-title">
        <span>{data.start}</span>
        <FeatherIcon icon="chevrons-right" />
        <span>{data.end}</span>
      </div>
      <div className="selected-route-info">
        {data.durationInMinutes ? `${data.durationInMinutes} minutos` : "Sem partidas previstas para hoje"}
      </div>
    </div>
    <div className="selected-route-stops">
      {data.stops.map((stop, i) => <Stop key={i} stop={stop} />)}
    </div>
  </>);
};

export default Trajectory;
