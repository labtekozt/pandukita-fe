import {
  Button,
  InputField,
  Text,
  Heading,
  ButtonLink,
  Stack,
  TextLink
} from "@kiwicom/orbit-components/lib/";
import { IconAt,IconEye,IconKey,IconEyeOff  } from '@tabler/icons-react';
import { useState } from 'react';

function LoginPage() {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <form className="containers p-[20px]" required={true}>
            <div className="login">
            <div className="pb-2 pt-2">
                <h1 className="text-2xl font-bold text-black">Selamat datang!</h1>
            </div>
            <div className="pb-[27px]">
                <p className="text-1xl text-black-light">Masukkan email dan password</p>
            </div>
            <Stack spacing="medium">
                <InputField label="Email" type="email" placeholder="Masukkan email" prefix={<IconAt />}/>
                <InputField type={showPassword?"text":"password"} label="Password" placeholder="Masukkan password" prefix={<IconKey/>} suffix={
                    <ButtonLink onClick={()=>{
                        setShowPassword(!showPassword)
                    }}>
                        { showPassword?<IconEye />:<IconEyeOff/> }
                    </ButtonLink>}/>
                <Button fullWidth="true" submit={true} centered={true} href="/">Masuk ke Aplikasi</Button>
                <Text>Tidak punya akun? <TextLink href="/register">Daftar</TextLink></Text>
            </Stack>
            </div>
        </form>
    )
}

export default LoginPage
