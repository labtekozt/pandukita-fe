import { useContext, useState } from "react";
import { TextLink } from "@kiwicom/orbit-components/lib/";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import StepperBtn from "../component/StepperComponent/StepperBtn";
import Informasi from "../component/StepperComponent/Informasi";
import Stepper from "../component/StepperComponent/Stepper";
import Lokasi from "../component/StepperComponent/Lokasi";
import { StepperContext } from "../component/StepperComponent/StepperContext";
import useFormData from "../hooks/useFormData";
import { GlobalContext } from "../store/index";
import axiosApiInstance from "../services/axios/axiosApi";
import { useNavigate } from "react-router-dom";
import LoadingOverlayComponent from "../component/LoadingOverlay";

function DestinationAdd() {
  const navigate = useNavigate();
  const { dispatch } = useContext(GlobalContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { data, handleImageArray, handleChange, handleChangeBulk } =
    useFormData({
      name: "",
      description: "",
      image: [],
      category: [],
      address: "",
      city: "",
      province: "",
      latitude: "",
      longtitude: "",
      status: "open",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (data.image.length == 0) {
      setLoading(false);
      return dispatch({
        type: "SHOW_TOAST",
        payload: { message: "Gambar tidak boleh kosong", type: "error" },
      });
    }
    if (data.category.length == 0) {
      setLoading(false);
      return dispatch({
        type: "SHOW_TOAST",
        payload: { message: "Kategori tidak boleh kosong", type: "error" },
      });
    }
    if (data.name == "") {
      setLoading(false);
      return dispatch({
        type: "SHOW_TOAST",
        payload: { message: "Nama tidak boleh kosong", type: "error" },
      });
    }
    if (data.description == "") {
      setLoading(false);
      return dispatch({
        type: "SHOW_TOAST",
        payload: { message: "Deskripsi tidak boleh kosong", type: "error" },
      });
    }
    if (data.address == "") {
      setLoading(false);
      return dispatch({
        type: "SHOW_TOAST",
        payload: { message: "Alamat tidak boleh kosong", type: "error" },
      });
    }
    if (data.city == "") {
      setLoading(false);
      return dispatch({
        type: "SHOW_TOAST",
        payload: { message: "Kota tidak boleh kosong", type: "error" },
      });
    }
    if (data.province == "") {
      setLoading(false);
      return dispatch({
        type: "SHOW_TOAST",
        payload: { message: "Provinsi tidak boleh kosong", type: "error" },
      });
    }
    if (data.latitude == "") {
      setLoading(false);
      return dispatch({
        type: "SHOW_TOAST",
        payload: { message: "Latitude tidak boleh kosong", type: "error" },
      });
    }
    if (data.longtitude == "") {
      setLoading(false);
      return dispatch({
        type: "SHOW_TOAST",
        payload: { message: "Longitude tidak boleh kosong", type: "error" },
      });
    }

    try {
      const res = await axiosApiInstance.post("/destinations", data);
      dispatch({
        type: "SHOW_TOAST",
        payload: { message: "Berhasil Membuat Wisata", type: "success" },
      });
      setLoading(false);
      navigate(`/destination/${res.data._id}`);
    } catch (error) {
      setLoading(false);
      if (error.name == "AxiosError") {
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            message: `Gagal Membuat Wisata ${error.response.data.message}`,
            type: "error",
          },
        });
      }
    }
  };

  const steps = ["Informasi", "Lokasi"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Informasi />;
      case 2:
        return <Lokasi />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    if (data.name == "")
      return dispatch({
        type: "SHOW_TOAST",
        payload: { message: "Nama tidak boleh kosong", type: "error" },
      });
    if (data.description == "")
      return dispatch({
        type: "SHOW_TOAST",
        payload: { message: "Deskripsi tidak boleh kosong", type: "error" },
      });
    if (data.image.length <= 0)
      return dispatch({
        type: "SHOW_TOAST",
        payload: { message: "Alamat tidak boleh kosong", type: "error" },
      });

    direction == "next" ? newStep++ : newStep--;
    //check step
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div>
      <div className="sticky top-0">
        <div className="p-2 z-50 shadow-sm bg-white">
          <div className="flex">
            <div className="grow h-6">
              <TextLink href="/">
                <IconArrowNarrowLeft color="black" />
              </TextLink>
            </div>
            <div className="grow-0 mr-8">Tambah Wisata</div>
            <div className="grow h-1"></div>
          </div>
        </div>

        {/* Stepper */}
        <div>
          <Stepper steps={steps} currentStep={currentStep} />
        </div>
      </div>

      <div className="containerWisata mt-[-20px] pt-5">
        {/* Content */}
        {loading && <LoadingOverlayComponent />}

        <div>
          <StepperContext.Provider
            value={{
              data,
              handleImageArray,
              handleChange,
              currentStep,
              setCurrentStep,
              handleChangeBulk,
            }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>

        {/* Button Step */}
        <div className="p-4 z-50 bottom-0 mt-[-80px]">
          <StepperBtn
            data={data}
            handleSubmit={handleSubmit}
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        </div>
      </div>
    </div>
  );
}

export default DestinationAdd;
