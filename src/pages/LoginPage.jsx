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

import useLogin from "../hooks/auth/useLogin";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const { login, loading, error, data, setState } = useLogin();

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
            placeholder="Masukkan email"
            prefix={<IconAt />}
            value={data.email.value}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                data: {
                  ...prev.data,
                  email: { value: e.target.value, error: "" },
                },
              }))
            }
            error={!!data.email.error}
            errorText={data.email.error}
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
            value={data.password.value}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                data: {
                  ...prev.data,
                  password: { value: e.target.value, error: "" },
                },
              }))
            }
            error={!!data.password.error}
            errorText={data.password.error}
            secureTextEntry
          />
          <Button
            fullWidth="true"
            onClick={async (e) => {
              await login(data.email.value, data.password.value);
              e.preventDefault();
              
            }}
            loading={loading}
            centered={true}
          >
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
