import {
  Button,
  InputField,
  Text,
  ButtonLink,
  Stack,
  TextLink,
} from "@kiwicom/orbit-components/lib/";
import {
  IconAt,
  IconEye,
  IconKey,
  IconEyeOff,
  IconUser,
  IconPhone,
} from "@tabler/icons-react";
import { useContext, useState } from "react";
import { GlobalContext } from "../store";
import useFormData from "../hooks/useFormData";
import { getUser, setCredentials } from "../helpers/getCredentials";
import axiosAuth from "../services/axios";
import validate from "../helpers/validateData";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { dispatch } = useContext(GlobalContext);
  const { data, handleChange } = useFormData({
    username: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });
  const register = async () => {
    try {
      // validate data here
      const isValid = validate(data);
      if (isValid) {
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            message: `Gagal Registrasi , ${isValid}`,
            type: "error",
          },
        });
        return;
      }
      await axiosAuth.post("/register", data);
      //   login request and set credentials
      
      const loginResponse = await axiosAuth.post("/login", {
        email: data.email,
        password: data.password,
      });
      dispatch({
        type: "SHOW_TOAST",
        payload: { message: "Register Success", type: "success" },
      });
      dispatch({
        type: "LOGIN",
      });

      setCredentials(loginResponse.data);
      dispatch({
        type: "SET_USER",
        payload: await getUser(),
      });
      navigate("/");
    } catch (error) {
      if (error.name == "AxiosError") {
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            message: `Gagal Registrasi , ${error.response.data.message}`,
            type: "error",
          },
        });
      }
    }
  };

  return (
    <div className="containerInfo">
      <form className="p-[20px]" required={true}>
        <div className="login">
          <div className="pb-2 pt-2">
            <h1 className="text-2xl font-bold text-black">Buat Akun!</h1>
          </div>
          <div className="pb-[27px]">
            <p className="text-1xl text-black-light">
              Buat akun untuk melanjutkan
            </p>
          </div>
          <Stack spacing="medium">
            <InputField
              label="Username"
              type="text"
              placeholder="pandukita"
              prefix={<IconUser />}
              value={data && data.username.value}
              onChange={(e) => handleChange(e)}
              id="username"
            />

            <InputField
              label="Email"
              type="email"
              id="email"
              placeholder="pandukita@gmail.com"
              prefix={<IconAt />}
              value={data && data.email}
              onChange={(e) => handleChange(e)}
            />
            <InputField
              label="Phone Number"
              type="email"
              placeholder="08##########"
              prefix={<IconPhone />}
              value={data && data.phone}
              id="phone"
              onChange={(e) => handleChange(e)}
            />
            <InputField
              type={showPassword ? "text" : "password"}
              label="Password"
              placeholder="*********"
              prefix={<IconKey />}
              suffix={
                <ButtonLink
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <IconEye /> : <IconEyeOff />}
                </ButtonLink>
              }
              value={data && data.password.value}
              onChange={(e) => handleChange(e)}
              id="password"
            />
            <InputField
              type={showPassword ? "text" : "password"}
              label="Password Confirm"
              placeholder="*********"
              prefix={<IconKey />}
              suffix={
                <ButtonLink
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <IconEye /> : <IconEyeOff />}
                </ButtonLink>
              }
              value={data && data.password2.value}
              onChange={(e) => handleChange(e)}
              id={"password2"}
            />
            <Button
              fullWidth="true"
              size="large"
              // color

              onClick={() => register()}
              centered={true}
            >
              Buat Akun
            </Button>
            <Text>
              Sudah punya akun? <TextLink href="/login">Login</TextLink>
            </Text>
          </Stack>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
