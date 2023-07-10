import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <div className="my-4 mx-12 sm:mx-20">
            <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">

                        <div className="mb-5">
                            <Link href="/">
                                <Image
                                    src="/Logo.webp"
                                    alt="Logo"
                                    width={150}
                                    height={150}
                                />
                            </Link>
                        </div>

                        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-3">
                            <Link className="cursor-pointer bg-gray-900 p-2 text-white rounded-lg" href="https://www.instagram.com/AHMXMusic/" target="_blank">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link className="cursor-pointer bg-gray-900 p-2 text-white rounded-lg" href="https://twitter.com/AHMXMusic/" target="_blank">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link className="cursor-pointer bg-gray-900 p-2 text-white rounded-lg" href="https://github.com/AhmedShaykh/" target="_blank">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link className="cursor-pointer bg-gray-900 p-2 text-white rounded-lg" href="https://www.linkedin.com/in/ahmedshaykh/" target="_blank">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase">Company</h2>
                            <h2 className="mb-4 text-md text-gray-900 font-medium">About</h2>
                            <h2 className="mb-4 text-md text-gray-900 font-medium">Terms of Use</h2>
                            <h2 className="mb-4 text-md text-gray-900 font-medium">Privacy Policy</h2>
                        </div>

                        <div>
                            <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase">Support</h2>
                            <h2 className="mb-4 text-md text-gray-900 font-medium">Support Carrer</h2>
                            <h2 className="mb-4 text-md text-gray-900 font-medium">24h Service</h2>
                            <h2 className="mb-4 text-md text-gray-900 font-medium">Quick Chat</h2>
                        </div>

                        <div>
                            <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase">Contact</h2>
                            <h2 className="mb-4 text-md text-gray-900 font-medium">Whatsapp</h2>
                            <h2 className="mb-4 text-md text-gray-900 font-medium">Twitter</h2>
                            <h2 className="mb-4 text-md text-gray-900 font-medium">Support 24h</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;