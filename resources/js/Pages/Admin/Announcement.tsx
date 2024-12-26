import AddAnnouncement from "@/Components/AddAnnouncement";
import AnnouncementList from "@/Components/AnnouncementList";
import Divider from "@/Components/modules/Divider";
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import { IAnnouncement } from "@/Interface/Announcement";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function ({ requestData }: any) {
    const data = requestData as IAnnouncement[]
    const [announcementData, setAnnouncementData] = useState<IAnnouncement[]>([])

    useEffect(() => {
        setAnnouncementData(data)
    }, [data])
    return <>
        <Head title="Announcement" />
        <AdminLayout>
            <div>
                <h1 className="font-bold text-2xl uppercase">Announcement</h1>
                <Divider />
                <div className="float-end">
                    <AddAnnouncement />
                </div>
                <Table>
                    <TableCaption>A list of all announcement.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Image</TableHead>
                            <TableHead>Announement Title</TableHead>
                            <TableHead>Announement Description</TableHead>
                            <TableHead>Announement Date</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {announcementData.length > 0 ? announcementData.map((announcement, index) => <AnnouncementList key={index} announcement={announcement} />) : <></>}
                    </TableBody>
                </Table>
            </div>
        </AdminLayout>
    </>
}