import GallerySection from "../_components/GalleryTabs";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function GalleriesPage() {
	return (
		<div className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
			<div className='flex items-center'>
				<div className='ml-auto flex items-center gap-2'>
					<Button size='sm' className='h-8 gap-1' asChild>
						<Link href='/admin/galleries/create'>
							<PlusCircle className='h-3.5 w-3.5' />
							<span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
								Create Gallery
							</span>
						</Link>
					</Button>
				</div>
			</div>
			<GallerySection />
		</div>
	);
}
