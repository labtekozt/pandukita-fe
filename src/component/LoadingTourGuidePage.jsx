import { Illustration } from "@kiwicom/orbit-components";

function LoadingTourGuide() {

    return (
        <div style={{ width: '450px', backgroundColor: 'white' }}>
            <div className='p-[40px] mt-[40%] inline-flex flex-col items-center justify-center' style={{ marginBottom: '100%' }}>
                <Illustration name="ReferAFriend" size="display" />
                <h1 className="text-xl">Sedang Mencari pemandu Wisata....</h1>
            </div>
        </div>
    )
}

export default LoadingTourGuide
