import { IAnnouncement } from "@/Interface/Announcement";
import { TableCell, TableRow } from "./ui/table";
import { Button } from "./ui/button";
import { router } from "@inertiajs/react";
import { toast } from "react-toastify";
import AnnouncementUpdate from "./AnnouncementUpdate";

export default (params: { announcement: IAnnouncement }) => {
    const { announcement } = params


    const OnClicKDeleteDataHandler = () => {
        router.post('delete-announcement', {
            id: announcement.id
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
                <img src={`http://127.0.0.1:8000/storage/${announcement.imageLink}`} style={{ width: 80 }} />
            </TableCell>
            <TableCell>{announcement.title}</TableCell>
            <TableCell>{announcement.description}</TableCell>
            <TableCell>{announcement.date}</TableCell>
            <TableCell>
                <div className="flex flex-row justify-center gap-2 items-center">
                    <AnnouncementUpdate announcement={announcement} />
                    <Button variant="danger" onClick={OnClicKDeleteDataHandler}>Delete</Button>
                </div>
            </TableCell>
        </TableRow>
    </>
}