import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { DialogFooter } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { router } from "@inertiajs/react";
import { IAccount } from "@/Interface/Account";
import { toast } from "react-toastify";

export default function SignIn() {
    const { register, handleSubmit, formState: { defaultValues } } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    })

    const OnClickSubmitData = (data: typeof defaultValues) => {
        router.post('login', data, {
            onSuccess: (data) => {
                const loginData = data.props?.accountLogin as IAccount
                toast.success('Login Success', {
                    position: 'top-right'
                })
                localStorage.setItem('account', JSON.stringify(loginData))
                router.visit('admin', {
                    method: 'get'
                })
            }
        })
    }

    return <>
        <form onSubmit={handleSubmit(OnClickSubmitData)}>
            <div className='flex flex-col justify-start gap-3 items-start w-full'>
                <div className='w-full'>
                    <Label htmlFor="username" className="text-right">
                        Username
                    </Label>
                    <Input
                        {...register('username', { required: true })}
                        id="username"
                        className="w-full"
                    />
                </div>
                <div className='w-full'>
                    <Label htmlFor="password" className="text-right">
                        Password
                    </Label>
                    <Input
                        type='password'
                        id="password"
                        {...register('password', { required: true })}
                        className="w-full"
                    />
                </div>
            </div>
            <DialogFooter className='w-full mt-5'>
                <Button className='w-full' type="submit">Login</Button>
            </DialogFooter>
        </form>
    </>
}