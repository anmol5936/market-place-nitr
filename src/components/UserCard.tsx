import React from "react";

export default function UserCard({
    user,
}: {
    user: {
        name: string;
        email: string;
        phone: string;
        img: string;
        rollno: string;
    };
}) {
    return (
        <div className="bg-blk-50 md:w-96 gap-5 w-72 rounded-xl px-5 py-5 flex md:flex-row flex-col items-center justify-between">
            <div>
                <img
                    src={
                        user.img
                            ? user.img
                            : "https://randomuser.me/api/portraits/men/75.jpg"
                    }
                    alt="Profile"
                    className="rounded-full w-32 h-32"
                />
            </div>
            <div>
                <h2 className="text-2xl capitalize">{user.name}</h2>
                <p className="uppercase text-blk-20">{user.rollno}</p>
                <p className="text-sm text-blk-20">{user.email}</p>
                <p className="text-sm text-blk-20">{user.phone}</p>
            </div>
        </div>
    );
}
