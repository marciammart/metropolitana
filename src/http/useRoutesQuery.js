import { useState } from "react";
import http from "./http";

const useRoutesQuery = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const getRoutes = (query) => {
    setLoading(true);
    setError(undefined);
    setData(undefined);
    http("/v2/routes", query)
      .then(data => { setData(data); setLoading(false); })
      .catch(error => { setError(error); setLoading(false); });
  };

  return [getRoutes, { error, loading, data }];
};

export default useRoutesQuery;
