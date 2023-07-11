import React, { useContext, useEffect, useState } from "react";
import { TextLink, Button } from "@kiwicom/orbit-components/lib/";
import {
  IconArrowNarrowLeft,
  IconMap2,
  IconPlus,
  IconCalendarEvent,
} from "@tabler/icons-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { GlobalContext } from "../store";
import axiosApiInstance from "../services/axios/axiosApi";
import Onboarding from "../component/OnboardingPage";
import LoadingOverlayComponent from "../component/LoadingOverlay";

function PlannerUpdate() {
  const id = useParams().id;
  const planId = useParams().planId;
  const { dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();
  const { loading, error, data } = useFetch(`/planners/${id}/plans/${planId}`);
  const [state, setState] = useState({
    distination: data.plan && data.plan[0].distination,
    activity: data.plan && data.plan[0].activity,
    date: data.plan && data.plan[0].date,
    startTime: data.plan && data.plan[0].time.split("-")[0],
    endTime: data.plan && data.plan[0].time.split("-")[1],
  });
  const [loadingUpload, setLoadingUpload] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.id]: e.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingUpload(true);
    try {
      // check if data is empty
      if (
        state.activity === "" ||
        state.date === "" ||
        state.startTime === "" ||
        state.endTime === ""
      ) {
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            message: "Data tidak boleh kosong",
            type: "error",
          },
        });
        setLoadingUpload(false);
        return;
      }

      const dataPost = {
        ...state,
        time: `${
          state.startTime || (data.plan && data.plan[0].time.split("-")[0])
        }-${state.endTime || (data.plan && data.plan[0].time.split("-")[1])}`,
      };
      await axiosApiInstance.put(`/planners/${id}/plans/${planId}`, dataPost);
      dispatch({
        type: "SHOW_TOAST",
        payload: {
          message: "Berhasil mengubah rencana",
          type: "success",
        },
      });
      setLoadingUpload(false);
      window.location.href = `/planner/${id}`;
    } catch (error) {
      if (error.name == "AxiosError") {
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            message: `Login Gagal.., ${error.response.data.message}`,
            type: "error",
          },
        });
        setLoadingUpload(false);
      }
    }
  };

  if (!loading && error) {
    if (error.response.status === 404) {
      navigate("/404");
    }
    if (error.response.status === 401) {
      dispatch({
        type: "SHOW_TOAST",
        payload: {
          message: `Anda tidak memiliki akses,${error.response.data.message}`,
          type: "error",
        },
      });

      navigate("/");
    }
  }
  useEffect(() => {
    setState({
      activity: data.plan && data.plan[0].activity,
      date: data.plan && data.plan[0].date,
      startTime: data.plan && data.plan[0].time.split("-")[0],
      endTime: data.plan && data.plan[0].time.split("-")[1],
      distination: data.plan && data.plan[0].distination,
    });
  }, [data]);

  return (
    <>
      {loadingUpload && <LoadingOverlayComponent />}
      {loading ? (
        <Onboarding />
      ) : (
        <div className="containerWisata">
          <div className="p-2 z-50 shadow-sm sticky top-0 bg-white">
            <div className="flex">
              <div className="grow h-6">
                <TextLink href="/planner">
                  <IconArrowNarrowLeft color="black" />
                </TextLink>
              </div>
              <div className="grow-0 mr-8">Edit Rencana</div>
              <div className="grow h-1"></div>
            </div>
          </div>

          <div className="m-5">
            <div className="mt-10 mb-6">
              <h1 className="text-md mb-1">Mau Kemana?</h1>
              <div className="flex mt-1">
                <input
                  style={{ padding: "10px" }}
                  name="tujuan"
                  className="w-full placeholder:text-slate-400 block bg-[#e8edf1] border border-none rounded-sm py-2 pl-2 focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
                  placeholder="Lampung Selatan..."
                  type="text"
                  value={data.plan && data?.plan[0]?.distination?.name}
                  readOnly
                />
                <IconMap2 className="planner-icon mr-2 absolute ml-[350px] mt-2" />
              </div>
            </div>

            <div className="map mb-5 z-0">
              <MapContainer
                center={[
                  data.plan ? data.plan[0].distination.latitude : 0,
                  data.plan ? data.plan[0].distination.longtitude : 0,
                ]}
                zoom={7.5}
                scrollWheelZoom={true}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker
                  position={[
                    data.plan ? data.plan[0].distination.latitude : 0,
                    data.plan ? data.plan[0].distination.longtitude : 0,
                  ]}
                >
                  <Popup>
                    <div className="flex flex-col p-2 ">
                      <span className="text-[20px] font-bold mb-2">
                        {data.plan && data.plan[0].distination.name}
                      </span>

                      <Button
                        centered={true}
                        href={`/destination/${
                          data.plan && data?.plan[0]?.distination?._id
                        }`}
                      >
                        Lihat Wisata
                      </Button>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            <div className="mt-3">
              <h1 className="mb-1">Catatan</h1>
              <textarea
                className="w-full h-[100px] bg-[#e8edf1] p-2 rounded-sm border border-none shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
                placeholder="Catatan...."
                name="catatan"
                id="activity"
                value={state && state.activity}
                onChange={(e) => handleChange(e.target)}
              ></textarea>
            </div>

            <div className="mt-3">
              <label className="text-md">Tanggal Aktivitas</label>
              <div className="flex mt-1">
                {state.date && (
                  <DatePicker
                    className="date-picker p-3 bg-[#e8edf1] rounded-sm w-[390px] focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
                    minDate={new Date(data.startDate)}
                    maxDate={new Date(data.endDate)}
                    showYearDropdown
                    selected={new Date(state?.date)}
                    dateFormat={"dd-MM-yyyy"}
                    onChange={(date) =>
                      setState((prevState) => ({
                        ...prevState,
                        date: date,
                      }))
                    }
                  />
                )}
                <IconCalendarEvent
                  color="black"
                  className="date-picker-icon z-50 absolute ml-[350px] mt-2"
                />
              </div>
            </div>
            <div className="flex mb-[30%] mt-4">
              <div className="mt-1 w-full">
                <label className="text-md">Waktu Mulai</label>
                {(state.startTime ||
                  (data?.plan && data.plan[0].time.split("-")[0])) && (
                  <input
                    style={{ padding: "10px" }}
                    name="from"
                    className="w-full placeholder:text-slate-400 block bg-[#e8edf1] border border-none rounded-sm shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
                    type="time"
                    value={state.startTime || data?.plan[0].time.split("-")[0]}
                    id="startTime"
                    onChange={(e) => {
                      if (!e.target.value) return;
                      handleChange(e.target);
                      if (state.timeEnd && state.timeEnd < e.target.value) {
                        handleChange({
                          value: e.target.value,
                          id: "timeEnd",
                        });
                      }
                    }}
                  />
                )}
              </div>
              <div className="time mt-1 ml-4 mb-10 w-full">
                <label className="text-md">Waktu Akhir</label>
                {(state.endTime ||
                  (data?.plan && data.plan[0].time.split("-")[1])) && (
                  <input
                    style={{ padding: "10px" }}
                    name="to"
                    className="w-full placeholder:text-slate-400 block bg-[#e8edf1] border border-none rounded-sm shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
                    type="time"
                    value={state.endTime || data?.plan[0].time.split("-")[1]}
                    min={state?.timeStart}
                    id="endTime"
                    onChange={(e) => {
                      if (!e.target.value) return;

                      handleChange(e.target);
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="flex p-4 z-50 bottom-0">
            <Button
              fullWidth="true"
              submit={true}
              centered={true}
              onClick={handleSubmit}
            >
              Edit
            </Button>
            <IconPlus
              color="white"
              className="planner-icon mr-2 absolute ml-[350px] mt-2"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default PlannerUpdate;
