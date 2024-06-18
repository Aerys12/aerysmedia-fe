import Image from "next/image";
import Link from "next/link";
import services from "../../../../hero-services.json";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

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
};

export default async function HeroServices() {
	return (
		
			<div className=' grid gap-4 p-4 md:p-8 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
				{services.map(
					(service: Service) => (
						console.log(service.service_image_url),
						(
							<Card key={service.id}>
								<div className='w-full h-64'>
									<Image
										src={`https://d1dh6nb6nxzrno.cloudfront.net/media/${service.service_image_url}`}
										alt={service.name}
										width={400}
										height={400}
										sizes='(min-width: 1040px) calc(25vw - 42px), (min-width: 780px) calc(50vw - 50px), calc(100vw - 34px)'
										className='object-cover h-64'
									></Image>
								</div>
								<CardHeader>
									<Link href={`${service.service_page}`}>
										<CardTitle>{service.name}</CardTitle>
									</Link>
								</CardHeader>
							</Card>
						)
					)
				)}
			</div>
		
	);
}
