import qs from "query-string";

const BASE_URL = "https://carris-metropolitana-api.herokuapp.com/api";

const http = (route, query) => {
  return fetch(`${BASE_URL}${route}?${qs.stringify(query)}`)
    .then(response => response.json());
};

export default http;
