import { IEsportsOfficer } from "@/Interface/ESports";
import { TableCell, TableRow } from "./ui/table";
import { Button } from "./ui/button";
import ESportsUpdateOfficer from "./ESportsUpdateOfficer";
import { router } from "@inertiajs/react";
import { toast } from "react-toastify";

export default (params: { officer: IEsportsOfficer }) => {
    const { officer } = params

    const OnClickDeleteHandler = () => {
        router.post('delete-officer', {
            id: officer.id
        }, {
            onSuccess: () => {
                toast.success('Data Delete Done', {
                    position: 'top-right'
                })
            }
        })
    }

    return <>
        <TableRow>
            <TableCell>
                <img src={`http://127.0.0.1:8000/storage/${officer.imageLink}`} style={{ width: 90 }} />
            </TableCell>
            <TableCell>{officer.fullName}</TableCell>
            <TableCell>{officer.position}</TableCell>
            <TableCell>
                <div className="flex flex-row justify-center gap-2 items-center">
                    <ESportsUpdateOfficer officer={officer} />
                    <Button onClick={OnClickDeleteHandler} variant="danger">Delete</Button>
                </div>
            </TableCell>
        </TableRow>
    </>
}