'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'

interface Props {
    icon: React.ReactNode;
    path: string;
    title: string;
}

export const SidebarItem = ({ icon, path, title }: Props) => {

    const pathName = usePathname();

    return (
        <li>
            <Link href={ path } 
                className={`px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group
                hover:bg-gradient-to-t hover:from-sky-600 hover:to-cyan-400 hover:text-white
                ${pathName === path ? 'text-white bg-gradient-to-t from-sky-600 to-cyan-400' : ''}`}>
                { icon }
                <span>{title}</span>
            </Link>
        </li>
    )
}
