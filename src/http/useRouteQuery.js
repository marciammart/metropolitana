import { useState } from "react";
import http from "./http";

const useRouteQuery = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const getRoute = (routeID) => {
    setLoading(true);
    setError(undefined);
    setData(undefined);
    http(`/v2/directions/${routeID}`)
      .then(data => { setData(data); setLoading(false); })
      .catch(error => { setError(error); setLoading(false); });
  };

  return [getRoute, { error, loading, data }];
};

export default useRouteQuery;
