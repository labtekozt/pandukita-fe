/* eslint-disable no-unused-vars */
import {
  Button,
  InputField,
  Text,
  ButtonLink,
  Stack,
  TextLink,
} from "@kiwicom/orbit-components/lib/";
import { IconAt, IconEye, IconKey, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";

import axiosAuth from "../services/axios";
import { getUser, setCredentials } from "../helpers/setCredentials";
import { useContext } from "react";
import { GlobalContext } from "../store";
import useFormData from "../hooks/useFormData";
import { setCookie } from "../helpers/cookies";

function LoginPage() {
  const { dispatch } = useContext(GlobalContext);
  const [showPassword, setShowPassword] = useState(false);
  const login = async () => {
    try {
      // validate data here
      if (!data.email || !data.password) {
        dispatch({
          type: "SHOW_TOAST",
          payload: { message: "Email / password must fields", type: "error" },
        });
        return;
      }

      const response = await axiosAuth.post("/login", {
        email: data.email,
        password: data.password,
      });
      setCredentials(response.data);

      dispatch({
        type: "LOGIN",
      });
      dispatch({
        type: "SHOW_TOAST",
        payload: { message: "Login Berhasil..", type: "success" },
      });
      dispatch({
        type: "SET_USER",
        payload: await getUser(),
      });
    } catch (error) {
      if (error.name == "AxiosError") {
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            message: `Login Gagal.., ${error.response.data.message}`,
            type: "error",
          },
        });
      }
    }
  };
  const { handleChange, data } = useFormData({
    email: "",
    password: "",
  });

  return (
    <form className="containers p-[20px]" required={true}>
      <div className="login">
        <div className="pb-2 pt-2">
          <h1 className="text-2xl font-bold text-black">Selamat datang!</h1>
        </div>
        <div className="pb-[27px]">
          <p className="text-1xl text-black-light">
            Masukkan email dan password
          </p>
        </div>
        <Stack spacing="medium">
          <InputField
            label="Email"
            type="email"
            id={"email"}
            placeholder="Masukkan email"
            prefix={<IconAt />}
            value={data && data.email}
            onChange={(e) => handleChange(e)}
          />
          <InputField
            type={showPassword ? "text" : "password"}
            label="Password"
            placeholder="Masukkan password"
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
            id="password"
            value={data && data.password}
            onChange={(e) => handleChange(e)}
            error={!!data.password.error}
            errorText={data.password.error}
            secureTextEntry
          />
          <Button fullWidth="true" onClick={login} centered={true}>
            Masuk ke Aplikasi
          </Button>
          <Text>
            Tidak punya akun? <TextLink href="/register">Daftar</TextLink>
          </Text>
        </Stack>
      </div>
    </form>
  );
}

export default LoginPage;
