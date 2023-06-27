import React from 'react'
import { Illustration } from "@kiwicom/orbit-components";
import { Button,
Text } from "@kiwicom/orbit-components/lib/";
  

function EmptyState() {
    return (
        <div className='empty grid place-content-center min-h-screen' style={{width : '500px', backgroundColor : 'white'}}>
            <div className="mt-[10%]">
                <div>
                    <div className='flex items-center justify-center'>
                        <div><Illustration name="NoResults" size="small"/></div>
                    </div>
                    <div className='flex items-center justify-center p-1'>
                        <Text align="center">Maaf, halaman tidak ditemukan</Text>
                    </div>
                    <div className='flex items-center justify-center p-1'>
                        <Button size="small" type="primary" href='/'><span>Kembali</span></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmptyState

