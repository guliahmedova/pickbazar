"use client"
import Categories from "@/components/home/categories";
import Hero from "@/components/home/hero";
import Navbar from "@/components/navbar";
import RegisterModal from "@/components/modals/registermodal";
import { useState } from "react";

const Home = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Navbar setOpenModal={setOpenModal} />
            <Hero />
            <RegisterModal openModal = {openModal} setOpenModal={setOpenModal} />
            <Categories />
        </>
    )
};

export default Home;
