"use client";
import ProductCard2 from "@/components/ProductCard2";
import { Input } from "@/components/ui/input";
import React from "react";
import { motion } from "framer-motion";
const products = [
    {
        name: "Smartphone",
        price: 799,
        description:
            "A high-end smartphone with a sleek design, powerful processor, and excellent camera quality.",
        image: "https://images.pexels.com/photos/6632995/pexels-photo-6632995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        name: "Laptop",
        price: 1299,
        description:
            "A powerful laptop with a fast processor, ample storage, and high-resolution display, perfect for work and entertainment.",
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        name: "Wireless Headphones",
        price: 199,
        description:
            "Comfortable wireless headphones with noise-canceling features and long battery life.",
        image: "https://images.pexels.com/photos/815494/pexels-photo-815494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        name: "Smart Watch",
        price: 249,
        description:
            "A stylish smart watch with fitness tracking, heart rate monitoring, and notification features.",
        image: "https://images.pexels.com/photos/110471/pexels-photo-110471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        name: "4K TV",
        price: 999,
        description:
            "A 55-inch 4K Ultra HD TV with stunning picture quality and smart TV capabilities.",
        image: "https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        name: "Gaming Console",
        price: 499,
        description:
            "A popular gaming console with a vast library of games and immersive graphics.",
        image: "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        name: "Bluetooth Speaker",
        price: 149,
        description:
            "A portable Bluetooth speaker with rich sound quality and a durable design.",
        image: "https://images.pexels.com/photos/1173651/pexels-photo-1173651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        name: "Digital Camera",
        price: 649,
        description:
            "A high-resolution digital camera with interchangeable lenses and advanced features for photography enthusiasts.",
        image: "https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        name: "Fitness Tracker",
        price: 99,
        description:
            "A sleek fitness tracker that monitors your activity levels, sleep patterns, and more.",
        image: "https://images.pexels.com/photos/437036/pexels-photo-437036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        name: "Tablet",
        price: 599,
        description:
            "A versatile tablet with a high-resolution display, powerful processor, and a variety of apps for work and play.",
        image: "https://images.pexels.com/photos/2320369/pexels-photo-2320369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
];

export default function Page() {
    return (
        <motion.main
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: [0.2, 1, 0.2, 1],
            }}
            className="p-5 md:p-10 lg:p-20 h-full"
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
            <div className="columns-1 mtb:columns-2 lg:columns-3 gap-5 space-y-5 w-full">
                {products.length > 0 &&
                    products.map((product, index) => (
                        <ProductCard2 key={index} product={product} />
                    ))}
            </div>
        </motion.main>
    );
}
