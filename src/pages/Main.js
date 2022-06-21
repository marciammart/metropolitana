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
      <div className="hero is-bright-gray is-fullheight-with-navbar">
        <div className="tile is-ancestor m-5">
          <div className="tile is-parent is-4">
            <div className="tile is-child box is-shadowless">
              <RouteSelector />
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child">
              {selectedRoute
                ? <SelectedRoute route={selectedRoute} />
                : <div className="main-text columns is-flex is-vcentered is-centered has-text-centered">
                  <div className="column is-8">
                    <img src={logoLight} alt="metropolitana" />
                    <p>Pesquise e selecione uma linha para consultar o percurso e horário</p>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
