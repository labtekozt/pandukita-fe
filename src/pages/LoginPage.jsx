import Container from 'react-bootstrap/Container';
import { useState } from 'react';

function LoginPage() {

    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }

    return (
        <div>
            <Container className='regis place-content-center' style={{ boxShadow: '0 2px 8px #888888' }}>
                <div className='register p-2'>
                    <h4 className='font-bold' style={{ marginTop: '30px' }}>Selamat Datang!</h4>
                    <h5 className='font-bold mt-2 fs-6' style={{ color: '#888888' }}>Masukkan Email dan Password</h5>

                    <form method='' action="" className='form mt-6' style={{ marginBottom: '220px' }}>

                        <label><b>Email</b></label>
                        <input name='' className='put' type="email" placeholder='Masukkan Email' />
                        <i className='fa-regular fa-envelope'></i>
                        <br /><br />
                        <label><b>Password</b></label>
                        <input name='' type={show ? "text" : "password"} placeholder='************' />
                        <label onClick={handleShow}>
                            {show ? <i className='pwl fa-regular fa-eye'></i> : <i className='pwl fa-regular fa-eye-slash'></i>}
                        </label>

                        <button className='btn mt-4 w-100 text-light' style={{ backgroundColor: '#01b6a7' }}>Masuk ke Aplikasi</button>
                        <p className='mt-2'>Tidak Punya Akun? <a href='/register' style={{ color: '#01b6a7' }}>Daftar</a></p>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default LoginPage
