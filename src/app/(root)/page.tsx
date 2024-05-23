"use client";
import Hero from "@/components/Hero";
import AuthModal from "@/components/AuthModal";
import React from "react";
import { motion } from "framer-motion";
export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-blk-100 px-2"
        >
            <Hero />
            <AuthModal />
        </motion.div>
    );
}
