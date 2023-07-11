import {
  Button,
  Tile,
  Text,
  TimelineStep,
  Timeline,
} from "@kiwicom/orbit-components/lib/";
import {
  IconArrowNarrowLeft,
  IconChevronRight,
  IconCalendarEvent,
  IconMap,
  IconPencil,
  IconMapPinSearch,
  IconTrash,
} from "@tabler/icons-react";
import { Illustration } from "@kiwicom/orbit-components";
import { useFetch } from "../hooks/useFetch";
import { Link, useNavigate, useParams } from "react-router-dom";
import Onboarding from "../component/OnboardingPage";
import { humanizeDate } from "../helpers/dateTime";
import axiosApiInstance from "../services/axios/axiosApi";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../store";

function PlannerAi() {
  const { dispatch } = useContext(GlobalContext);
  const id = useParams().id;
  const [groupData, setGroupData] = useState({});
  const { loading, data, error, setState } = useFetch(`/planners/${id}`);

  const navigate = useNavigate();

  const handleDelete = async (planId) => {
    try {
      const res = await axiosApiInstance.delete(
        `/planners/${id}/plans/${planId}`
      );
      setState((prev) => ({
        ...prev,
        data: res.data,
      }));
      dispatch({
        type: "SHOW_TOAST",
        payload: {
          message: "Berhasil Menghapus Rencana Perjalanan",
          type: "success",
        },
      });
    } catch (error) {
      if (error.name == "AxiosError") {
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            message: `Gagal Mendaftar Menjadi Pemandu Wisata, ${error.response.data.message}`,
            type: "error",
          },
        });
      }
    }
  };
  const arrayDate = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const dateArray = [];
    if (humanizeDate(start) === humanizeDate(end)) {
      const newDate = new Date(start);
      newDate.setDate(newDate.getDate() + 0);
      dateArray.push(newDate);
      return dateArray;
    }

    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    for (let i = 0; i <= diffDays; i++) {
      const newDate = new Date(start);
      newDate.setDate(newDate.getDate() + i);
      dateArray.push(newDate);
    }
    return dateArray;
  };

  // group data.plan by date
  const groupByDate = (data) => {
    const Datedata = {};
    const dateArray = arrayDate(data.startDate, data.endDate);
    dateArray.forEach((date) => {
      Datedata[humanizeDate(date)] =
        data.plan?.length > 0
          ? data.plan.filter((e) => humanizeDate(e.date) === humanizeDate(date))
          : [];
      // sort by time string asc
      Datedata[humanizeDate(date)].sort((a, b) => {
        // 10:10-10:20 a , 10:20-10:30 b
        const aTime = a.time.split("-");
        const bTime = b.time.split("-");
        // 10:10 aTime[0] , 10:20 bTime[0]
        // compare time string
        if (aTime[0] < bTime[0]) {
          return -1;
        }
        if (aTime[0] > bTime[0]) {
          return 1;
        }
      });
    });

    return Datedata;
  };

  useEffect(() => {
    setGroupData(groupByDate(data));
  }, [data]);

  if (!loading && error?.status === 404) {
    navigate("/404");
  }

  return (
    <>
      {loading ? (
        <Onboarding />
      ) : (
        <div className="containerInfo">
          <div className="p-2 z-50 shadow-sm sticky top-0 bg-white">
            <div className="flex">
              <div className="grow h-6 cursor-pointer">
                <div onClick={() => navigate("/planner")}>
                  <IconArrowNarrowLeft color="black" />
                </div>
              </div>
              <div className="grow-0 mr-8">Rencana Perjalanan</div>
              <div className="grow h-1"></div>
            </div>
          </div>

          <div className="pb-[5%]">
            <div className="grid gap-4 grid-cols-2">
              <div className="mt-[55px] m-5">
                <span className="text-[23px] font-bold">
                  {data && data.name}
                </span>
              </div>
              <div className="img-guide m-4 mt-[25px]">
                <Illustration name="CompassEmailCaptain" size="medium" />
              </div>
            </div>

            <div className="flex mt-[10px] mb-[-165px]">
              <h1 className="ml-6 text-gray-10 font-bold text-xl">
                <IconCalendarEvent width={25} color="#444444" />
              </h1>
              <span className="text-[#444444] mt-0.5 text-trip text-md ml-2">
                {/* check if data.startData and endDate same then just render startData */}
                {data && humanizeDate(data.startDate)}
                {data &&
                  humanizeDate(data.startDate) !==
                    humanizeDate(data.endDate) && (
                    <> - {humanizeDate(data.endDate)}</>
                  )}
              </span>
            </div>

            <div className="flex m-6 mb-2 mt-[180px] p-1 w-[150px]">
              <span className="mt-1 ml-2 absolute z-50">
                <IconMap width={20} color="white" className="z-50" />
              </span>
              <Button
                size="small"
                onClick={() =>
                  navigate(`/planner/${id}/map`, { state: { data } })
                }
              >
                <span className="pl-5 mt-2">Lihat di peta</span>
              </Button>
            </div>

            <div className="m-6">
              {data &&
                Object.keys(groupData).map((date, i) => (
                  <div className="mt-[20px]" key={i}>
                    <Tile
                      title={date}
                      noPadding={true}
                      expandable={true}
                      initialExpanded={true}
                      description=""
                      key={date}
                    >
                      {groupData[date].length > 0 ? (
                        <div className="pb-10">
                          <div className="m-3">
                            <Timeline direction="column">
                              {groupData[date].map((plan, i) => (
                                <TimelineStep type="secondary" key={i}>
                                  <Text
                                    className="text-[#00A388]"
                                    size="normal"
                                    weight="bold"
                                  >
                                    {plan.distination.name}
                                  </Text>
                                  <div className="mt-2">
                                    <Text size="small" weight="bold">
                                      {plan.time}
                                    </Text>
                                  </div>
                                  <div className="img-box2 mt-3">
                                    <img
                                      loading="lazy"
                                      src={plan.distination.image[0].url}
                                      className="rounded-lg relative w-[100%] object-cover"
                                    />
                                  </div>
                                  <div className="mt-3">
                                    <Text size="small">{plan.activity}</Text>
                                  </div>
                                  <div className="flex mb-3 mt-4">
                                    <Link
                                      className="hover:pointer-cursor"
                                      to={`/planner/${id}/plan/${plan._id}/update`}
                                    >
                                      <div className="flex mb-3">
                                        <Button
                                          type="primarySubtle"
                                          size="small"
                                          submit={true}
                                        >
                                          <span className="pl-5">Edit</span>
                                        </Button>
                                        <span className="ml-2 mt-1 absolute">
                                          <IconPencil
                                            width={19}
                                            color="#00A388"
                                          />
                                        </span>
                                      </div>
                                    </Link>
                                    <div className="flex ml-1">
                                      <Button
                                        type="criticalSubtle"
                                        size="small"
                                        submit={true}
                                        onClick={() => handleDelete(plan._id)}
                                      >
                                        <span className="pl-5">Hapus</span>
                                      </Button>
                                      <span className="ml-2 mt-1 absolute">
                                        <IconTrash width={19} color="red" />
                                      </span>
                                    </div>
                                  </div>
                                </TimelineStep>
                              ))}

                              <TimelineStep type="secondary">
                                <Link
                                  to={`/planner/${id}/add`}
                                  state={{ date: date }}
                                >
                                  <span className="text-[#00A388]">
                                    + Tambah Wisata
                                  </span>
                                </Link>
                              </TimelineStep>
                            </Timeline>
                          </div>
                        </div>
                      ) : (
                        <div className="pb-10" key={i}>
                          <Link
                            className="hover:pointer-cursor"
                            to={`/planner/${id}/add`}
                            state={{ date: date }}
                          >
                            <div className="p-5 flex items-center justify-center">
                              <div className="img-guide">
                                <Illustration
                                  name="CompassTravelPlan"
                                  size="small"
                                />
                              </div>
                            </div>
                            <div className="flex items-center justify-center p-1">
                              <span className="align-center">
                                Belum ada tempatnya nih, ayo <br /> tambah
                                rencanamu!
                              </span>
                            </div>
                            <div className="flex items-center justify-center p-1">
                              <Button size="small" type="primarySubtle">
                                <span className="pl-6">Tambah Tujuan</span>
                              </Button>
                              <span className="mr-[27%] icon-add-plan m-2 absolute">
                                <IconMapPinSearch width={19} color="#00A388" />
                              </span>
                            </div>
                          </Link>
                        </div>
                      )}
                    </Tile>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex p-4 z-50 bottom-0">
            <Button
              fullWidth="true"
              submit={true}
              centered={true}
              onClick={() => navigate(`/planner/`)}
            >
              Simpan Rencana Perjalananmu
            </Button>
            <IconChevronRight
              color="white"
              className="planner-ai mr-2 absolute ml-[384px] mt-[10px]"
            />
          </div>
          <div className="mt-[-15px] p-4 z-50 bottom-0">
            <Button
              type="primarySubtle"
              fullWidth="true"
              submit={true}
              centered={true}
            >
              Sewa Pemandu Wisata
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default PlannerAi;
