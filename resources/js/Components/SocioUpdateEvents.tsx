import { ISocioCulturalEvents } from "@/Interface/SocioCultural";
import { Dialog, DialogContent, DialogHeader, DialogPortal, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { useFilePicker } from "use-file-picker";
import { useForm } from "react-hook-form";
import { router } from "@inertiajs/react";
import { atomStore } from "@/atom/atomStore";
import { socioEventsAtom } from "@/atom/socioAtom";
import { toast } from "react-toastify";

export default (params: { event: ISocioCulturalEvents }) => {
    const { event } = params
    const [date, setDate] = useState<Date>(new Date(event.date))
    const { openFilePicker, filesContent } = useFilePicker({
        readAs: 'DataURL',
        accept: 'image/*'
    })

    const { register, handleSubmit, formState: { defaultValues } } = useForm({
        defaultValues: {
            title: event.title,
            description: event.description,
            type: event.type
        }
    })

    const OnClickUpdateDataHandler = (data: typeof defaultValues) => {
        
        const isUpdateImage = filesContent.length > 0;

        router.post('update-events', {
            ...data,
            id: event?.id,
            date: date?.toDateString(),
            image: isUpdateImage ? filesContent[0] : null
        }, {
            forceFormData: true,
            onSuccess: (data) => {
                atomStore.set(socioEventsAtom, data.props?.requestData as ISocioCulturalEvents[])
                toast.success("Update Data succesfully", {
                    position: 'top-right'
                })
            }
        })
    }

    return <>
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="info">Update</Button>
            </DialogTrigger>
            <DialogPortal>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Update Events</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(OnClickUpdateDataHandler)} className="space-y-5">
                        <div>
                            <Label htmlFor="title" className="font-medium text-md">Title</Label>
                            <Input 
                                id="title"
                                {...register('title', { required: true })}
                            />
                        </div>
                        <div>
                            <Label htmlFor="description" className="font-medium text-md">Description</Label>
                            <Textarea 
                                id="description"
                                {...register('description', { required: true })}
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
                                        onSelect={(value) => value !== undefined && setDate(value)}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div>
                            <Label htmlFor="fileUpload" className="font-medium text-md">Image Event</Label>
                            <Input type="text" placeholder={filesContent.length > 0 ? filesContent.length == 1 ? filesContent[0]?.name : 'Click to choose image' : event.imageLink } readOnly onClick={openFilePicker} id="fileUpload" />
                        </div>
                        <div className="w-full">
                            <Button type="submit" className="w-full">Update</Button>
                        </div>
                    </form>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    </>
}