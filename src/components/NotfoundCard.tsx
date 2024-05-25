"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
export default function NotfoundCard() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }}
            className="bg-pri-100 rounded-3xl w-full "
        >
            <div className="flex flex-col items-center justify-center h-96 p-5">
                <h1 className="text-5xl text-blk-100">404</h1>
                <p className="mt-10 text-lg  text-blk-50 text-center">
                    Well Somethings not right here! Lets go back
                </p>
                <Link href="/">
                    <p className="btn-outline-blk mt-10">Go Back</p>
                </Link>
            </div>
        </motion.div>
    );
}
