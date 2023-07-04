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
import useRegister from "../hooks/auth/useRegister";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { dispatch } = useContext(GlobalContext);
  const {
    register,
    setState,
    loading,
    error,
    username,
    email,
    phone,
    password,
    password2,
  } = useRegister();

  if (error) {
    console.log(error);
    dispatch({
      type: "SHOW_TOAST",
      payload: { message: error, type: "critical", show: true },
    });
  }

  return (
    <div className="containers">
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
              value={username.value}
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  username: { value: e.target.value, error: "" },
                }))
              }
              error={!!username.error}
              errorText={username.error}
            />

            <InputField
              label="Email"
              type="email"
              placeholder="pandukita@gmail.com"
              prefix={<IconAt />}
              value={email.value}
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  email: { value: e.target.value, error: "" },
                }))
              }
            />
            <InputField
              label="Phone Number"
              type="email"
              placeholder="08##########"
              prefix={<IconPhone />}
              value={phone.value}
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  phone: { value: e.target.value, error: "" },
                }))
              }
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
              value={password.value}
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  password: { value: e.target.value, error: "" },
                }))
              }
              error={!!password.error}
              errorText={password.error}
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
              value={password2.value}
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  password2: { value: e.target.value, error: "" },
                }))
              }
              error={!!password2.error}
              errorText={password2.error}
            />
            <Button
              fullWidth="true"
              loading={loading}
              disabled={loading}
              type="submit"
              onClick={async () =>
                register({
                  username: username.value,
                  email: email.value,
                  phone: phone.value,
                  password: password.value,
                  password2: password2.value,
                })
              }
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
