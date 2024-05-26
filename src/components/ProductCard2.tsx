import React from "react";
import Image from "next/image";
import productImg from "../assets/product.jpg";
import { Heart, ShoppingCart } from "lucide-react";
import { useAppDispatch } from "../../hooks/redux";
import { addToCart } from "../../redux/cartSlice";
import { addToWishlist } from "../../redux/wishListSlice";

export default function ProductCard2({
    product,
}: {
    product: {
        name: string;
        image: string;
        price: number;
        description: string;
       
    };
}) {

    const dispatch = useAppDispatch();

    const handleAddToCart = () => {
        console.log("Adding to cart:", product);
        dispatch(addToCart(product));
    };

    const handleAddToWishlist = () => {
        dispatch(addToWishlist(product));
    };

    return (
        <section className="flex flex-col p-5 outline outline-1 outline-[#5d5d5d] rounded-2xl hover:outline-pri-50 duration-300">
            <div className="relative">
                <Image
                    src={product?.image || productImg}
                    alt="product"
                    width={500}
                    height={500}
                    className="rounded-2xl w-full h-auto aspect-w-1 aspect-h-1"
                />
                <div className="flex flex-row gap-2 absolute top-0 right-0 p-2">
                    <button className="btn-wishlist" onClick={handleAddToCart}>
                        <ShoppingCart />
                    </button>
                    <button className="btn-wishlist" onClick={handleAddToWishlist}>
                        <Heart />
                    </button>
                </div>
            </div>
            <article>
                <div className="flex items-center justify-between my-5">
                    <h2 className="capitalize font-semibold text-xl">
                        {product?.name || "Product Name"}
                    </h2>
                    <div className="bg-white p-3 text-blk-100 rounded-xl font-semibold">
                        ₹&nbsp;{product?.price || 1000}
                    </div>
                </div>
                <p className="mt-3 mb-8 text-blk-10">
                    {product?.description || (
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </span>
                    )}
                </p>
                <div className="flex items-center gap-3 w-full">
                    <button className="btn-outline2 px-4 py-3 w-full">
                        View Product
                    </button>
                    <button className="btn-outline2 px-4 py-3 w-full">
                        Buy Product
                    </button>
                </div>
            </article>
        </section>
    );
}
