import React from "react";

const RoutePreview = ({ isSelected, route, onClick }) => {
  return (
    <div className={`route-result ${isSelected && "route-result-selected"}`} onClick={onClick}>
      <div className="route-result-number">{route.currentRouteId}</div>
      <div>
        <div className="steps">
          <div className="step">
            <div className={`note ${route.direction !== "circular" && "note-inicia"}`}>
              <div>{route.direction === "circular" ? "Circular" : "Inicia"}</div>
            </div>
            <div>
              <div className="circle"></div>
            </div>
            <div>
              <div className="title">{route.start}</div>
            </div>
          </div>
          {route.direction !== "circular" &&
            <div className="step">
              <div className="note">
                <div>Termina</div>
              </div>
              <div>
                <div className="circle"></div>
              </div>
              <div>
                <div className="title">{route.end}</div>
              </div>
            </div>}
        </div></div>
    </div>
  );
};

export default RoutePreview;
