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
                   </Card>
                </div>
            </GuestLayout>
        </>
    )
}