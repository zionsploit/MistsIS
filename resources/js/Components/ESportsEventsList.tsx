import { IESportsEvents } from "@/Interface/ESports";
import { TableCell, TableRow } from "./ui/table";
import { Button } from "./ui/button";
import { router } from "@inertiajs/react";
import { toast } from "react-toastify";
import ESportsUpdateEvents from "./ESportsUpdateEvents";

export default (params: { events: IESportsEvents }) => {
    const { events } = params

    const OnClickDeleteHandler = () => {
        router.post('delete-event', {
            id: events?.id
        }, {
            onSuccess: () => {
                toast.success('Delete Event Done', {
                    position: 'top-right',
                })
            }
        })
    }

    return <>
        <TableRow>
            <TableCell>
                <img src={`http://127.0.0.1:8000/storage/${events.imageLink}`} style={{ width: 100 }} />
            </TableCell>
            <TableCell>{events.title}</TableCell>
            <TableCell>{events.description}</TableCell>
            <TableCell>{events.date}</TableCell>
            <TableCell>
                <div className="flex flex-row justify-center gap-2 items-center">
                    <ESportsUpdateEvents event={events} />
                    <Button variant="danger" onClick={OnClickDeleteHandler}>Delete</Button>
                </div>
            </TableCell>
        </TableRow>
    </>
}