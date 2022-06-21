import React from "react";
import Search from "./Search";
import RoutePreview from "./RoutePreview";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useRoutesQuery from "../http/useRoutesQuery";

const RouteSelector = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [getRoutes, { error, data, loading }] = useRoutesQuery();

  useEffect(() => {
    handleSearch({
      filter: searchParams.get("filter"),
      query: searchParams.get("query")
    });
  }, []);

  const handleSearch = ({ filter, query }) => {
    const selected = searchParams.get("selected");
    if (filter && query) {
      getRoutes({ [filter]: query });
      setSearchParams({
        filter,
        query,
        ...(selected && { selected })
      });
    } else if (!data) {
      getRoutes({ limit: 10 });
      setSearchParams({});
    } else {
      setSearchParams({});
    }
  };

  const handleSelect = (selected) => {
    const filter = searchParams.get("filter");
    const query = searchParams.get("query");
    const currentSelected = searchParams.get("selected");
    if (currentSelected === selected)
      setSearchParams({
        ...(filter && { filter }),
        ...(query && { query })
      });
    else
      setSearchParams({
        ...(filter && { filter }),
        ...(query && { query }),
        selected
      });
  };

  const getLoading = () => {
    return loading && <div className="has-text-centered mt-6">A pesquisar...</div>;
  };

  const getError = () => {
    return error && <div className="has-text-centered mt-6">Erro: {error}</div>;
  };

  const getData = () => {
    return !loading && data && data.length > 0 &&
      <div>
        {data.map(route =>
          <RoutePreview
            key={route.directionId}
            route={route}
            onClick={() => handleSelect(route.directionId)}
            isSelected={searchParams.get("selected") === route.directionId} />
        )}
      </div>;
  };

  const getNotFound = () => {
    return !loading && data && data.length === 0 && <div className="has-text-centered mt-6">Não foi encontrada nenhuma rota com o número indicado</div>;
  };

  const getDefault = () => {
    return !loading && !data && !error && <div className="has-text-centered mt-6">Pesquise por uma linha para ver as opções</div>;
  };

  return (
    <>
      <Search
        onChange={handleSearch}
        defaultFilter={searchParams.get("filter")}
        defaultQuery={searchParams.get("query")} />
      {getLoading()}
      {getError()}
      {getData()}
      {getNotFound()}
      {getDefault()}
    </>
  );
};

export default RouteSelector;
