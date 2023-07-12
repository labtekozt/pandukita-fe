import { useCallback, useRef, useState } from "react";
import BottomNavigation from "../component/BottomNavigation";
import TripBanner from "../disk/image/tripbanner.jpg";
import Illustration from "@kiwicom/orbit-components/lib/Illustration";
import { TextLink } from "@kiwicom/orbit-components/lib/";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useInfinityFetch";
import { humanizeDateTimeShort } from "../helpers/dateTime";
import Onboarding from "../component/OnboardingPage";

function TripPlannerHome() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { data, hasMore, loading } = useFetch("/planners", page, 4);
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
    <>
      {loading ? (
        <Onboarding />
      ) : (
        <div className="container">
          <div className="p-2 z-50 shadow-sm sticky top-0 bg-white">
            <div className="flex">
              <div className="grow h-6">
                <TextLink onClick={() => navigate("/")}>
                  <IconArrowNarrowLeft color="black" />
                </TextLink>
              </div>
              <div className="grow-0 mr-8">Rencana Perjalanan</div>
              <div className="grow h-1"></div>
            </div>
          </div>
          <div className="pb-[40%]">
            <div className="grid gap-4 grid-cols-2">
              <div className="mt-[45px] m-5">
                <span className="text-[24px] font-bold">
                  Atur
                  <br />
                  Perjalanan <br />
                  Disini
                </span>
              </div>

              <div className="m-2 mt-[30px]">
                <Illustration name="CompassPoints" size="medium" />
              </div>
            </div>
            <div className="flex mt-[10px] mb-[-165px]">
              <h1 className="ml-6 text-gray-10 font-bold text-xl">
                Perjalanan Kamu
              </h1>
              <div className="flex-grow"></div>
              <span className="text-[#00A388] mt-0.5 text-trip font-bold text-md mr-[30px]">
                <Link to="/planner/form">Tambah +</Link>
              </span>
            </div>
            <div className="m-6">
              {data && data.length > 0 ? (
                data.map((item, i) => {
                  if (data.length === i + 1) {
                    return (
                      <div className="mt-[175px]" ref={lastOrder} key={i}>
                        <Link to={`/planner/${item._id}`}>
                          <div className="trip-text mb-[-210px]">
                            <img
                              loading="lazy"
                              className="rounded-lg w-[100%] h-[145px] object-cover brightness-50"
                              src={TripBanner}
                            />
                          </div>
                          {/* pikirin buat gambarnya apa?? */}
                          <div
                            className="z-50 text-white p-6 brightness-100"
                            style={{ paddingBottom: "100%" }}
                          >
                            <div className="translate-y-16">
                            <h1 className="font-bold">{item.name}</h1>
                              {item.city}
                            {/* create format 6 - 7 Mei 2023 from item.startDate and item.endDate */}
                            <h1 className="text-md">
                              {/* check if data.startData and endDate same then just render startData */}
                              {item.startDate === item.endDate
                                ? humanizeDateTimeShort(item.startDate)
                                : `${
                                    humanizeDateTimeShort(item.startDate).split(
                                      " "
                                    )[0]
                                  } - ${humanizeDateTimeShort(item.endDate)}`}
                            </h1>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  } else {
                    return (
                      <div className="mt-[175px]" key={i}>
                        <Link to={`/planner/${item._id}`}>
                          <div className="mb-[-55px]">
                            <div className="trip-text mb-[-210px]">
                              <img
                                loading="lazy"
                                className="rounded-lg w-[100%] h-[145px] object-cover brightness-50"
                                width={"100%"}
                                src={TripBanner}
                              />
                            </div>
                            {/* pikirin buat gambarnya apa?? */}
                            <div className="text-white m-6 brightness-100">
                              <div className="translate-y-16">
                              <h1 className="font-bold">{item.name}</h1>
                              <h2>{item.city}</h2>
                              {/* create format 6 - 7 Mei 2023 from item.startDate and item.endDate */}
                              <h1 className="text-md">
                                {/* check if data.startData and endDate same then just render startData */}
                                {item.startDate === item.endDate
                                  ? humanizeDateTimeShort(item.startDate)
                                  : `${
                                      humanizeDateTimeShort(
                                        item.startDate
                                      ).split(" ")[0]
                                    } - ${humanizeDateTimeShort(item.endDate)}`}
                              </h1>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  }
                })
              ) : (
                <div className="flex flex-col mt-12 justify-center items-center h-[500px]">
                  {/* create ilustration */}

                  <div className="text-center">
                    <h1 className="text-2xl font-bold">Tidak ada rencana</h1>
                    <h2 className="text-md">
                      Buat rencana perjalananmu sekarang!
                    </h2>

                    <span className="text-[#00A388] mt-0.5 text-trip font-bold text-md">
                      <Link to="/planner/form">Tambah +</Link>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <BottomNavigation />
        </div>
      )}
    </>
  );
}

export default TripPlannerHome;
