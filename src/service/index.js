import { API } from "./interceptor";

const fetcher = async (url, token) => {
  try {
    const res = await API.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { data: res.data.data, status: status };
  } catch (err) {
    throw { message: err.message, request: err.request };
  }
};

const postData = async (url, data, token) => {
  try {
    const res = await API.post(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const deleteData = async (url, token) => {
  try {
    const res = await API.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

export default { fetcher, postData, deleteData };
