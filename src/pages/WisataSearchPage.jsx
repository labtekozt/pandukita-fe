import { TextLink } from "@kiwicom/orbit-components/lib/";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import useFecthData from "../hooks/useInfinityFetch";
import { useCallback, useRef, useState } from "react";
import SearchBar from "../component/SearchBarComponent";
import { Link, useNavigate } from "react-router-dom";
import NotFoundComponent from "../component/NotFoundComponent";
import LoadingComponent from "../component/loadingComponent";

function WisataSearch() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const { data, hasMore, loading, total, searchHandle } = useFecthData(
    `/destinations?perPage=10`,
    search,
    page
  );
  const observer = useRef(null);
  const lastOrder = useCallback(
    (node) => {
      // loading tidak di exe
      if (loading) return;
      // kalau udh pernah ada yang terakhir disconnect
      if (observer.current) observer.current.disconnect();
      // bikin baru observer baru
      observer.current = new IntersectionObserver((entries) => {
        // kalau ada observer terlihat maka fecth baru
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPageNumber) => prevPageNumber + 1);
        }
      });
      // kalo ada node inisialisasi dengan observer

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="container">
      <div className="p-2 z-50 shadow-sm sticky top-0 bg-white">
        <div className="flex">
          <div className="grow h-6">
            <TextLink href="/">
              <IconArrowNarrowLeft />
            </TextLink>
          </div>
          <div className="grow-0 mr-8">Cari Wisata</div>
          <div className="grow h-1"></div>
        </div>
      </div>

      <SearchBar
        search={search}
        handleSearch={handleSearch}
        searchHandle={searchHandle}
      />
      <div className="mb"></div>
      {data &&
        data.length > 0 &&
        data.map((item, i) => {
          if (data.length === i + 1) {
            return (
              <div
                key={i}
                onClick={() => navigate(`/destination/${item._id}`)}
                ref={lastOrder}
                className="m-5 h-[600px] relative hover:shadow-lg transition duration-100 ease-in-out hover:cursor-pointer"
              >
                <div className="mt-[2em]">
                  {/* link widh and hight fit with parent  */}
                  <div className="trip-text mb-[-200px]">
                    <img
                      className="rounded-lg"
                      width={800}
                      height={800}
                      src={item.image[0].url}
                    />
                  </div>
                  <div className="z-50 text-white m-6 mb-[1em] absolute ">
                    <h1 className="font-bold mb-[10px]">{item.name}</h1>
                    <h2 className="text-sm"> {item.address}</h2>

                    <h1 className="text-sm">
                      {item.description.length > 100
                        ? item.description.substring(0, 100) + "..."
                        : item.description}
                    </h1>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={i}
                onClick={() => navigate(`/destination/${item._id}`)}
                className="m-5 h-[600px] mb-12 relative  focus:outline-none hover:shadow-lg transition duration-100 ease-in-out hover:cursor-pointer"
              >
                <div className="mt-[2em]">
                  <div className="z-50 text-white m-6 mb-[1em] absolute  ">
                    <h1 className="font-bold mb-[10px]">{item.name}</h1>
                    <h2 className="text-sm"> {item.address}</h2>
                    <h1 className="text-sm">
                      {item.description.length > 100
                        ? item.description.substring(0, 100) + "..."
                        : item.description}
                    </h1>
                  </div>

                  {/*  above is on image */}
                  <div className="trip-text h-[600px] ">
                    <img
                      className="rounded-lg"
                      width={"100%"}
                      src={item.image[0].url}
                    />
                  </div>
                </div>
              </div>
            );
          }
        })}
      {loading && <LoadingComponent />}
      {data && data.length === 0 && (
        <NotFoundComponent text={`Tidak ada Wisata Untuk ${search}`} />
      )}
    </div>
  );
}

export default WisataSearch;
