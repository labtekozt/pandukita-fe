import '../App.css'
import { IconHome, 
    IconSend, 
    IconTimeline,
    IconUserCircle } from '@tabler/icons-react';

function BottomNavigation() {
    return (
        
<div className="sticky bottom-0 left-0 right-0 h-16 bg-white" style={{boxShadow : '0 -8px 6px -9px gray'}}>
    <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        <button type="button" className="text-gray inline-flex flex-col items-center justify-center px-5 group">
            <a href="/" className='inline-flex flex-col items-center justify-center px-5 group'>
                <IconHome />
                <span className="mt-1 text-nav text-sm">Home</span>
            </a>
        </button>
        <button type="button" className="text-gray inline-flex flex-col items-center justify-center px-2 group">
            <a href="/toureguide" className='inline-flex flex-col items-center justify-center'>
                <IconSend />
                <span className="mt-1 text-tour text-sm">Toure Guide</span>
            </a>
        </button>
        <button type="button" className="text-gray inline-flex flex-col items-center justify-center px-5 group">
            <IconTimeline />
            <span className="mt-1 text-nav text-sm">Journey</span>
        </button>
        <button type="button" className="text-gray inline-flex flex-col items-center justify-center px-5 group">
            <a href="/profile" className='inline-flex flex-col items-center justify-center px-5 group'>
                <IconUserCircle />
                <span className="mt-1 text-nav text-sm">Profile</span>
            </a>
        </button>
    </div>
</div>

    )
}

export default BottomNavigation

