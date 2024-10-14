import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/Components/ui/carousel';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import carousel_1 from '../../assets/carousel_1.jpg'
import carousel_2 from '../../assets/carousel_2.jpg'
import carousel_3 from '../../assets/carousel_3.jpg'
import carousel_4 from '../../assets/carousel_4.jpg'
import jhcscSportsClub from '../../assets/jhcsc_sports_club.jpg'

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <GuestLayout>
                <div className='w-full flex justify-center items-center gap-4'>
                    <div className='w-[80rem] flex justify-between items-start gap-10 mt-20'>
                        <div className='w-full gap-5 flex flex-col justify-center items-start'>
                            <h1 className='text-5xl font-semibold'>Welcome to Masts Information System</h1>
                            <p className='text-md font-semibold tracking-wide text-gray-500'>Empowering you with comprehensive and real-time data solutions. 
                                Our platform provides seamless access to a vast array of information, ensuring that you stay informed and make data-driven decisions with ease. 
                                Whether you're managing resources, analyzing trends, or keeping up with the latest updates, Mass Information System is your trusted partner for accurate and timely information. 
                                <br/><span className='italic text-sm'>- ChatGPT (2024)</span></p>
                        </div>
                        <div className='w-full'>
                            <Carousel>
                                <CarouselContent>
                                    <CarouselItem>
                                        <img src={carousel_1} />
                                    </CarouselItem>
                                    <CarouselItem>
                                        <img src={carousel_2} />
                                    </CarouselItem>
                                    <CarouselItem>
                                        <img src={carousel_3} />
                                    </CarouselItem>
                                    <CarouselItem>
                                        <img src={carousel_4} />
                                    </CarouselItem>
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <img src={jhcscSportsClub} />
                </div>
            </GuestLayout>
        </>
    );
}
