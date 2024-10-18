import Divider from "@/Components/modules/Divider";
import { Button } from "@/Components/ui/button";
import { Calendar } from "@/Components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogPortal, DialogTitle, DialogTrigger } from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/Components/ui/popover";
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import { Textarea } from "@/Components/ui/textarea";
import AdminLayout from "@/Layouts/AdminLayout";
import { cn } from "@/lib/utils";
import { Head } from "@inertiajs/react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

export default function () {
    const [date, setDate] = useState<Date>()

    return <>
        <Head title="Events" />
        <AdminLayout>
            <div>
                <h1 className="font-bold text-2xl uppercase">Socio-Cultural Events</h1>
                <Divider />
                <div className="float-end">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>Add Events</Button>
                        </DialogTrigger>
                        <DialogPortal>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Add Events</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-5">
                                    <div>
                                        <Label htmlFor="title" className="font-medium text-md">Title</Label>
                                        <Input id="title" />
                                    </div>
                                    <div>
                                        <Label htmlFor="description" className="font-medium text-md">Description</Label>
                                        <Textarea id="description" />
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
                                        <Input type="file" id="fileUpload" />
                                    </div>
                                    <div className="w-full">
                                        <Button className="w-full">Submit</Button>
                                    </div>
                                </div>
                            </DialogContent>
                        </DialogPortal>
                    </Dialog>
                </div>
                <Table>
                    <TableCaption>A list of all socio-cultural events.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Image</TableHead>
                            <TableHead>Event Title</TableHead>
                            <TableHead>Event Description</TableHead>
                            <TableHead>Event Date</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </AdminLayout>
    </>
}