import SignIn from "@/Components/Signin";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { Checkbox } from "@/Components/ui/checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

export default function Login() {

    return (
        <>
            <Head title="Login" />
            <GuestLayout>
                <div className="w-full flex justify-center items-start">
                    <Card className="w-[25rem] mt-20">
                        <CardHeader>
                            <CardTitle>Login Page</CardTitle>
                            <CardDescription>Welcome back user!</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <SignIn />
                        </CardContent>
                        <CardFooter>
                           <div className="flex justify-start items-center gap-3">
                                <Checkbox id="loginAsSu" />
                                <label htmlFor="loginAsSu" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Login as SU</label>
                           </div>
                        </CardFooter>
                   </Card>
                </div>
            </GuestLayout>
        </>
    )
}