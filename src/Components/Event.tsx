import React from "react";
import Image from "next/image";

const Event = () => {
    return (
        <div className="my-16 mx-12 sm:mx-24">
            <div className="flex flex-col text-center gap-4 mb-8">
                <h3 className="text-[#2B00FF] font-semibold">PROMOTIONS</h3>
                <h2 className="font-bold text-3xl">Our Promotions Events</h2>
            </div>

            <div className="w-full flex flex-col py-2 xl:flex-row gap-8">
                <div className="flex flex-col w-full xl:w-1/2 space-y-4">
                    <div className="flex justify-around xl:justify-between sm:justify-between items-center px-4 sm:px-8 bg-[#D6D6D8] text-[#212121]">
                        <div>
                            <h3 className="font-bold text-xl sm:text-3xl mb-2 text-black">GET UP TO <span className="font-bolder text-2xl sm:text-4xl">60%</span></h3>
                            <p className="text-lg sm:text-xl text-black">For the summer season</p>
                        </div>
                        <Image src="/assets/image.png" alt="image" width={270} height={200} />
                    </div>

                    <div className="flex flex-col justify-center items-center pt-12 px-8 pb-8 bg-zinc-900 text-white">
                        <h3 className="font-bold text-4xl mb-4">GET 30% Off</h3>
                        <p className="text-lg mb-2">USE PROMO CODE</p>
                        <button className="bg-[#474747] font-bold text-white py-2 px-6 rounded-lg mt-2 tracking-[0.25rem]">
                            DINEWEEKENDSALE
                        </button>
                    </div>
                </div>

                <div className="flex flex-1 justify-between items-center gap-4">
                    <div className="flex w-full xl:w-1/2 flex-col justify-between items-center pt-6 bg-[#EFE1C7]">
                        <div className="w-full xl:w-1/2 ml-6 flex flex-col">
                            <p className="font-medium text-lg mb-2">Flex Sweatshirt</p>
                            <div className="space-x-4 mb-2">
                                <del>$100.00</del>
                                <span className="text-xl font-semibold">$75.00</span>
                            </div>
                        </div>
                        <Image src="/assets/image2.png" alt="image" width={270} height={200} />                   </div>

                    <div className="flex w-full xl:w-1/2 flex-col justify-between items-center pt-6 bg-[#D7D7D9]">
                        <div className="w-full xl:w-1/2 ml-6">
                            <p className="font-medium text-lg mb-2">Flex Push Button Bomber</p>
                            <div className="space-x-4 mb-2">
                                <del>$225.00</del>
                                <span className="text-xl font-semibold">$190.00</span>
                            </div>
                        </div>
                        <Image src="/assets/image3.png" alt="image" width={270} height={200} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Event;