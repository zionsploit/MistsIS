import { Button } from "./ui/button";
import { DialogFooter } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function SignIn() {
    return <>
        <div className='flex flex-col justify-start gap-3 items-start w-full'>
            <div className='w-full'>
                <Label htmlFor="username" className="text-right">
                    Username
                </Label>
                <Input
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
                    id="username"
                    className="w-full"
                />
            </div>
        </div>
        <DialogFooter className='w-full mt-5'>
            <Button className='w-full' type="submit">Login</Button>
        </DialogFooter>
    </>
}