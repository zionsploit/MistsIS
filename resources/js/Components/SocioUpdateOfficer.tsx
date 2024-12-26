import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogPortal, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useFilePicker } from "use-file-picker"
import { ISocioCulturalOfficers } from "@/Interface/SocioCultural"
import { router } from "@inertiajs/react"
import { toast } from "react-toastify"

export default (param: { official: ISocioCulturalOfficers }) => {
    const { official } = param
    const { openFilePicker, filesContent } = useFilePicker({
        readAs: 'DataURL',
        accept: 'image/*'
    })
    const { register, handleSubmit, formState: { defaultValues } } = useForm({
        defaultValues: {
            fullName: official.fullName,
            position: official.position
        }
    })

    const OnClickHandleSubmit = (data: typeof defaultValues) => {
        router.post('update-officer', {
            id: official.id,
            fullName: data?.fullName,
            position: data?.position,
            image: filesContent[0],
        }, {
            forceFormData: true,
            onSuccess: () => {
                toast.success('Update Record Done', {
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
                        <DialogTitle>Update Officers</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(OnClickHandleSubmit)} className="space-y-5">
                        <div>
                            <Label htmlFor="fullName" className="font-medium text-md">Full Name</Label>
                            <Input
                                id="fullName"
                                { ...register('fullName', { required: true }) }
                            />
                        </div>
                        <div>
                            <Label htmlFor="position" className="font-medium text-md">Position</Label>
                            <Input
                                id="position"
                                { ...register('position', { required: true }) }
                            />
                        </div>
                        <div>
                            <Label htmlFor="fileUpload" className="font-medium text-md">Official Profile Pic</Label>
                            <Input type="text" placeholder={filesContent[0]?.name ? filesContent[0]?.name : official?.imageLink ? official?.imageLink : 'Choose File'} readOnly onClick={openFilePicker} id="fileUpload" />
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