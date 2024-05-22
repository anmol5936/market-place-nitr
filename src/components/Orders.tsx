import React from "react";
import ProductCard from "./ProductCard";
export default function Orders({
    products,
}: {
    products: {
        name: string;
        price: number;
        img: string;
        order_id: string;
        product_id: string;
        date: string;
        status: string;
        payment: string;
    }[];
}) {
    return (
        <div>
            <h2 className="text-2xl capitalize">My Orders</h2>
            <div className="flex items-center gap-2 my-5">
                <button className="btn-primary2 py-1 px-2 ">Delivered</button>
                <button className="btn-outline2 py-1 px-2">Processing</button>
                <button className="btn-outline2 py-1 px-2">Cancelled</button>
            </div>
            <div className="flex flex-col ">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
}
