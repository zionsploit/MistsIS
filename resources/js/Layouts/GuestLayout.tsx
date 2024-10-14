import Navigation from "@/Components/GuestNavigation";
import { ReactNode } from "react";

export default function GuestLayout({ children }: {children: ReactNode}) {
    return (
        <main className="w-full flex flex-col justify-start items-start gap-3">
            <div className="w-full p-3">
                <Navigation />
            </div>
            <div className="w-full">
                {children}
            </div>
        </main>
    )
}