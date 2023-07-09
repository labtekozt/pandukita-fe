import Logo from '../disk/image/logo.png'

function Onboarding() {

    return (
        <div style={{ width: '450px', backgroundColor: 'white' }}>
            <div className='p-[100px] mt-[50%] inline-flex flex-col items-center justify-center' style={{ marginBottom: '100%' }}>
                <img loading='lazy' src={Logo} className="w-[100%]" />
            </div>
        </div>
    )
}

export default Onboarding
