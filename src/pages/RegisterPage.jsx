import { useState } from 'react';

const RegisterPage = () => {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }

    return (
        <div className='regis place-content-center' style={{ boxShadow: '0 2px 8px #888888' }}>
                <div className='register p-2'>
                    <h4 className='font-bold' style={{ marginTop: '30px' }}>Buat Akun</h4>
                    <h5 className='font-bold mt-2 fs-6' style={{ color: '#888888' }}>Buat Akun Untuk Melanjutkan</h5>

                    <form method='post' action="" className='form mt-6' style={{ marginBottom: '135px' }}>
                        <label><b>Username</b></label><br />
                        <input className='put' type="text" placeholder='Pandukita' />
                        <i className='fa-regular fa-user'></i>
                        <br /><br />
                        <label><b>Email</b></label>
                        <input className='put' type="email" placeholder='pandukita@gmail.com' />
                        <i className='fa-regular fa-envelope' style={{ top: '124px' }}></i>
                        <br /><br />
                        <label><b>Password</b></label>
                        <input name='' type={show ? "text" : "password"} placeholder='************' />
                        <label onClick={handleShow}>
                            {show ? <i className='pwr fa-regular fa-eye'></i> : <i className='pwr fa-regular fa-eye-slash'></i>}
                        </label>
                        <Button>Hello World!</Button>
                        <button className='btn mt-4 w-100 text-light' style={{ backgroundColor: '#01b6a7' }}>Buat Akun</button>
                        <p className='mt-2'>Sudah Punya Akun? <a href='/login' style={{ color: '#01b6a7' }}>Login</a></p>
                    </form>
                </div>
        </div>
    )
}

export default RegisterPage
