import { API } from "./interceptor";

const fetcher = async (url) => {
  try {
    const res = await API.get(url);
    return { data: res.data.data, status: status };
  } catch (err) {
    throw { message: err.message, request: err.request };
  }
};

const postData = async (url, data) => {
  try {
    const res = await API.post(url, data);
    return res;
  } catch (err) {
    return err.response;
  }
};

export default { fetcher, postData };
