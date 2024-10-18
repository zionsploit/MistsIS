import { Alert, AlertTitle } from "@/Components/ui/alert"
import AdminLayout from "@/Layouts/AdminLayout"
import { Head } from "@inertiajs/react"
import { IconAlertHexagon } from "@tabler/icons-react"

export default function () {
    return <>
        <Head title="Admin" />
        <AdminLayout>
            <div className="w-full">
                <Alert variant="default" className="w-full">
                    <div className="flex justify-start items-center">
                        <IconAlertHexagon className="w-[50px]" />
                        <AlertTitle className="font-semibold text-lg">Welcome Admin!</AlertTitle>
                    </div>
                </Alert>
            </div>
        </AdminLayout>
    </>
}