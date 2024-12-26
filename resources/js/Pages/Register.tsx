import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { IAccount } from "@/Interface/Account";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, router } from "@inertiajs/react";
import { useRef } from "react";
import { useForm } from 'react-hook-form'
import { toast } from "react-toastify";

export default function Register() {
    const { register, handleSubmit, formState: { defaultValues } } = useForm({
        defaultValues: {
            'firstName': '',
            'middleName': '',
            'lastName': '',
            'username': '',
            'password': ''
        }
    })


    const OnClickSubmitData = (data: typeof defaultValues) => {
        router.post('register-admin', data, {
            onSuccess: (data) => {
                const accountUser = data.props?.accountUser as IAccount;
                if (accountUser?.id) {
                    toast.success('Newly Admin Created', {
                        position: 'top-right',
                    })
                }
            },
        })
    }

    return (
        <>
            <Head title="Register" />
            <GuestLayout>
                <div className="w-full flex justify-center items-start">
                    <Card className="w-[25rem] mt-20">
                        <CardHeader>
                            <CardTitle>Register Admin</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>
                                <form onSubmit={handleSubmit(OnClickSubmitData)}>
                                    <div className="space-y-3">
                                        <Input
                                            placeholder="Input Firstname"
                                            {...register('firstName', { required: true })}
                                            required
                                        />
                                        <Input
                                            placeholder="Input Middlename"
                                            {...register('middleName', { required: true })}
                                            required
                                        />
                                        <Input
                                            placeholder="Input Lastname"
                                            {...register('lastName', { required: true })}
                                            required
                                        />
                                        <Input
                                            placeholder="Input Username"
                                            {...register('username', { required: true })}
                                            required
                                        />
                                        <Input
                                            type="password"
                                            placeholder="Input Password"
                                            {...register('password', { required: true })}
                                            required
                                        />
                                        <Button type="submit">Submit</Button>
                                    </div>
                                    
                                </form>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </GuestLayout>
        </>
    )
}