import AddESportsEvents from "@/Components/AddESportsEvents";
import ESportsEventsList from "@/Components/ESportsEventsList";
import Divider from "@/Components/modules/Divider";
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import { IESportsEvents } from "@/Interface/ESports";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function ({ requestData }: any) {
    const data = requestData as IESportsEvents[]
    const [eventsData, setEventsData] = useState<IESportsEvents[]>([])

    useEffect(() => {
        setEventsData(data)
    }, [data])

    return <>
        <Head title="Events" />
        <AdminLayout>
            <div>
                <h1 className="font-bold text-2xl uppercase">E-Sports Events</h1>
                <Divider />
                <div className="float-end">
                    <AddESportsEvents />
                </div>
                <Table>
                    <TableCaption>A list of all e-sports events.</TableCaption>
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
                        {eventsData?.length > 0 ? eventsData.map((event, index) => <ESportsEventsList key={index} events={event} />) : <></>}
                    </TableBody>
                </Table>
            </div>
        </AdminLayout>
    </>
}