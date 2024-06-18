import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import services from "../../../../services.json";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail } from "lucide-react";
export default function Footer() {
	return (
		<div className='container p-0 bottom-0 bg-slate-50'>
			<footer className='text-center flex flex-col md:flex-row gap-8 md:gap-0 p-4 md:p-8'>
				<nav className='flex flex-1 w-full flex-col gap-4  text-lg font-medium items-center md:items-start md:justify-center  md:text-sm'>
					<Link
						href='/'
						className='text-foreground text-lg transition-colors hover:text-foreground'
					>
						Home
					</Link>
					<Link
						href='/portraits'
						className='text-muted-foreground text-lg transition-colors hover:text-foreground'
					>
						Portraits
					</Link>
					<Link
						href='/headshots'
						className='text-muted-foreground text-lg transition-colors hover:text-foreground'
					>
						Headshots
					</Link>
					<Link
						href='/events'
						className='text-muted-foreground text-lg transition-colors hover:text-foreground'
					>
						Events
					</Link>
					<Link
						href='/estate'
						className='text-muted-foreground text-lg transition-colors hover:text-foreground'
					>
						Real Estate and Interior
					</Link>
				</nav>
				<div className='flex flex-1 flex-col  items-center'>
					<div className='grid items-start'>
						<Image className='object-contain' src={logo} alt='Aerys Media' />
					</div>
					<div className='items-center text-center'>
						<h1 className='text-center text-2xl font-bold mb-4'>Connect with us:</h1>
					</div>
					<div className='flex  justify-start gap-4 md:gap-6 items-center h-full'>
						<Link
							className='flex gap-2 '
							href='https://www.facebook.com/share/NXeCw8sahs7183Mi/?mibextid=LQQJ4d'
						>
							<Button asChild></Button>
							<Facebook />
						</Link>
						<Link
							className='flex gap-2'
							href='https://www.instagram.com/aerysmedia?igsh=MWFsYnBmMXpqZHZ6dA=='
						>
							<Button asChild></Button>
							<Instagram />
						</Link>
						<Link className='flex gap-2' href='/'>
							<Button asChild></Button>
							<Mail />
						</Link>
					</div>
				</div>
				<div className='flex flex-col flex-2'>
					<h1 className='text-3xl '>View services</h1>
					<div className='grid  md:grid-cols-2 items-center gap-6 p-4'>
						{services.map((service) => (
							<Link
								className='underline'
								href={`/services/${service.id}`}
								key={service.id}
							>
								<div className='items-center drop-shadow-md' key={service.id}>
									<div className='items-center'>
										<h2 className=''>{service.name} Photography</h2>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</footer>
		</div>
	);
}
