import { useEffect, useMemo, useContext } from "react";
import { toast } from "react-toastify";
import service from "../service";
import useSWR from "swr";
import AuthContext from "../store/auth-context";

export default function useFetch() {
  const authCtx = useContext(AuthContext);

  const getNotes = (url) => {
    const { data, error, mutate } = useSWR([url, authCtx.token], service.fetcher);
    const hasError = useMemo(() => error?.message);

    useEffect(() => {
      if (hasError) {
        toast.error(error.message);
      }
    }, [hasError]);

    return { data, mutate };
  };

  async function addNotes({ title, body }) {
    const res = await service.postData(
      "/notes",
      JSON.stringify({ title, body }),
      authCtx.token
    );
    const data = await res.data;

    if (data.status !== "success") {
      toast.error(data.message);
      return { error: true, data: null };
    }

    toast.success(data.message);
    return { error: false, data: data.data };
  }

  async function deleteNote(id) {
    const res = await service.deleteData(`/notes/${id}`, authCtx.token);
    const data = await res.data;

    if (data.status !== "success") {
      toast.error(data.message);
      return { error: false, data: data.data };
    }

    toast.success(data.message);
    return { error: false, data: data.data };
  }

  async function login({ email, password }) {
    const res = await service.postData(
      "/login",
      JSON.stringify({ email, password })
    );
    const data = await res.data;

    if (data.status !== "success") {
      toast.error(data.message);
      return { error: true, data: null };
    }
    toast.success(data.message);

    return { error: false, data: data.data };
  }

  async function register({ name, email, password }) {
    const res = await service.postData(
      "/register",
      JSON.stringify({ name, email, password })
    );
    const data = await res.data;

    if (data.status !== "success") {
      toast.error(data.message);
      return { error: true, data: null };
    }
    toast.success(data.message);
    return { error: false, data: data.data };
  }

  return { getNotes, login, register, addNotes, deleteNote };
}
