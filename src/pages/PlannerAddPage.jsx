import { useContext, useState } from "react";
import { Button } from "@kiwicom/orbit-components/lib/";
import {
  IconArrowNarrowLeft,
  IconMap2,
  IconPlus,
  IconCalendarEvent,
} from "@tabler/icons-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import DatePicker from "react-datepicker";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import axiosApiInstance from "../services/axios/axiosApi";
import { GlobalContext } from "../store";
import Onboarding from "../component/OnboardingPage";
import { PlanContext } from "../store/plan";

function PlannerAdd() {
  const navigate = useNavigate();
  const { dispatch } = useContext(GlobalContext);

  const id = useParams().id;
  const { loading, data, error } = useFetch(`/planners/${id}/short`);
  const location = useLocation();

  const latLong = [location.state?.latitude, location.state?.longtitude];
  const nameLoc = location.state?.name;
  const distination = location.state?.id;
  // console.log(data);
  const { plan, handleChange } = useContext(PlanContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (distination) {
        handleChange({ id: "distination", value: distination });
      }

      if (
        plan.distination === "" ||
        plan.activity === "" ||
        plan.date === "" ||
        plan.timeStart === "" ||
        plan.timeEnd === ""
      ) {
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            message: "Data tidak boleh kosong",
            type: "error",
          },
        });
      }

      const dataPost = {
        ...plan,
        time: `${plan.timeStart}-${plan.timeEnd}`,
      };
      await axiosApiInstance.post(`/planners/${id}/plans`, dataPost);
      dispatch({
        type: "SHOW_TOAST",
        payload: {
          message: "Berhasil Menambahkan Tujuan",
          type: "success",
        },
      });
      handleChange({ id: "RESET" });
      navigate(`/planner/${id}`);
    } catch (error) {
      if (error.name == "AxiosError") {
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            message: `Gagal Menambahkan Tujuan, ${error.response.data.message}`,
            type: "error",
          },
        });
      }
    }
  };

  return (
    <>
      {loading ? (
        <Onboarding />
      ) : (
        <div className="containerWisata">
          <div className="p-2 z-50 shadow-sm sticky top-0 bg-white">
            <div className="flex">
              <div className="grow h-6">
                <p onClick={() => navigate(`/planner/${id}`)}>
                  <IconArrowNarrowLeft color="black" />
                </p>
              </div>
              <div className="grow-0 mr-8">Tambah Tujuan</div>
              <div className="grow h-1"></div>
            </div>
          </div>

          <div className="m-5">
            <div className="mt-10 mb-6">
              <h1 className="text-md mb-1">Mau Kemana?</h1>
              <Link
                to={`/planner/add-destination`}
                state={{ city: data.city, id: id }}
              >
                <div className="flex mt-1">
                  <input
                    style={{ padding: "10px" }}
                    name="tujuan"
                    value={nameLoc ? nameLoc : ""}
                    readOnly
                    className="w-full placeholder:text-slate-400 block bg-[#e8edf1] border border-none rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
                    placeholder="Lampung Selatan..."
                    type="text"
                  />
                  <IconMap2 className="planner-icon mr-2 absolute ml-[350px] mt-2" />
                </div>
              </Link>
            </div>

            <div className="map mb-5 z-0">
              <MapContainer
                center={
                  latLong[0]
                    ? latLong
                    : [-4.888126195969592, 105.01644051043448]
                }
                zoom={7.5}
                scrollWheelZoom={true}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker
                  position={
                    latLong[0]
                      ? latLong
                      : [-4.888126195969592, 105.01644051043448]
                  }
                >
                  <Popup>{nameLoc ? nameLoc : "Lampung"}</Popup>
                </Marker>
              </MapContainer>
            </div>

            <div className="mt-3">
              <h1 className="mb-1">Catatan</h1>
              <textarea
                className="w-full h-[100px] bg-[#e8edf1] p-2 rounded-md border border-none shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
                placeholder="Catatan...."
                name="catatan"
                value={plan?.activity}
                id="activity"
                onChange={(e) => handleChange(e.target)}
              ></textarea>
            </div>

            <div className="mt-3">
              <label className="text-md">Tanggal Aktivitas</label>
              <div className="flex mt-1">
                {data && (
                  <DatePicker
                    className="date-picker p-3 bg-[#e8edf1] rounded-md w-[390px] focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
                    minDate={new Date(data.startDate)}
                    maxDate={new Date(data.endDate)}
                    selected={plan?.date}
                    dateFormat="dd/MM/yyyy"
                    yearDropdownItemNumber={15}
                    onChange={(date) =>
                      handleChange({ value: date, id: "date" })
                    }
                  />
                )}

                <IconCalendarEvent
                  color="black"
                  className="z-50 date-picker-icon absolute ml-[350px] mt-2"
                />
              </div>
            </div>

            <div className="flex pb-[50px] mt-4">
              <div className="mt-1 w-full">
                <label htmlFor="timeStart" className="text-md">
                  Waktu Mulai
                </label>
                <input
                  style={{ padding: "10px" }}
                  name="from"
                  value={plan.timeStart}
                  className="w-full placeholder:text-slate-400 block bg-[#e8edf1] border border-none rounded-md shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
                  type="time"
                  id="timeStart"
                  onChange={(e) => {
                    handleChange(e.target);
                    if (plan && plan.timeEnd && plan.timeEnd < e.target.value) {
                      handleChange({ value: e.target.value, id: "timeEnd" });
                    }
                  }}
                />
              </div>
              <div className="time mt-1 ml-4 mb-10 w-full">
                <label htmlFor="timeEnd" className="text-md">
                  Waktu Akhir
                </label>
                <input
                  style={{ padding: "10px" }}
                  name="to"
                  value={plan.timeEnd}
                  min={plan?.timeStart}
                  className="w-full placeholder:text-slate-400 block bg-[#e8edf1] border border-none rounded-md shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
                  type="time"
                  id="timeEnd"
                  onChange={(e) => handleChange(e.target)}
                />
              </div>
            </div>
          </div>

          <div className="flex p-4 z-50 bottom-0">
            <Button fullWidth="true" centered={true} onClick={handleSubmit}>
              Tambah
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

export default PlannerAdd;
