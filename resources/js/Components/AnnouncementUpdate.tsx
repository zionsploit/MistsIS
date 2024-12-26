import { IAnnouncement } from "@/Interface/Announcement";
import { Dialog, DialogContent, DialogHeader, DialogPortal, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { useFilePicker } from "use-file-picker";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { router } from "@inertiajs/react";
import { toast } from "react-toastify";

export default (params: { announcement: IAnnouncement }) => {
    const { announcement } = params
    const { openFilePicker, filesContent } = useFilePicker({
        readAs: 'DataURL',
        accept: 'image/*'
    })
    const [date, setDate] = useState<Date>()
    const { register, handleSubmit, formState: { defaultValues } } = useForm({
        defaultValues: {
            title: announcement.title,
            description: announcement.description
        }
    })

    useEffect(() => {
        setDate(new Date(announcement.date))
    }, [announcement])

    const OnClickUpdateData = (data: typeof defaultValues) => {
        router.post('update-announcement', {
            id: announcement.id,
            title: data?.title,
            description: data?.description,
            date: date?.toDateString(),
            image: filesContent[0]
        }, {
            forceFormData: true,
            onSuccess: () => {
                toast.success("Update Done", {
                    position: 'top-right'
                })
            }
        })
    }

    return <>
        <Dialog>
            <DialogTrigger>
                <Button variant="info">Update</Button>
            </DialogTrigger>
            <DialogPortal>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Update Events</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(OnClickUpdateData)} className="space-y-5">
                        <div>
                            <Label htmlFor="title" className="font-medium text-md">Title</Label>
                            <Input 
                                id="title"
                                { ...register('title', { required: true }) }
                            />
                        </div>
                        <div>
                            <Label htmlFor="description" className="font-medium text-md">Description</Label>
                            <Textarea 
                                id="description"
                                { ...register('description', { required: true }) }
                            />
                        </div>
                        <div className="flex flex-col justify-start">
                            <Label htmlFor="date" className="font-medium text-md">Date</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        id="date"
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                        >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div>
                            <Label htmlFor="fileUpload" className="font-medium text-md">Image Event</Label>
                            <Input type="text" placeholder={filesContent[0]?.name ? filesContent[0]?.name : announcement.imageLink ? announcement.imageLink : 'Choose File'} readOnly onClick={openFilePicker} id="fileUpload" />
                        </div>
                        <div className="w-full">
                            <Button type="submit" className="w-full">Submit</Button>
                        </div>
                    </form>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    </>
}