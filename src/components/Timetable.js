import React from "react";
import FeatherIcon from "feather-icons-react";


const Timetable = ({ data }) => {
  return (
    <>
      <div className="selected-route-header">
        <div className="selected-route-title">
          <span>{data.start}</span>
          <FeatherIcon icon="chevrons-right" />
          <span>{data.end}</span>
        </div>
        <div className="selected-route-info">
          Descarregar
        </div>
      </div>
      <div className="selected-route-stops">
        To be continued...
      </div>
    </>
  );
};

export default Timetable;
