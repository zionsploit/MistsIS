import Divider from "@/Components/modules/Divider";
import { Button } from "@/Components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogPortal, DialogTitle, DialogTrigger } from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function () {

    return <>
        <Head title="Officials" />
        <AdminLayout>
            <div>
                <h1 className="font-bold text-2xl uppercase">Socio-Cultural Officials</h1>
                <Divider />
                <div className="float-end">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>Add Official</Button>
                        </DialogTrigger>
                        <DialogPortal>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Add Official</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-5">
                                    <div>
                                        <Label htmlFor="fullName" className="font-medium text-md">Full Name</Label>
                                        <Input id="fullName" />
                                    </div>
                                    <div>
                                        <Label htmlFor="position" className="font-medium text-md">Position</Label>
                                        <Input id="position" />
                                    </div>
                                    <div>
                                        <Label htmlFor="fileUpload" className="font-medium text-md">Official Profile Picture</Label>
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
                        <TableRow>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </AdminLayout>
    </>
}