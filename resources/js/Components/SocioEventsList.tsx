import { ISocioCulturalEvents } from "@/Interface/SocioCultural";
import { TableCell, TableRow } from "./ui/table";
import { Button } from "./ui/button";
import { atomStore } from "@/atom/atomStore";
import { socioEventsAtom } from "@/atom/socioAtom";
import _ from 'lodash'
import { router } from "@inertiajs/react";
import { toast } from "react-toastify";
import SocioUpdateEvents from "./SocioUpdateEvents";

export default (param: { event: ISocioCulturalEvents}) => {
    const { event } = param
    const getAllEventsAtom = atomStore.get(socioEventsAtom)

    const OnClickDeleteHandler = () => {
        router.post('remove-events', {id: event.id}, {
            onSuccess: () => {
                _.remove(getAllEventsAtom, (data) => data.id === event.id)
                toast.success('Delete Success', {
                    position: 'top-right'
                })
            }
        })
    }

    return <>
        <TableRow>
            <TableCell>
                <img src={`http://127.0.0.1:8000/storage/${event.imageLink}`} style={{ width: 150 }} />
            </TableCell>
            <TableCell>{event.title}</TableCell>
            <TableCell>{event.description}</TableCell>
            <TableCell>{event.date}</TableCell>
            <TableCell>
                <div className="flex flex-row justify-center gap-2 items-center">
                    <SocioUpdateEvents event={event} />
                    <Button variant="danger" onClick={OnClickDeleteHandler}>Delete</Button>
                </div>
            </TableCell>
        </TableRow>
    </>
}