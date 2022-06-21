import React from "react";

const RoutePreview = ({ isSelected, route, onClick }) => {
  return (
    <div className={`route-preview ${isSelected ? "is-selected" : ""}`} onClick={onClick}>
      <div className="route-number">{route.currentRouteId}</div>
      <ul className="steps is-vertical is-thin is-super-thin">
        <li className="steps-segment">
          <div className="steps-note">
            <p className="is-size-6">
              {route.direction === "circular" ? "Circular" : "Inicia"}
            </p>
          </div>
          <span className="steps-marker"></span>
          <div className="steps-content">
            <p className="is-size-6">{route.start}</p>
          </div>
        </li>
        {route.direction !== "circular" &&
          <li className="steps-segment">
            <div className="steps-note">
              <p className="is-size-6">Termina</p>
            </div>
            <span className="steps-marker"></span>
            <div className="steps-content">
              <p className="is-size-6">{route.end}</p>
            </div>
          </li>}
      </ul>
    </div>
  );
};

export default RoutePreview;
