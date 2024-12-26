import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogPortal, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Textarea } from "./ui/textarea"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "./ui/calendar"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useFilePicker } from "use-file-picker"
import { router } from "@inertiajs/react"
import { toast } from "react-toastify"

export default () => {
    const { openFilePicker, filesContent } = useFilePicker({
        readAs: 'DataURL',
        accept: 'image/*'
    })
    const [date, setDate] = useState<Date>()
    const { register, handleSubmit, formState: { defaultValues } } = useForm({
        defaultValues: {
            title: '',
            description: ''
        }
    })

    const OnClickCreateHandler = (data: typeof defaultValues) => {
        router.post('add-announcement', {
            title: data?.title,
            description: data?.description,
            date: date?.toDateString(),
            image: filesContent[0]
        }, {
            forceFormData: true,
            onSuccess: () => {
                toast.success('New Added Done', {
                    position: 'top-right'
                })
            }
        })
    }

    return <>
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add Announcement</Button>
            </DialogTrigger>
            <DialogPortal>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Announcement</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(OnClickCreateHandler)} className="space-y-5">
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
                            <Input type="text" placeholder={filesContent[0]?.name ? filesContent[0]?.name : 'Choose File'} readOnly onClick={openFilePicker} id="fileUpload" />
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