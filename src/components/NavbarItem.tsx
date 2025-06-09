import React from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
interface NavbarItemsProps{
    label:string,
    active?:boolean,
    href:string

}
const NavbarItem:React.FC<NavbarItemsProps> = ({label,active=false,href}) => {
  return (
    
    <Link
        to={href}
        className={twMerge(`
             h-auto
             mx-2 
            w-auto text sm:text-md font-medium cursor-pointer hover:text-zinc-900 transition
            text-zinc-400 py-1
            z-50
        `,active && 'text-black underline')}
    >
        {label}    
    </Link>
  )
}

export default NavbarItem