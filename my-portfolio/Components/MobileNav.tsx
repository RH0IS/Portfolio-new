import { XMarkIcon } from '@heroicons/react/20/solid'
import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {

    const navAnimation = nav ? 'translate-x-0' : 'translate-x-[100%]';

    return (
        <div className={`fixed ${navAnimation}  transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000000] bg-[#09101a]`}
        >
            <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
                <div className="nav-link-mobile">HOME</div>
                <div className="nav-link-mobile">SERVCES</div>
                <div className="nav-link-mobile">ABOUT</div>
                <div className="nav-link-mobile">PROJECT</div>
                <div className="nav-link-mobile">BLOG</div>
                <div className="nav-link-mobile">CONTACT</div>
            </div>
            <div onClick={closeNav} className="absolute z-[100000000] cursor-pointer top-[2.5rem] right-[2.75rem] w-[2rem] h-[2rem] text-yellow-400">
                <XMarkIcon />

            </div>

        </div>
    )
}

export default MobileNav