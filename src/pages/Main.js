import React from "react";
import NavBar from "../components/NavBar";
import RouteSelector from "../components/RouteSelector";
import logoLight from "../assets/logo-light.png";

const Main = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <RouteSelector />
        <div className='content'>
          <div className="content-centered">
            <img src={logoLight} alt="metropolitana" className="content-logo" />
            <div className="content-tip">Pesquise e selecione uma linha para consultar o percurso e horário</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
