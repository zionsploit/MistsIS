import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { IAnnouncement } from "@/Interface/Announcement"
import useGetAnnouncement from "@/hooks/useGetAnnouncement"
import MoonLoader from "react-spinners/MoonLoader"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import Text from "../customUI/Text"

export default () => {
    const [announcement, setAnnouncement] = useState<IAnnouncement[]>([])
    
    const getAnnouncement = useGetAnnouncement()

    useEffect(() => {
            if (getAnnouncement.data) {
                setAnnouncement(getAnnouncement.data)
            }
    }, [getAnnouncement])

    return <>
        <Card className="w-[100%] h-[30rem]">
            <CardHeader>
                <CardTitle>Announcemnt</CardTitle>
            </CardHeader>
            <CardContent>
                {getAnnouncement.isLoading ? <>
                    <div className="mt-32 flex flex-col justify-center items-center">
                        <MoonLoader />
                    </div>
                </> : <>
                    <Carousel>
                        <CarouselContent>
                            {announcement.length > 0 ? announcement.map((event, index) => (
                                <CarouselItem key={index}>
                                    <div className="flex justify-between items-center p-2">
                                        <Text variant="p">{event.title}</Text>
                                        <Text variant="p">{event.date}</Text>
                                    </div>
                                    <img alt="mrms" src={`http://127.0.0.1:8000/storage/${event.imageLink}`} style={{ width: '250px', height: '300px' }} />
                                    <div className="p-2">
                                        <Text variant="h4">Description</Text>
                                        <Text variant="p">{event.description}</Text>
                                    </div>
                                </CarouselItem>
                            )) : <></>}
                        </CarouselContent>
                        {announcement.length > 1 ? <>
                            <CarouselPrevious />
                            <CarouselNext />
                        </> : null}
                    </Carousel>
                </>}
            </CardContent>
        </Card>
    </>
}