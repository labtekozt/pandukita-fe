import { useEffect, useState } from "react";
import axiosApiInstance from "../services/axios/axiosApi";

export default function FecthDataInfinity(url, search, page) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [hasMore, setHasMore] = useState(false);
  const [total, setTotal] = useState({
    all: 0,
    currentPage: 0,
  });

  const fecthApi = async (url, newSearch) => {
    if (newSearch) {
      setData({});
      setHasMore(false);
      setTotal({
        all: 0,
        currentPage: 0,
      });
    }
    setLoading(true);
    try {
      const res = await axiosApiInstance.get(url);
      setLoading(false);

      setHasMore(res.data.HasNextPage);
      setTotal({
        all: res.data.totalPages * res.data.itemsPerPage,
        currentPage: page * res.data.itemsPerPage,
      });
      setData((prev) => {
        // check if res.data.data same as prev
        const data = JSON.stringify(prev) === "{}" ? [] : prev;
        if (
          !newSearch &&
          JSON.stringify(data) !== JSON.stringify(res.data.data)
        ) {
          return [...data, ...res.data.data];
        } else {
          return [...res.data.data];
        }
      });
    } catch (error) {
      setLoading(false);
      setHasMore(false);
    }
  };

  const searchHandle = () => {
    fecthApi(url + `&page=${page}&q=${search}`, true);
  };

  useEffect(() => {
    fecthApi(url + `&page=${page}&q=${search}`, false);
  }, [page]);

  return { data, hasMore, loading, total, searchHandle };
}

export function useFetch(url, page, perPage = 10) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [hasMore, setHasMore] = useState(false);
  const [total, setTotal] = useState({
    all: 0,
    currentPage: 0,
  });

  const fecthApi = async (url) => {
    setLoading(true);
    try {
      const res = await axiosApiInstance.get(url);
      setLoading(false);

      setHasMore(res.data.HasNextPage);
      setTotal({
        all: res.data.totalPages * res.data.itemsPerPage,
        currentPage: page * res.data.itemsPerPage,
      });
      setData((prev) => {
        const data = JSON.stringify(prev) === "{}" ? [] : prev;
        if (JSON.stringify(data) === JSON.stringify(res.data.data)) return data;

        return [...data, ...res.data.data];
      });
    } catch (error) {
      setLoading(false);
      setHasMore(false);
    }
  };

  useEffect(() => {
    fecthApi(url + `?page=${page}&perPage=${perPage}`);
  }, [page]);

  return { data, hasMore, loading, total };
}
