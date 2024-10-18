import Divider from "@/Components/modules/Divider";
import Nav from "@/Components/modules/Nav";
import NavList from "@/Components/modules/NavList";
import { Button } from "@/Components/ui/button";
import { IconBrandRedux, IconDashboard, IconDeviceGamepad2, IconInfoHexagon } from "@tabler/icons-react";
import { ReactNode } from "react";

const DashboardLabel = {
    label: 'Dashboard',
    link: '/admin',
    icon: <IconDashboard color="black" />
}

const SocioLabel = {
    label: 'Socio-Cultural',
    icon: <IconBrandRedux color="black" />
}

const socioSubLinks = [
    {label: 'Events', link: '/admin/socio-cultural/events'},
    {label: 'Officials', link: '/admin/socio-cultural/officials'},
]

const ESportsLabel = {
    label: 'E-Sports',
    icon: <IconDeviceGamepad2 color="black" />
}

const esportsSubLinks = [
    {label: 'Events', link: '/admin/e-sports/events'},
    {label: 'Officials', link: '/admin/e-sports/officials'},
]

const AnnouncementLabel = {
    label: 'Announcement',
    link: '/admin/announcement',
    icon: <IconInfoHexagon color="black" />
}

export default function (props: {children: ReactNode}) {

    return <>
        <div className="h-[100vh] flex justify-start items-start">
            <div className="h-full pr-5 pl-2 border-r-2 border-gray-500/20">
                <div className="h-full flex flex-col justify-between">
                    <div className="flex flex-col justify-start items-start gap-5">
                        <div className="w-full text-center flex my-2 mb-5 flex-col justify-start items-center gap-0">
                            <p className="font-bold text-3xl tracking-wide">JHCSC</p>
                            <p className="font-semibold text-sm tracking-wider">MASTS INFORMATION SYSTEM</p>
                        </div>
                        <div>
                            <Nav label={DashboardLabel} />
                            <NavList label={SocioLabel} subLinks={socioSubLinks} />
                            <NavList label={ESportsLabel} subLinks={esportsSubLinks} />
                            <Divider />
                            <Nav label={AnnouncementLabel} />
                        </div>
                    </div>
                    <div className="my-5">
                        <Button className="w-full">Logout</Button>
                    </div>
                </div>
            </div>
            <div className="h-full w-full flex flex-col justify-between">
                <div className="w-full p-5 mt-20">
                    {props.children}
                </div>
                <div className="border-t-[1px] border-gray-400 flex justify-between items-center p-2">
                    <p className="font-extrabold text-[10px] tracking-wide">JHCSC - MASTS INFORMATION SYSTEM</p>
                    <p className="font-extrabold text-[10px] tracking-wide">ALL RIGHTS RESERVED @2024</p>
                    <p className="font-extrabold text-[10px] tracking-wide">@COMPLIANCE UNDER BSIT III - ALJAY BAGUIOSO</p>
                </div>
            </div>
        </div>
    </>
}