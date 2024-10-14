import SignIn from "./Signin";
import SignUp from "./Signup";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function Navigation() {
    return (
        <div className='w-full flex justify-between items-center p-1 border-2 border-gray-400 rounded'>
            <p className='text-xl ml-3 font-semibold tracking-wide'>MASTS INFORMATION SYSTEM</p>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="default" className="rounded">Get Started</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] flex flex-col justify-center items-center">
                    <DialogHeader className='flex flex-col justify-center items-center'>
                        <DialogTitle className='text-3xl'>Welcome</DialogTitle>
                        <DialogDescription className='text-lg'>
                            Masts Information System
                        </DialogDescription>
                    </DialogHeader>
                    <Tabs className="w-full" defaultValue="signin">
                        <TabsList className="w-full">
                            <TabsTrigger className="w-full uppercase font-bold" value="signin">Sign In</TabsTrigger>
                            <TabsTrigger className="w-full uppercase font-bold" value="signup">Sign Up</TabsTrigger>
                        </TabsList>
                        <TabsContent value="signin">
                            <SignIn />
                        </TabsContent>
                        <TabsContent value="signup">
                            <SignUp />
                        </TabsContent>
                    </Tabs>
                </DialogContent>
            </Dialog>
        </div>
    )
}