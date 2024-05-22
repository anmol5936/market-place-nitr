import Orders from "@/components/Orders";
import UserCard from "@/components/UserCard";
export default function Page() {
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
    return (
        <main className="grid place-items-center gap-10 px-20 py-10">
            <h1 className="text-4xl ">My Profile</h1>
            <div className="flex w-full justify-around mt-10">
                <div className="">
                    <UserCard
                        user={{
                            name: "John Doe",
                            email: "johndoe@gmail.com",
                            phone: "9340123632",
                            img: "",
                            rollno: "123ch2324",
                        }}
                    />
                    <div className="grid grid-cols-2 gap-5  mt-5">
                        <button className="btn-primary">My Orders</button>
                        <button className="btn-outline">My Wishlist</button>
                        <button className="btn-outline">My Items</button>
                        <button className="btn-outline">Edit Profile</button>
                    </div>
                </div>
                <div className="bg-blk-50 rounded-xl px-5 py-5 overflow-y-scroll h-[30rem] w-[35rem]">
                    <Orders products={products} />
                </div>
            </div>
        </main>
    );
}
