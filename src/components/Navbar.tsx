"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Squeeze as Hamburger } from "hamburger-react";
import MobileMenu from "./MobileMenu";
export default function Navbar() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50">
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
                    <button className="btn-primary hidden md:block">
                        Get Started
                    </button>
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
                    <MobileMenu closeMenu={() => setMenuIsOpen(false)} />
                )}
            </AnimatePresence>
        </div>
    );
}
