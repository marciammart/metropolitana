import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import useRouteQuery from "../http/useRouteQuery";
import Trajectory from "./Trajectory";
import Timetable from "./Timetable";

const SelectedRoute = ({ route }) => {
  const [getRoute, { error, loading, data }] = useRouteQuery();

  useEffect(() => {
    getRoute(route);
  }, [route]);

  if (loading || !data || error) return <div>loading</div>;

  return (
    <>
      <div className="buttons">
        <MenuButton path="/" text="Percurso" />
        <MenuButton path="/horario" text="Horário" />
      </div>
      <div className="box is-shadowless">
        <Routes>
          <Route exact path="/" element={<Trajectory data={data} />} />
          <Route path="/horario" element={<Timetable data={data} />} />
        </Routes>
      </div>
    </>
  );
};

const MenuButton = ({ text, path }) => {
  const navigate = useNavigate();

  const goTo = () => {
    if (location.pathname !== path) navigate(`${path}${location.search}`);
  };

  const isSelected = () => {
    return location.pathname === path ? "is-metallic-blue" : "is-wild-blue-yonder";
  };

  return (
    <button
      onClick={() => goTo()}
      className={`button is-rounded ${isSelected()}`}>
      {text}
    </button>
  );
};

export default SelectedRoute;
