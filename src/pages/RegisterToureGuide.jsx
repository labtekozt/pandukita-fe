import React, { useContext } from "react";
import { TextLink, Button, InputFile } from "@kiwicom/orbit-components/lib/";
import { IconArrowNarrowLeft, IconMap2, IconUser } from "@tabler/icons-react";
import useFormData from "../hooks/useFormData";
import axiosApiInstance from "../services/axios/axiosApi";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../store";
import { setCredentials } from "../helpers/setCredentials";
import { removeCookie } from "../helpers/cookies";
import { srcImage } from "../helpers/url";
import items from "../disk/data/kotaLampung.json";
function RegisterTourGuide() {
  const navigate = useNavigate();
  const { dispatch } = useContext(GlobalContext);
  const { data, handleImage, handleChange } = useFormData({
    profile: "",
    username: "",
    location: "",
    description: "",
  });

  const handleSubmit = async (e) => {
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
      const response = await axiosApiInstance.post("/users/tour-guide", data);
      removeCookie("Keys");
      await setCredentials(response.data.newJwt);

      dispatch({
        type: "SHOW_TOAST",
        payload: {
          message: "Berhasil Mendaftar Menjadi Pemandu Wisata",
          type: "success",
        },
      });
      dispatch({
        type: "SET_USER",
        payload: response.data.newUser,
      });

      navigate("/profile/");
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

  return (
    <div className="containerWisata">
      <div className="p-2 z-50 shadow-sm sticky top-0 bg-white">
        <div className="flex">
          <div className="grow h-6">
            <TextLink onClick={() => navigate("/profile")}>
              <IconArrowNarrowLeft color="black" />
            </TextLink>
          </div>
          <div className="grow-0 mr-8">Profil</div>
          <div className="grow h-1"></div>
        </div>
      </div>

      <div className="m-5">
        <span className="text-[20px] font-bold">
          Bergabung Menjadi Pemandu <br /> Wisata
        </span>
        <div className="mt-5 mb-5">
          <h1 className="text-md mb-1 text-center mb-3">Foto Profil</h1>
          {data && data.profile !== "" && (
            <div className="grid place-content-center mb-5">
              <img
                loading="lazy"
                //   center content
                className="rounded-full mb-2 object-cover border border-black object-center w-24 h-24 sm:w-32 sm:h-32 align-center"
                src={srcImage(data.profile)}
                alt="username photo"
                width="100"
                height="100"
              />
            </div>
          )}

          <div className="flex mt-1">
            <div className="w-full placeholder:text-sm placeholder:text-slate-400 block bg-[#e8edf1] border border-none rounded-sm shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md">
              <InputFile
                id={"profile"}
                placeholder="Add attachment"
                onChange={(e) => handleImage(e)}
                required={true}
              />
            </div>
          </div>
        </div>
        <div className="mt-5 mb-6">
          <h1 className="text-md mb-1">Nama</h1>
          <div className="flex mt-1">
            <input
              id={"username"}
              value={data && data.username}
              onChange={(e) => handleChange(e)}
              style={{ padding: "10px", paddingLeft: "50px" }}
              className="w-full placeholder:text-md placeholder:text-slate-900 block bg-[#e8edf1] border border-[#bfc3cb] rounded-sm py-2 pl-1 focus:outline-none focus:border-none focus:ring-none focus:ring-none md:text-md"
              placeholder="Andrean Rahmatan"
              type="text"
            />
            <IconUser width={20} className="mr-2 absolute ml-3 m-2" />
          </div>
        </div>
        <div className="mt-5 mb-6">
          <h1 className="text-md mb-1">Lokasi anda saat ini</h1>
          <div className="flex mt-1">
            {/* select form data items */}
            <select
              id={"location"}
              value={data && data.location}
              onChange={(e) => handleChange(e)}
              style={{ padding: "10px", paddingLeft: "50px" }}
              className="w-full placeholder:text-sm placeholder:text-slate-400 block bg-[#e8edf1] border border-[#bfc3cb] rounded-sm py-2 focus:outline-none focus:border-none focus:ring-none focus:ring-none md:text items-left "
              placeholder="Andrean Rahmatan"
              type="text"
            >
              {items.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <IconMap2 className="mr-2 absolute ml-3 mt-2" />
          </div>
        </div>

        <div className="mt-3 mb-[30%]">
          <h1 className="mb-1">Deskripsi tentang anda</h1>
          <textarea
            value={data && data.description}
            id={"description"}
            onChange={(e) => handleChange(e)}
            style={{ padding: "10px" }}
            className="w-full h-[120px] bg-[#e8edf1] p-2 rounded-sm border border-[#bfc3cb] shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
            placeholder="Deskripsi tentang diri anda...."
            name="catatan"
          ></textarea>
        </div>
      </div>
      <div className="flex p-4 z-50 bottom-0">
        <Button fullWidth="true" onClick={handleSubmit} centered={true}>
          Gabung
        </Button>
      </div>
    </div>
  );
}

export default RegisterTourGuide;
