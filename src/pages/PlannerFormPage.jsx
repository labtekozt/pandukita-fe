import { useContext, useState } from "react";
import { TextLink, Button } from "@kiwicom/orbit-components/lib/";
import {
  IconArrowNarrowLeft,
  IconRobot,
  IconPlus,
  IconCalendarEvent,
} from "@tabler/icons-react";
import DatePicker from "react-datepicker";
import kotaLampung from "../disk/data/kotaLampung.json";
import { useNavigate } from "react-router-dom";
import useFormData from "../hooks/useFormData";
import { GlobalContext } from "../store";
import axiosApiInstance from "../services/axios/axiosApi";
import LoadingOverlay from "../component/LoadingOverlay";

function PlannerFormPage() {
  const { dispatch } = useContext(GlobalContext);

  const { data, handleChange } = useFormData({
    name: "",
    city: kotaLampung[0],
    startDate: new Date(),
    endDate: new Date(),
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      if (data.name === "" || data.city === "") {
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            message: "Data tidak boleh kosong",
            type: "error",
          },
        });
        setLoading(false);
        return;
      }
      const response = await axiosApiInstance.post("/planners", data);

      dispatch({
        type: "SHOW_TOAST",
        payload: {
          message: "Berhasil Membuat Perjalanan",
          type: "success",
        },
      });
      setLoading(false);
      navigate(`/planner/` + response.data._id);
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
      setLoading(false);
    }
  };

  const handleSubmitAi = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (data.name === "" || data.city === "") {
        console.log("data tidak boleh kosong");
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            message: "Data tidak boleh kosong",
            type: "error",
          },
        });
        setLoading(false);
        return;
      }
      const response = await axiosApiInstance.post("/planners/ai", data);

      dispatch({
        type: "SHOW_TOAST",
        payload: {
          message: "Berhasil Membuat Perjalanan",
          type: "success",
        },
      });
      setLoading(false);
      navigate(`/planner/` + response.data._id);
    } catch (error) {
      if (error.name == "AxiosError") {
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            message: `Gagal Membuat Ai Planner, ${error.response.data.message}`,
            type: "error",
          },
        });
      }
      setLoading(false);
    }
  };

  return (
    <>
      <div className="containerWisata">
        {loading && <LoadingOverlay />}
        <div className="p-2 z-50 shadow-sm sticky top-0 bg-white">
          <div className="flex">
            <div className="grow h-6">
              <TextLink onClick={() => navigate("/planner")}>
                <IconArrowNarrowLeft color="black" />
              </TextLink>
            </div>
            <div className="grow-0 mr-8">Buat Perjalanan</div>
            <div className="grow h-1"></div>
          </div>
        </div>
        <div className="m-5 mb-[30%]">
          <div className="mt-10">
            <h1 className="text-md mb-1">Nama Perjalanan</h1>
            <div className="flex mt-1">
              <input
                style={{ padding: "10px" }}
                name="namaPerjalanan"
                className="w-full placeholder:text-slate-400 block bg-[#e8edf1] border border-none rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
                placeholder="Jalan Jalan ke Lampung..."
                type="text"
                id={"name"}
                value={data && data.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="mt-6">
            <h1 className="text-md mb-1">Mau Kemana?</h1>
            <div className="flex mt-1">
              {/* select input data from kotaLampung */}
              <select
                name="kota"
                className="w-full placeholder:text-slate-400 block bg-[#e8edf1] border border-none rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
                placeholder="Pilih Kota"
                type="text"
                id="city"
                value={data && data.city}
                onChange={(e) => handleChange(e)}
              >
                {kotaLampung.map((kota) => (
                  <option key={kota} value={kota}>
                    {kota}
                  </option>
                ))}
              </select>

              {/*<IconMap2 className="planner-icon mr-2 absolute ml-[350px] mt-2" />*/}
            </div>
          </div>

          <div className="flex pb-[200px] mt-6">
            <div>
              <label className="text-md">Dari Tanggal</label>
              <div className="flex mt-1">
                <DatePicker
                  className="date-plan p-3 bg-[#e8edf1] rounded-md w-[100%] focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
                  selected={data && data.startDate}
                  minDate={new Date()}
                  showYearDropdown
                  id="startDate"
                  dateFormat="dd/MM/yyyy"
                  onChange={(e) => {
                    // check if enddate is before startdate
                    handleChange({ target: { value: e, id: "startDate" } });
                    if (data && data.endDate < e) {
                      handleChange({
                        target: { value: e, id: "endDate" },
                      });
                    }
                  }}
                  value={data && data.startDate}
                />
                <IconCalendarEvent
                  color="black"
                  className="date-icon z-50 absolute ml-[150px] mt-2"
                />
              </div>
            </div>
            <div>
              <label className="text-md">Sampai Tanggal</label>
              <div className="flex mt-1 ml-2">
                <DatePicker
                  // enddata cant be before startdate
                  minDate={data && data.startDate}
                  className="date-plan p-3 bg-[#e8edf1] rounded-md w-[100%] focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
                  selected={data && data.endDate}
                  // set maxDate data.startDate + 7
                  maxDate={
                    data &&
                    new Date(
                      data.startDate.getFullYear(),
                      data.startDate.getMonth(),
                      data.startDate.getDate() + 7
                    )
                  }
                  showYearDropdown
                  dateFormat="dd/MM/yyyy"
                  id="endDate"
                  value={data && data.endDate}
                  onChange={(e) =>
                    handleChange({ target: { value: e, id: "endDate" } })
                  }
                />
                <IconCalendarEvent
                  color="black"
                  className="date-icon z-50 absolute ml-[150px] mt-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex p-4 z-50 bottom-0">
          <Button fullWidth="true" centered={true} onClick={handleSubmit}>
            Buat Rencana Baru
          </Button>
          <IconPlus
            color="white"
            className="planner-icon mr-2 absolute ml-[350px] mt-2"
          />
        </div>
        <div className="text-hr flex z-50 bottom-0">
          <p className="text-sm text-gray">Rencana otomatis dengan AI</p>
        </div>
        <div className="flex p-4  mt-[-20px] z-50 bottom-0">
          <Button
            type="primarySubtle"
            fullWidth="true"
            centered={true}
            onClick={handleSubmitAi}
          >
            Buat Rencana Otomatis
          </Button>
          <IconRobot
            color={"#00A388"}
            className="planner-icon mr-2 absolute ml-[350px] mt-2"
          />
        </div>
      </div>
    </>
  );
}

export default PlannerFormPage;
