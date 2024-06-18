import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
type Service = {
	id: number;
	name: string;
	hero_description: string;
	description: string;
	service_image: string;
	service_image_url: string;
	parent: number | null;
	hero_gallery: number | null;
	full_gallery: number | null;
	service_page: string | null;
	hero1: string;
	hero2: string;
};
export default function HomeHeroLeft({ service }: { service: Service }) {
	return (
		<div
			className='grid md:grid-cols-2 items-center gap-4 md:gap-8'
			key={service.id}
		>
			<div className='flex flex-col gap-4 md:gap-8 p-2 md:p-8'>
				<div className='text-6xl flex flex-col text-center'>
					<h1>{service.name}</h1>
					<h1 className='font-extralight text-end'>Photography</h1>
				</div>
				<div className='flex flex-col items-start justify-center gap-4 md:gap-8'>
					<p className="text-xl">{service.description}</p>
					<div>
						<Button asChild>
							<Link className="md:text-xl" href={`${service.service_page}`}>
								More {service.name} Photography
								<ArrowBigRight className='h-6 w-6' />
							</Link>
						</Button>
					</div>
				</div>
			</div>
			<div className='grid h-full w-full'>
				
				<div className='grid h-full items-center'>
					<Image
						className='object-contain h-5/6 w-full'
						alt='engagement photo'
						src={service.hero2}
						width={500}
						height={500}
					></Image>
				</div>
			</div>
		</div>
	);
}
