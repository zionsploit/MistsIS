import AddESportsOfficer from "@/Components/AddESportsOfficer";
import ESportsOfficerList from "@/Components/ESportsOfficerList";
import Divider from "@/Components/modules/Divider";
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import { IEsportsOfficer } from "@/Interface/ESports";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function ({ requestData }: any) {
    const data = requestData as IEsportsOfficer[]
    const [officerData, setOfficerData] = useState<IEsportsOfficer[]>([])

    useEffect(() => {
        setOfficerData(data)
    }, [data])

    return <>
        <Head title="Officials" />
        <AdminLayout>
            <div>
                <h1 className="font-bold text-2xl uppercase">E-Sports Officials</h1>
                <Divider />
                <div className="float-end">
                    <AddESportsOfficer />
                </div>
                <Table>
                    <TableCaption>A list of all e-sports officials.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Image</TableHead>
                            <TableHead>Full Name</TableHead>
                            <TableHead>Position</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {officerData.length > 0 ? officerData.map((officer, index) => <ESportsOfficerList key={index} officer={officer} />) : <></>}
                    </TableBody>
                </Table>
            </div>
        </AdminLayout>
    </>
}