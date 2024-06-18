"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
type Image = {
	id: number;
	title: string;
	description: string | null;
	image_file: string;
	uploaded_at: string;
	gallery: number;
};
type GalleryProps = {
	images: Image[];
};

export default function Gallery({ images }: GalleryProps) {
	const [isLoading, setLoading] = useState(true);
	return (
		<div className='w-full grid md:grid-cols-2 lg:grid-cols-4 gap-8 space-y-1 px-2 bg-black '>
			{images?.map((image: Image) => (
				<div
					key={image.id}
					className='h-96 w-full relative break-inside-avoid overflow-hidden'
				>
					<Image
						src={`https://d1dh6nb6nxzrno.cloudfront.net/media/${image.title}`}
						alt='hero image'
                        width={150}
                        height={150}
						
						sizes='(min-width: 1040px) calc(33.37vw - 30px), (min-width: 780px) calc(50vw - 42px), calc(100vw - 48px)'
						className={cn(
							"w-full object-contain transition-all hover:scale-125 duration-500",
							isLoading
								? "grayscale blur-2xl scale-110"
								: "grayscale-0 blur-0 scale-100"
						)}
						onLoad={() => setLoading(false)}
					/>
				</div>
			))}
		</div>
	);
}
