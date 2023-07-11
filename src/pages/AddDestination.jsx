import { IconArrowNarrowLeft, IconMap2 } from "@tabler/icons-react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useInfinityFetch";
import { useCallback, useContext, useRef, useState } from "react";
import NotFoundComponent from "../component/NotFoundComponent";
import LoadingComponent from "../component/loadingComponent";
import { PlanContext } from "../store/plan";
export default function AddDestination() {
  const location = useLocation();
  const id = location.state?.id;
  const city = location.state?.city;
  const prevPath = location.state?.prevPath;
  if (id === undefined || city === undefined) {
    return <Navigate to="/" />;
  }
  const navigate = useNavigate();

  const { plan, handleChange } = useContext(PlanContext);
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [timer, setTimer] = useState(null);

  const { data, hasMore, loading, searchHandle } = useFetch(
    `/destinations/short?city=${city}`,
    inputValue,
    page
  );
  // get previus page url

  // create search that search when user not type for 2 second
  const inputChanged = (e) => {
    setInputValue(e.target.value);
    setPage(1);

    clearTimeout(timer);

    const newTimer = setTimeout(() => {
      searchHandle();
    }, 750);

    setTimer(newTimer);
  };

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
    <div className="containerWisata">
      <div className="p-2 z-50 shadow-sm sticky top-0 bg-white">
        <div className="flex">
          <div className="grow h-6 cursor-pointer">
            <p onClick={() => navigate(`/planner/${id}`)}>
              <IconArrowNarrowLeft color="black" />
            </p>
          </div>
          <div className="grow-0 mr-8">Cari Aktivitas Menarik Di {city}</div>
          <div className="grow h-1"></div>
        </div>
      </div>

      <div className="m-5 pb-1">
        <div className="mt-10 mb-6">
          <h1 className="text-md mb-1">Mau Kemana?</h1>
          <div className="flex mt-1">
            <input
              style={{ padding: "10px" }}
              name="tujuan"
              className="w-full placeholder:text-slate-400 block bg-[#e8edf1] border border-none rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
              placeholder="Teluk Hantu...."
              onChange={inputChanged}
              value={inputValue}
              type="text"
            />
            <IconMap2 className="planner-icon2 mr-2 absolute ml-[350px] mt-2" />
          </div>
        </div>
      </div>
      {/* hasil pencarian */}

      <div className="pb-10">
        {data &&
          data.length > 0 &&
          data.map((item, i) => {
            if (data.length === i + 1 && data.length > 4) {
              return (
                <div
                  key={i}
                  onClick={() => {
                    handleChange({ id: "distination", value: item._id });
                    //   get back to previus page
                    prevPath
                      ? navigate(prevPath, {
                          state: {
                            id: item._id,
                            latitude: item.latitude,
                            longtitude: item.longtitude,
                            name: item.name,
                          },
                        })
                      : navigate(`/planner/${id}/add`, {
                          state: {
                            id: item._id,
                            latitude: item.latitude,
                            longtitude: item.longtitude,
                            name: item.name,
                          },
                        });
                  }}
                  ref={lastOrder}
                  className="m-5 flex relative focus:outline-none hover:shadow-lg transition duration-100 ease-in-out hover:cursor-pointer"
                >
                  <div className="trip-text flex-1 relative ">
                    <div className="img-box2">
                      <img
                        loading="lazy"
                        className="rounded-lg  w-128"
                        src={item.image[0].url}
                      />
                    </div>
                    {/* center */}
                    <div
                      className="absolute bottom-6 px-4 py-3 bg-gray-500/50 w-full text-white "
                      style={{
                        backgroundColor: "rgba(0,0,0,0.2)",
                        borderRadius: "10px",
                        padding: "15px",
                        width: "100%",
                        textAlign: "center",
                      }}
                    >
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
                  onClick={() => {
                    handleChange({ id: "distination", value: item._id });
                    //   get back to previus page
                    prevPath
                      ? navigate(prevPath, {
                          state: {
                            id: item._id,
                            latitude: item.latitude,
                            longtitude: item.longtitude,
                            name: item.name,
                          },
                        })
                      : navigate(`/planner/${id}/add`, {
                          state: {
                            id: item._id,
                            latitude: item.latitude,
                            longtitude: item.longtitude,
                            name: item.name,
                          },
                        });
                  }}
                  className="m-5 flex relative focus:outline-none hover:shadow-lg transition duration-100 ease-in-out hover:cursor-pointer"
                >
                  <div className="flex-1 relative pb-100">
                    <div className="img-box2">
                      <img
                        loading="lazy"
                        className="rounded-lg w-[100%]"
                        src={item.image[0].url}
                      />
                    </div>
                    {/* center */}
                    <div
                      className="absolute bottom-6 px-4 py-3 bg-gray-500/50 w-full text-white "
                      style={{
                        backgroundColor: "rgba(0,0,0,0.3)",
                        borderRadius: "10px",
                        padding: "15px",
                        width: "100%",
                        textAlign: "center",
                      }}
                    >
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
            }
          })}
        {loading && <LoadingComponent />}
        {data && data.length === 0 && (
          <div className="grid place-content-center">
            <NotFoundComponent text={`Tidak ada Wisata`} />
          </div>
        )}
      </div>
    </div>
  );
}
