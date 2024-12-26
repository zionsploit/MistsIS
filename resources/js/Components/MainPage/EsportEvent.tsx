import Text from "../customUI/Text"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { useEffect, useState } from "react"
import useGetESportsEvents from "@/hooks/useGetESportsEvents"
import { IESportsEvents } from "@/Interface/ESports"
import MoonLoader from "react-spinners/MoonLoader";

export default () => {
    const [events, setEvent] = useState<IESportsEvents[]>([])

    const getESportsEvents = useGetESportsEvents()

    useEffect(() => {
            if (getESportsEvents.data) {
                setEvent(getESportsEvents.data)
            }
    }, [getESportsEvents])

    return <>
        <Card className="w-[45rem] h-[30rem]">
            <CardHeader>
                <CardTitle>Esports Event</CardTitle>
            </CardHeader>
            <CardContent>
                {getESportsEvents.isLoading ? <>
                    <div className="mt-32 flex flex-col justify-center items-center">
                        <MoonLoader />
                    </div>
                </> : <>
                    <Carousel>
                        <CarouselContent>
                            {events.length > 0 ? events.map((event, index) => (
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
                        {events.length > 1 ? <>
                            <CarouselPrevious />
                            <CarouselNext />
                        </> : null}
                    </Carousel>
                </>}
            </CardContent>
        </Card>
    </>
}