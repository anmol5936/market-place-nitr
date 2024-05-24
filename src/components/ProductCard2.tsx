import React from "react";
import Image from "next/image";
import productImg from "../assets/product.jpg";

export default function ProductCard2({
    product,
}: {
    product: {
        name: string;
        price: number;
        description: string;
        // image: string;
    };
}) {
    return (
        <section className="flex flex-col p-5 outline outline-1 outline-[#5d5d5d] rounded-2xl">
            <div className="">
                <Image
                    // src={product?.image || productImg}
                    src={productImg}
                    alt="product"
                    width={500}
                    height={500}
                    className="rounded-2xl w-full h-auto aspect-w-1 aspect-h-1"
                />
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
