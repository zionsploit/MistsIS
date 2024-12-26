import { atomStore } from "@/atom/atomStore";
import { socioEventsAtom } from "@/atom/socioAtom";
import AddSocioEvents from "@/Components/AddSocioEvents";
import Divider from "@/Components/modules/Divider";
import SocioEventsList from "@/Components/SocioEventsList";
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import { ISocioCulturalEvents } from "@/Interface/SocioCultural";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function ({ requestData }: any) {
    const dataParam = requestData as ISocioCulturalEvents[];
    const getSocioEvents = atomStore.get(socioEventsAtom)
    const [eventsData, setEventsData] = useState<ISocioCulturalEvents[]>([])

    useEffect(() => {
        if (dataParam?.length > 0) {
            atomStore.set(socioEventsAtom, dataParam)
        }
    }, [dataParam])

    useEffect(() => {
        if (getSocioEvents) {
            setEventsData(getSocioEvents)
        }
    }, [getSocioEvents])


    return <>
        <Head title="Events" />
        <AdminLayout>
            <div>
                <h1 className="font-bold text-2xl uppercase">Socio-Cultural Events</h1>
                <Divider />
                <div className="float-end">
                    <AddSocioEvents />
                </div>
                <Table>
                    <TableCaption>A list of all socio-cultural events.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Image</TableHead>
                            <TableHead>Event Title</TableHead>
                            <TableHead>Event Description</TableHead>
                            <TableHead>Event Date</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {eventsData.length > 0 ? eventsData.map((event, index) => <SocioEventsList key={index} event={event} />) : <></> }
                    </TableBody>
                </Table>
            </div>
        </AdminLayout>
    </>
}