import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogPortal, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useFilePicker } from "use-file-picker"
import { router } from "@inertiajs/react"
import { toast } from "react-toastify"

export default () => {
    const { openFilePicker, filesContent } = useFilePicker({
        readAs: 'DataURL',
        accept: 'image/*'
    })
    const { register, handleSubmit, formState: { defaultValues } } = useForm({
        defaultValues: {
            fullName: '',
            position: ''
        }
    })

    const OnClickDataSubmit = (data: typeof defaultValues) => {
        router.post('add-officers', {
            fullName: data?.fullName,
            position: data?.position,
            image: filesContent[0]
        }, {
            forceFormData: true,
            onSuccess: (data) => {
                console.log(data)
                toast.success('Newly Officers Created', {
                    position: 'top-right'
                })
            }
        });
    }

    return <>
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add Officers</Button>
            </DialogTrigger>
            <DialogPortal>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Official</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(OnClickDataSubmit)} className="space-y-5">
                        <div>
                            <Label htmlFor="fullName" className="font-medium text-md">Full Name</Label>
                            <Input 
                                id="fullName"
                                { ...register('fullName', { required: true })}
                             />
                        </div>
                        <div>
                            <Label htmlFor="position" className="font-medium text-md">Position</Label>
                            <Input 
                                id="position"
                                { ...register('position', { required: true })}
                             />
                        </div>
                        <div>
                            <Label htmlFor="fileUpload" className="font-medium text-md">Official Profile Picture</Label>
                            <Input type="text" placeholder={`${filesContent[0]?.name ? filesContent[0]?.name : 'Choose File'}`} readOnly onClick={openFilePicker} id="fileUpload" />
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