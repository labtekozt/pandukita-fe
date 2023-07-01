import '../App.css'
import {
    IconHome,
    IconSTurnLeft,
    IconUserCircle,
    IconMessageDots
} from '@tabler/icons-react';

function BottomNavigation() {
    const Menus = [
        { name: "Home", icon: <IconHome />, href: '/' },
        { name: "Journey", icon: <IconSTurnLeft />, href: '/tripplannerhome' },
        { name: "Message", icon: <IconMessageDots /> },
        { name: "profile", icon: <IconUserCircle />, href: '/profileuser' }
    ];

    return (

        <div className="sticky z-50 bottom-0 left-0 right-0 h-16 bg-white" style={{ boxShadow: '0 -8px 6px -9px gray' }}>
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto">

                {Menus.map((menu) => (
                    <button type="button" className="text-gray inline-flex flex-col items-center justify-center px-2 group">
                        <a href={menu.href} className='inline-flex flex-col items-center justify-center'>
                            {menu.icon}
                            <span className="mt-1 text-nav text-md">{menu.name}</span>
                        </a>
                    </button>
                ))}

            </div>
        </div>

    )
}

export default BottomNavigation

