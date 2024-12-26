import { ISocioCulturalOfficers } from "@/Interface/SocioCultural"
import { Button } from "./ui/button"
import { TableCell, TableRow } from "./ui/table"
import { router } from "@inertiajs/react"
import { toast } from "react-toastify"
import SocioUpdateOfficer from "./SocioUpdateOfficer"

export default (params: { officer: ISocioCulturalOfficers }) => {
    const { officer } = params

    const OnClicKDeleteHandler = () => {
        router.post('delete-officer', {
            id: officer.id
        }, {
            onSuccess: () => {
                toast.success('Delete Officer Success', {
                    position: 'top-right'
                })
            }
        })
    }

    return <>
        <TableRow>
            <TableCell>
                <img src={`http://127.0.0.1:8000/storage/${officer.imageLink}`} style={{ width: 100 }} />
            </TableCell>
            <TableCell>{officer.fullName}</TableCell>
            <TableCell>{officer.position}</TableCell>
            <TableCell className="flex flex-row justify-center gap-2 items-center">
                <SocioUpdateOfficer official={officer} />
                <Button variant="danger" onClick={OnClicKDeleteHandler}>Delete</Button>
            </TableCell>
        </TableRow>
    </>
}