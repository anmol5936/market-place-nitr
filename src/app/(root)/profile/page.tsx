"use client";
import { useState } from "react";
import Orders from "@/components/Orders";
import UserCard from "@/components/UserCard";
import { motion, AnimatePresence } from "framer-motion";
import Wishlist from "@/components/Wishlist";
import MyListings from "@/components/MyListings";
import EditProfile from "@/components/EditProfile";
export default function Page() {
    const [activeTab, setActiveTab] = useState("orders");

    const product = {
        name: "Camera",
        price: 200,
        img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        order_id: "1234",
        product_id: "500",
        date: "12 January 2024",
        status: "Delivered",
        payment: "Paid",
    };
    const products = [product, product, product, product];

    const wishlistedProduct = {
        name: "Camera",
        price: 200,
        img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        product_id: "500",
        soldOut: false,
        shortDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veniam assumenda, pariatur ",
        productAge: "2 years",
    };

    const wishlistedProducts = [
        wishlistedProduct,
        wishlistedProduct,
        wishlistedProduct,
        wishlistedProduct,
    ];

    const mylisting = {
        img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Camera",
        price: 200,
        product_id: "500",
        quantity: 2,
    };

    const mylistings = [mylisting, mylisting, mylisting, mylisting];
    return (
        <main className="grid place-items-center gap-10 md:px-20 md:py-10 p-5">
            <div className="flex flex-col xl:flex-row w-full justify-around mt-10 gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3, ease: [0.2, 1, 0.2, 1] }}
                    className="flex flex-col items-center justify-center"
                >
                    <h1 className="text-3xl mb-10">My Profile</h1>
                    <UserCard
                        user={{
                            name: "John Doe",
                            email: "johndoe@gmail.com",
                            phone: "9340123632",
                            img: "",
                            rollno: "123ch2324",
                        }}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                        <button
                            className={
                                activeTab === "orders"
                                    ? "btn-primary"
                                    : "btn-outline"
                            }
                            onClick={() => setActiveTab("orders")}
                        >
                            My Orders
                        </button>
                        <button
                            className={
                                activeTab === "wishlist"
                                    ? "btn-primary"
                                    : "btn-outline"
                            }
                            onClick={() => setActiveTab("wishlist")}
                        >
                            My Wishlist
                        </button>
                        <button
                            className={
                                activeTab === "mylistings"
                                    ? "btn-primary"
                                    : "btn-outline"
                            }
                            onClick={() => setActiveTab("mylistings")}
                        >
                            My Listings
                        </button>
                        <button
                            className={
                                activeTab === "profile"
                                    ? "btn-primary"
                                    : "btn-outline"
                            }
                            onClick={() => setActiveTab("profile")}
                        >
                            Edit Profile
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.3,
                        ease: [0.2, 1, 0.2, 1],
                        delay: 0.2,
                    }}
                    className="md:bg-blk-50 rounded-xl md:px-5 md:py-5 overflow-y-scroll h-[33rem] w-full"
                >
                    <AnimatePresence>
                        {activeTab === "orders" && (
                            <Orders products={products} />
                        )}
                        {activeTab === "wishlist" && (
                            <Wishlist products={wishlistedProducts} />
                        )}
                        {activeTab === "mylistings" && (
                            <MyListings products={mylistings} />
                        )}
                        {activeTab === "profile" && <EditProfile />}
                    </AnimatePresence>
                </motion.div>
            </div>
        </main>
    );
}
