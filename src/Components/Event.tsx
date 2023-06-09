import React from 'react';
import Image from 'next/image';

const Event = () => {
    return (
        <section className='py-16 px-24'>
            <div className="flex flex-col text-center gap-4 mb-8">
                <h3 className="text-[#2B00FF] font-semibold">PROMOTIONS</h3>
                <h2 className="font-bold text-3xl">Our Promotions Events</h2>
            </div>

            <div className="flex justify-between gap-8">
                <div className="flex flex-2 flex-col gap-4">
                    <div className="flex justify-between items-center px-8 bg-[#D6D6D8] text-[#212121]">
                        <div>
                            <h3 className="font-bold text-3xl mb-2 text-black">GET UP TO <span className="font-bolder text-4xl">60%</span></h3>
                            <p className="text-xl text-black">For the summer season</p>
                        </div>
                        <Image src="/assets/image.png" alt="..." width={250} height={250} />
                    </div>

                    <div className="flex flex-col justify-center items-center pt-12 px-8 pb-8 bg-zinc-900 text-white">
                        <h3 className="font-bold text-4xl mb-4">GET 30% Off</h3>
                        <p className="text-lg mb-2">USE PROMO CODE</p>
                        <button className="bg-[#474747] font-bold text-white py-2 px-6 rounded-lg mt-2 tracking-[0.25rem]">
                            DINEWEEKENDSALE
                        </button>
                    </div>
                </div>

                <div className='event-banner-right'>
                    <div className='event-banner-right-1'>
                        <div className='details'>
                            <p>Flex Sweatshirt</p>
                            <div className='price'>
                                <span>$100.00</span>
                                <span>$75.00</span>
                            </div>
                        </div>
                        {/* <Image src={event2} alt='event'  */}
                    </div>

                    <div className='event-banner-right-2'>
                        <div className='details'>
                            <p>Flex Push Button Bomber</p>
                            <div className='price'>
                                <span>$225.00</span>
                                <span>$190.00</span>
                            </div>
                        </div>
                        {/* <Image src={event3} alt='event' /> */}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Event;