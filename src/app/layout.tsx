import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--poppins",
});
const dm_sans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--dm_sans",
});

export const metadata: Metadata = {
    title: "NITR - MarketPlace",
    description: "A marketplace for NITR students to buy and sell products.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <main className="bg-blk-100 text-white">
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    );
}
