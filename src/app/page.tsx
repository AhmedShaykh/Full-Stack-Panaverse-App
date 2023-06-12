import React from "react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";
import Event from "@/Components/Event";
import Products from "@/Components/Products";

const Home = async () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Event />
            <Products />
            <Footer />
        </>
    )
};

export default Home;