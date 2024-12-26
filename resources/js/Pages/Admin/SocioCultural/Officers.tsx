import AddSocioOfficer from "@/Components/AddSocioOfficer";
import Divider from "@/Components/modules/Divider";
import SocioOfficerList from "@/Components/SocioOfficerList";
import { Button } from "@/Components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import { ISocioCulturalOfficers } from "@/Interface/SocioCultural";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function ({ requestData }: any) {
    const dataParam = requestData as ISocioCulturalOfficers[];
    const [officersData, setOfficersData] = useState<ISocioCulturalOfficers[]>([])

    useEffect(() => {
        setOfficersData(dataParam)
    }, [dataParam])

    return <>
        <Head title="Officials" />
        <AdminLayout>
            <div>
                <h1 className="font-bold text-2xl uppercase">Socio-Cultural Officers</h1>
                <Divider />
                <div className="float-end">
                    <AddSocioOfficer />
                </div>
                <Table>
                    <TableCaption>A list of all socio-cultural officials.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Image</TableHead>
                            <TableHead>Full Name</TableHead>
                            <TableHead>Position</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {officersData?.length > 0 ? officersData?.map((officer, index) => <SocioOfficerList key={index} officer={officer} />) : <></>}
                    </TableBody>
                </Table>
            </div>
        </AdminLayout>
    </>
}