import {
	Card,
	CardHeader,
	CardContent,
	CardFooter,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import services from "../../../../services.json";
import Link from "next/link";

export default function Services() {
	return (
		<div className='container grid p-0'>
			<div className='grid items-center p-4 md:p-8'>
				<h1 className='text-center text-3xl md:text-5xl font-bold'>
					Choose a service to get started
				</h1>
			</div>
			<div className='grid grid-cols-2 gap-4 p-4 md:p-8 md:grid-cols-3 md:gap-8 lg:grid-cols-5'>
				{services.map((service) => (
					<Link href={`/services/${service.id}`} key={service.id}>
						<Card className='items-center drop-shadow-md' key={service.id}>
							<CardHeader className='items-center'>
								<CardTitle>{service.name}</CardTitle>
								<CardDescription>Photography</CardDescription>
							</CardHeader>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}
