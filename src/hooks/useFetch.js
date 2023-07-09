import { useEffect, useState } from "react";
import axiosApiInstance from "../services/axios/axiosApi";

export default function useFetchPagination() {
  const initialState = {
    loading: false,
    error: null,
    data: [],
    next: null,
    previous: null,
    count: 0,
  };
  const [state, setState] = useState(initialState);

  const fetch = async (url) => {
    try {
      setState({ ...state, loading: true });

      const response = await axiosApiInstance.get(url);

      setState({
        ...state,
        loading: false,
        data: response.data.results,
        next: response.data.next,
        previous: response.data.previous,
        count: response.data.count,
      });
    } catch (error) {
      setState({ ...state, loading: false, error: error.response.data });
    }
  };

  return { state, fetch };
}

export function useFetch(url) {
  const initialState = {
    loading: false,
    error: null,
    data: [],
  };
  const [state, setState] = useState(initialState);

  const fetch = async (url) => {
    try {
      setState({ ...state, loading: true });

      const response = await axiosApiInstance.get(url);

      setState({
        ...state,
        loading: false,
        data: response.data,
      });
    } catch (error) {
      setState({ ...state, loading: false, error: error.response.data });
    }
  };
  useEffect(() => {
    fetch(url);
  }, []);

  return { ...state, setState };
}
