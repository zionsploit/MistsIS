import { Link } from "@inertiajs/react"
import { ReactNode } from "react"

interface ILabel {
    label: string,
    link: string,
    icon: ReactNode
}

export default function Nav(props: {label: ILabel}) {
    return <>
        <div className="w-[15rem]">
            <div className="w-full flex justify-between items-center">
                <Link href={props.label.link} className="w-full flex justify-between items-center gap-1 my-1 group">
                    <div className="w-full flex justify-start items-center gap-5">
                        <div className="bg-gray-300 p-1 rounded">
                            {props.label.icon}
                        </div>
                        <p className={`font-medium text-md`}>{props.label.label}</p>
                    </div>
                </Link>
            </div>
        </div>
    </>
}