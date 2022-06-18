import React from "react";
import { useSearchParams } from "react-router-dom";
import logoLight from "../assets/logo-light.png";
import NavBar from "../components/NavBar";
import RouteSelector from "../components/RouteSelector";
import SelectedRoute from "../components/SelectedRoute";

const Main = () => {
  const [searchParams] = useSearchParams();

  const selectedRoute = searchParams.get("selected");

  return (
    <>
      <NavBar />
      <div className="container">
        <RouteSelector />
        <div className='content'>
          {selectedRoute
            ? <SelectedRoute route={selectedRoute} />
            : <div className="content-centered">
              <img src={logoLight} alt="metropolitana" className="content-logo" />
              <div className="content-tip">Pesquise e selecione uma linha para consultar o percurso e horário</div>
            </div>}
        </div>
      </div>
    </>
  );
};

export default Main;
