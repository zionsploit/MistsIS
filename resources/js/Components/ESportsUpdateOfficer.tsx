import { IEsportsOfficer } from "@/Interface/ESports";
import { Dialog, DialogContent, DialogHeader, DialogPortal, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { useFilePicker } from "use-file-picker";
import { useForm } from "react-hook-form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { router } from "@inertiajs/react";
import { toast } from "react-toastify";

export default (params: { officer: IEsportsOfficer }) => {
    const { officer } = params
    const { openFilePicker, filesContent } = useFilePicker({
        readAs: 'DataURL',
        accept: 'image/*'
    })

    const { register, handleSubmit, formState: { defaultValues } } = useForm({
        defaultValues: {
            fullName: officer.fullName,
            position: officer.position,
        }
    })

    const OnClickUpdateHandler = (data: typeof defaultValues) => {
        router.post('update-officer', {
            "id": officer.id,
            "fullName": data?.fullName,
            "position": data?.position,
            "image": filesContent[0]
        }, {
            forceFormData: true,
            onSuccess: () => {
                toast.success('Update Data Done', {
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
                        <DialogTitle>Update Officer</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(OnClickUpdateHandler)} className="space-y-5">
                        <div>
                            <Label htmlFor="fullName" className="font-medium text-md">Full Name</Label>
                            <Input 
                                id="fullName"
                                { ...register('fullName', { required: 'true' }) }
                            />
                        </div>
                        <div>
                            <Label htmlFor="position" className="font-medium text-md">Position</Label>
                            <Input 
                                id="position"
                                { ...register('position', { required: 'true' }) }
                            />
                        </div>
                        <div>
                            <Label htmlFor="fileUpload" className="font-medium text-md">Official Profile Picture</Label>
                            <Input type="text" placeholder={filesContent[0]?.name ? filesContent[0]?.name : officer.imageLink ? officer.imageLink : 'Choose File'} readOnly onClick={openFilePicker} id="fileUpload" />
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