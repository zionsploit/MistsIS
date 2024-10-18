import { Link, usePage } from "@inertiajs/react"
import { IconChevronUp } from "@tabler/icons-react"
import { ReactNode, useState } from "react"

interface INavList {
    label: string,
    link: string
}

interface ILabel {
    label: string,
    icon: ReactNode
}

export default function NavList(props: {label: ILabel, subLinks: Array<INavList>}) {
    const {url} = usePage()

    const [opened, setOpened] = useState<boolean>(props.subLinks.some(val => val.link == url))

    return <>
        <div className="w-[15rem]">
            <div className="w-full flex justify-between items-center">
                <button className="w-full flex justify-between items-center gap-1 my-1" onClick={() => setOpened(!opened)}>
                    <div className="w-full flex justify-start items-center gap-5">
                        <div className="bg-gray-300 p-1 rounded">
                            {props.label.icon}
                        </div>
                        <p className="font-medium text-md">{props.label.label}</p>
                    </div>
                    <IconChevronUp className="transition-all" style={{
                        transform: opened ? 'rotate(-180deg)' : 'none',
                    }} color="gray" />
                </button>
            </div>
            {opened ? <>
                <div className="transition-all flex flex-col justify-start items-start ml-3.5 border-l-[1.5px] border-gray-400 px-3 gap-1">
                    {props.subLinks.length > 0 ? props.subLinks.map((link, index) => 
                        <Link href={link.link} className={`font-medium text-sm p-2 tracking-wide ${url == link.link ? 'bg-gray-400/30' : 'hover:bg-gray-400/30'} rounded cursor-pointer transition-all w-full`} key={index} preserveState>{link.label}</Link>
                    ) : null}
                </div>
            </> : null}
        </div>
    </>
}