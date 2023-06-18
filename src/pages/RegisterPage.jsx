import {
    Button,
    InputField,
    Text,
    Heading,
    ButtonLink,
    Stack,
    TextLink
  } from "@kiwicom/orbit-components/lib/";
  import { IconAt,IconEye,IconKey,IconEyeOff,IconUser } from '@tabler/icons-react';
  import { useState } from 'react';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <form className="containers p-[20px]" required={true}>
            <div className="login">
            <div className="pb-2 pt-2">
                <h1 className="text-2xl font-bold text-black">Buat Akun!</h1>
            </div>
            <div className="pb-[27px]">
                <p className="text-1xl text-black-light">Buat akun untuk melanjutkan</p>
            </div>
            <Stack spacing="medium">
                <InputField label="Username" type="email" placeholder="pandukita" prefix={<IconUser />}/>
                <InputField label="Email" type="email" placeholder="pandukita@gmail.com" prefix={<IconAt />}/>
                <InputField type={showPassword?"text":"password"} label="Password" placeholder="*********" prefix={<IconKey/>} suffix={
                    <ButtonLink onClick={()=>{
                        setShowPassword(!showPassword)
                    }}>
                        { showPassword?<IconEye />:<IconEyeOff/> }
                    </ButtonLink>}/>
                <Button fullWidth="true" submit={true} centered={true} href="/">Buat Akun</Button>
                <Text>Sudah punya akun? <TextLink href="/login">Login</TextLink></Text>
            </Stack>
            </div>
        </form>
    )
}

export default RegisterPage
