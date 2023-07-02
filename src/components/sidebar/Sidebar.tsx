import Image from "next/image"
import Link from "next/link"
import { CiLogout } from "react-icons/ci"
import { SidebarItem } from "./SidebarItem"
import { IoCalendarOutline, IoCartOutline, IoCheckboxOutline, IoCodeWorking, IoListOutline, IoPersonOutline } from 'react-icons/io5'
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { LogOutButton } from "./LogOutButton"


const menuItem = [
    {
        icon: <IoCalendarOutline />,
        title: 'Dashboard',
        path: '/dashboard',
    },
    {
        icon: <IoCheckboxOutline />,
        title: 'Rest TODOS',
        path: '/dashboard/rest-todos',
    },
    {
        icon: <IoListOutline />,
        title: 'Server Actions',
        path: '/dashboard/server-todos',
    },
    {
        icon: <IoCodeWorking />,
        title: 'Cookies',
        path: '/dashboard/cookies',
    },
    {
        icon: <IoCartOutline />,
        title: 'Productos',
        path: '/dashboard/productos',
    },
    {
        icon: <IoPersonOutline />,
        title: 'Perfil',
        path: '/dashboard/profile',
    },
]

export const Sidebar = async() => {
    const session = await getServerSession(authOptions)

    const userName = session?.user?.name ?? 'No Name';
    const userRoles = session?.user?.roles ?? ['client'];
    const userImage = session?.user?.image ?? 'https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp';

    return (
        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                <div className="-mx-6 px-6 py-4">
                    <Link href="/dashboard" title="home">
                        <Image width={100} height={100} src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg" className="w-32" alt="tailus logo" />
                    </Link>
                </div>

                <div className="mt-8 text-center">
                    <Image width={100} height={100} 
                        src={userImage}
                        alt="" 
                        className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
                    <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
                        {userName}
                    </h5>
                    <span className="hidden text-gray-400 lg:block capitalize">
                        {userRoles.join(', ')}
                    </span>
                </div>

                <ul className="space-y-2 tracking-wide mt-8">
                    {
                        menuItem.map(item => (
                            <SidebarItem key={item.path} {...item} />
                        ))
                    }
                </ul>
            </div>

            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <LogOutButton />
            </div>
        </aside>
    )
}
