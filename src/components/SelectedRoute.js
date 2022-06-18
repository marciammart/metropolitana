import React, { useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import useRouteQuery from "../http/useRouteQuery";
import Stop from "./Stop";

const SelectedRoute = ({ route }) => {
  const [getRoute, { error, loading, data }] = useRouteQuery();

  useEffect(() => {
    getRoute(route);
  }, [route]);

  if (loading || !data || error) return <div>loading</div>;

  return (
    <div className="selected-route">
      <div>
        <button className="selected-route-option selected-route-option-selected">Percurso</button>
        <button className="selected-route-option">Horário</button>
      </div>
      <div className="selected-route-content">
        <div className="selected-route-header">
          <div className="selected-route-title">
            <span>{data.start}</span>
            <FeatherIcon icon="chevrons-right" />
            <span>{data.end}</span>
          </div>
          <div className="selected-route-info">
            {data.durationInMinutes ? `${data.durationInMinutes} minutos` : "Sem mais partidas hoje"}
          </div>
        </div>
        <div className="selected-route-stops">
          {data.stops.map((stop, i) => <Stop key={i} stop={stop} />)}
        </div>
      </div>
    </div>
  );
};

export default SelectedRoute;
