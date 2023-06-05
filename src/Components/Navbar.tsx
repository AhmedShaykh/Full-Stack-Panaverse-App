"use client";
import { useState } from "react";
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { CgShoppingCart } from 'react-icons/cg';
import Link from "next/link";
import Image from "next/image";

interface NavItem {
    label: string
    page: string
};

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Female",
        page: "/female",
    },
    {
        label: "Male",
        page: "/male",
    },
    {
        label: "Kids",
        page: "/kids",
    },
    {
        label: "All Products",
        page: "products",
    }
];

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    return (
        <header className="w-full mx-auto px-8 sm:px-20 z-10 top-0 shadow">
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-6 md:py-8 md:block">
                        <Link href="/">
                            <Image
                                src="/Logo.webp"
                                alt="Logo"
                                width={150}
                                height={150}
                            />
                        </Link>

                        <div className="md:hidden">
                            <button
                                className="p-2 text-black font-semibold rounded-md outline-none"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? <XMarkIcon className='h-6 w-6' /> : <Bars2Icon className='h-6 w-6' />}
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 
                        ${navbar ? "block" : "hidden"}`}
                    >
                        <div className="flex flex-col items-center justify-center space-y-8 my-4 md:my-0 md:flex-row md:space-x-8 md:space-y-0">
                            {NAV_ITEMS.map((item, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        href={item.page}
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        <h2
                                            className="block lg:inline-block text-gray-900 cursor-pointer font-medium text-lg"
                                        >
                                            {item.label}
                                        </h2>
                                    </Link>
                                )
                            })}
                            <Link href="/cart">
                                <button className="bg-gray-400 p-2 rounded-full text-black">
                                    <CgShoppingCart size={22} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Navbar;