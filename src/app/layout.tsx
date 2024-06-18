import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "./(customerFacing)/_components/NavBar";
import Footer from "./(customerFacing)/_components/Footer";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Aerys Media Photography",
	description: "Toronto-based photographer specializing in portraits, events, and more.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					"flex flex-col min-h-screen w-full  bg-background font-sans antialiased",
					inter.variable
				)}
			>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
