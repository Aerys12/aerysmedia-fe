import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "./(customerFacing)/_components/NavBar";
import Footer from "./(customerFacing)/_components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Aerys Media Photography",
	description:
		"Capture your special moments with our Toronto-based photography services. Specializing in portraits, headshots, events, and more, we bring your memories to life with stunning visuals and professional quality.",
	keywords:
		"Toronto photographer, portrait photography, headshot photography, event photography, professional photography, Toronto portraits, Toronto headshots, Toronto events, family photography, corporate photography, engagement photography, Toronto photography services",
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
