"use client";
import ProductCard2 from "@/components/ProductCard2";
import { Input } from "@/components/ui/input";
import React from "react";
import { motion } from "framer-motion";
const product = {
    name: "Product Name",
    price: 1000,
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // image: "/assets/product.jpg",
};
const products = [product, product, product, product, product, product];
export default function Page() {
    return (
        <motion.main
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: [0.2, 1, 0.2, 1],
            }}
            className="p-4 lg:p-20"
        >
            <div className="flex flex-col mtb:flex-row xl:items-center justify-between w-full">
                <h1 className="text-3xl lg:text-4xl font-semibold mb-4 lg:mb-0">
                    Products
                </h1>
                <Input
                    placeholder="Search.."
                    className="w-full mtb:w-96 rounded-2xl outline outline-1 outline-[#5d5d5d] py-2 lg:py-5"
                />
            </div>
            <p className="my-5 text-lg">Showing 10 results for query</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {products.length > 0 &&
                    products.map((product, index) => (
                        <ProductCard2 key={index} product={product} />
                    ))}
            </div>
        </motion.main>
    );
}
