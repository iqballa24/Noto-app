import { useEffect, useMemo } from "react";
import { toast } from "react-toastify";
import service from "../service";
import useSWR from "swr";

export default function useFetch() {
  const getNotes = (url) => {
    const { data, error } = useSWR(url, service.fetcher);
    const hasError = useMemo(() => error?.message);

    useEffect(() => {
      if (hasError) {
        toast.error(error.message);
      }
    }, [hasError]);

    return { data };
  };

  async function addNotes({ title, body }) {
    const res = await service.postData(
      "/notes",
      JSON.stringify({ title, body })
    );
    const data = await res.data;

    if (data.status !== "success") {
      toast.error(data.message);
      return { error: true, data: null };
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

  return { getNotes, login, register, addNotes };
}
