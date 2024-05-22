import Link from "next/link";
import React from "react";

export default function ProductCard({
    product,
}: {
    product: {
        name: string;
        price: number;
        img: string;
        order_id: string;
        product_id: string;
        date: string;
        status: string;
        payment: string;
    };
}) {
    return (
        <div className="flex justify-between mt-5 bg-blk-100 p-5 rounded-lg shadow-lg">
            <div className="flex flex-col items-center">
                <img
                    src={product.img}
                    alt="Product Image"
                    className="w-52 h-full object-cover rounded-md"
                />
            </div>
            <div className="flex flex-col ml-5 w-52 justify-between">
                <div>
                    <p className="text-lg font-semibold text-blk-20">
                        {product.name}
                    </p>
                    <p className="text-lg font-semibold text-blk-20">
                        Order ID: {product.order_id}
                    </p>
                    <p className="text-sm text-blk-20">Date: {product.date}</p>
                    <p className="text-sm text-blk-20">
                        Status:{" "}
                        <span className="text-grn-50">{product.status}</span>
                    </p>
                    <p className="text-sm text-blk-20">
                        Total: ₹{product.price}
                    </p>
                    <p className="text-sm text-blk-20">
                        Payment: {product.payment}
                    </p>
                </div>
                <Link
                    href={`/products?id=${product.product_id}`}
                    className="mt-2 bg-pri-100 text-black text-sm px-3 py-2 rounded-md hover:bg-pri-20 transition text-center w-full font-semibold"
                >
                    View Product
                </Link>
            </div>
        </div>
    );
}
