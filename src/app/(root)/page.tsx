"use client";
import Hero from "@/components/Hero";
import AuthModal from "@/components/AuthModal";
import React from "react";
import { motion } from "framer-motion";
export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 1, 0.2, 1] }}
            className="bg-blk-100 px-2"
        >
            <Hero />
            <AuthModal />
        </motion.div>
    );
}
