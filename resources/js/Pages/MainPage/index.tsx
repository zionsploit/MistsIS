import Announcement from "@/Components/MainPage/Announcement"
import EsportEvent from "@/Components/MainPage/EsportEvent"
import MrAndMissMastsCandidate2024 from "@/Components/MainPage/MrAndMissMastsCandidate2024"
import SocioEvent from "@/Components/MainPage/SocioEvent"
import GuestLayout from "@/Layouts/GuestLayout"
import { Head } from "@inertiajs/react"

export default function () {

    return <>
        <Head title="Masts" />
        <GuestLayout>
            <div className="p-5 flex flex-row justify-around items-start">
                <EsportEvent />
                <SocioEvent />
            </div>
            <div className="p-5 mx-12">
                <Announcement />
            </div>
            <div className="bg-[#caf0f8] p-5 mt-10">
                <MrAndMissMastsCandidate2024 />
            </div>
        </GuestLayout>
    </>
}