import { useContext } from "react";
import { TextLink, Button, InputFile } from "@kiwicom/orbit-components/lib/";
import { IconArrowNarrowLeft, IconMap2, IconUser } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../store";
import axiosApiInstance from "../services/axios/axiosApi";
import useFormData from "../hooks/useFormData";
import { srcImage } from "../helpers/url";
import { setCredentials } from "../helpers/getCredentials";
import { removeCookie } from "../helpers/cookies";

function ProfileUpdate() {
  const { state, dispatch } = useContext(GlobalContext);

  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      if (data.username === "" || data.location === "") {
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            message: "Data tidak boleh kosong",
            type: "error",
          },
        });

        return;
      }
      //   check if data is not change
      if (
        data.username === state.user.username &&
        data.location === state.user.location &&
        data.profile === state.user.profile
      ) {
        return;
      }

      const response = await axiosApiInstance.put("/users", data);
      removeCookie("Keys");

      await setCredentials(response.data.newJwt);

      dispatch({
        type: "SHOW_TOAST",
        payload: {
          message: "Berhasil mengubah data",
          type: "success",
        },
      });
      dispatch({
        type: "SET_USER",
        payload: response.data.newUser,
      });

      navigate("/profile");
    } catch (error) {
      if (error.name == "AxiosError") {
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            message: `Update Profile gagal, ${error.response.data.message}`,
            type: "error",
          },
        });
      }
      if (error.status === 413) {
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            message: `Update Profile gagal, Tolong upload Dibawah 1.2MB`,
            type: "error",
          },
        });
      }
    }
    // check validate data
  };

  const handleBack = () => {
    navigate("/profile");
  };
  const { data, handleImage, handleChange } = useFormData({
    username: state.user.username,
    location: state.user.location,
    profile: state.user.profile,
  });
  return (
    <div className="containerWisata">
      <div className="p-2 z-50 shadow-sm sticky top-0 bg-white">
        <div className="flex">
          <div className="grow h-6">
            <TextLink onClick={handleBack}>
              <IconArrowNarrowLeft color="black" />
            </TextLink>
          </div>
          <div className="grow-0 mr-8">Profil</div>
          <div className="grow h-1"></div>
        </div>
      </div>

      <div className="m-5 pb-[60%]">
        <span className="text-[20px] font-bold">Ubah Profil</span>
        <div className="mt-5 mb-6">
          <div className="mt-5 mb-5">
            <h1 className="text-md mb-1 text-center">Foto Profil</h1>
            <div className="grid place-content-center">
              <img
                loading="lazy"
                //   center content
                className="rounded-full mb-2 object-cover object-center border border-black w-24 h-24 sm:w-32 sm:h-32"
                src={srcImage(data && data.profile)}
                alt="username photo"
                width="100"
                height="100"
              />
            </div>
            <div className="flex mt-1">
              <div className="w-full placeholder:text-sm placeholder:text-slate-400 block bg-[#e8edf1] border border-none rounded-sm shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md">
                <InputFile
                  placeholder="Add attachment"
                  buttonLabel=""
                  id="profile"
                  onChange={(event) => handleImage(event)}
                  required={true}
                />
              </div>
            </div>
          </div>
          <h1 className="text-md mb-1">Nama</h1>
          <div className="flex mt-1">
            <input
              value={data && data.username}
              onChange={(e) => handleChange(e)}
              style={{ padding: "10px", paddingLeft: "40px" }}
              name="tujuan"
              id={"username"}
              className="w-full placeholder:text-sm placeholder:text-slate-400 block bg-[#e8edf1] border border-none rounded-sm py-2 pl-2 focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
              placeholder={state && state.user.username}
              type="text"
            />
            <IconUser width={20} className="mr-2 absolute ml-3 mt-2" />
          </div>
        </div>
        <div className="mt-5 mb-6">
          <h1 className="text-md mb-1">Lokasi anda saat ini</h1>
          <div className="flex mt-1">
            <input
              style={{ padding: "10px" }}
              name="location"
              value={data && data.location}
              onChange={(e) => handleChange(e)}
              id="location"
              className="w-full placeholder:text-sm placeholder:text-slate-400 block bg-[#e8edf1] border border-none rounded-sm py-2 pl-2 focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
              placeholder={
                (state && state.user.location) || "Lokasi anda saat ini"
              }
              type="text"
            />
            <IconMap2 className="planner-icon2 mr-2 absolute ml-[350px] mt-2" />
          </div>
        </div>
      </div>
      <div className="flex p-4 z-50 bottom-0">
        <Button fullWidth="true" onClick={handleUpdate} centered={true}>
          Ubah
        </Button>
      </div>
    </div>
  );
}

export default ProfileUpdate;
