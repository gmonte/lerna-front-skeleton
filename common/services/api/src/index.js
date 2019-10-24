import get from "lodash/get";
import http from "@lerna-front-skeleton/s-http";

async function api(options = {}) {
  try {
    const { auth, ...otherOptions } = options;
    let headers = {
      "Content-Type": "application/json",
      ...get(options, "headers", {})
    };

    const response = await http({
      baseURL: process.env.REACT_APP_API_URL,
      mode: "no-cors",
      ...otherOptions,
      headers
    });

    return response;
  } catch (e) {
    const error = get(e, "response.data.error", e);
    throw error;
  }
}

export default api;
