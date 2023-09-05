"use client";
import Link from "next/link";

const Error = () => {
    return (
        <div className="wrapper flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-[3rem]">
                No Page Exist...
            </h1>

            <Link
                className="my-8 text-xl font-bold text-blue-600 hover:text-blue-800"
                href="/"
            >
                Go Back
            </Link>
        </div>
    );
}

export default Error;