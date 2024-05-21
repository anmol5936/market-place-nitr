import Hero from "@/components/Hero";
import AuthModal from "@/components/AuthModal";
import React from "react";

export default function Home() {
    return (
        <div className="bg-blk-100 px-2">
            <Hero />
            <AuthModal />
        </div>
    );
}
