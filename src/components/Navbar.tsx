"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Squeeze as Hamburger } from "hamburger-react";
import MobileMenu from "./MobileMenu";
import { LogOut } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import axios from "axios";
export default function Navbar() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const userToken = localStorage.getItem("token_mpnit");
        if (userToken) {
            setIsLoggedIn(true);
            console.log("User is logged in");
        }
        console.log(userToken);
    }, []);
    function triggerModal() {
        const trigger = document.getElementById("triggerLoginModal");
        trigger?.click();
    }

    const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
    async function handleLogout() {
        try {
            await axios.get(apiEndpoint + "/users/signout");
            localStorage.removeItem("token_mpnit");
            setIsLoggedIn(false);
            toast.success("Logged out successfully");
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong");
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 1, 0.2, 1], delay: 0.3 }}
            className="sticky top-0 z-50"
        >
            <nav className="lg:px-24 px-5 md:px-14 py-8 flex flex-row items-center justify-between  bg-blk-100">
                <div id="logo" className="text-3xl md:hidden lg:block">
                    Logo
                </div>
                <div id="center" className="md:flex flex-row gap-10 hidden">
                    <Link href={"/"} className="active-link">
                        Home
                    </Link>
                    <Link href={"/about"} className="link">
                        About
                    </Link>
                    <Link href={"/contact"} className="link">
                        Contact
                    </Link>
                    <Link href={"/products"} className="link">
                        Products
                    </Link>
                </div>
                <div className="">
                    {isLoggedIn ? (
                        <div className="items-center hidden md:flex gap-5">
                            <button className="btn-primary">Profile</button>
                            <button
                                className="btn-outline-icon"
                                onClick={handleLogout}
                            >
                                <LogOut size={20} />
                            </button>
                        </div>
                    ) : (
                        <button
                            className="btn-primary hidden md:block"
                            onClick={triggerModal}
                        >
                            Login
                        </button>
                    )}
                    <button
                        className="md:hidden"
                        onClick={() => setMenuIsOpen(!menuIsOpen)}
                    >
                        <Hamburger size={24} toggled={menuIsOpen} />
                    </button>
                </div>
            </nav>
            <AnimatePresence>
                {menuIsOpen && (
                    <MobileMenu
                        closeMenu={() => setMenuIsOpen(false)}
                        triggerModal={triggerModal}
                        handleLogout={handleLogout}
                        isLoggedIn={isLoggedIn}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
}
