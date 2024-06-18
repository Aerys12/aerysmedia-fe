import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import { Button } from "@/components/ui/button";
import { CalendarClock } from "lucide-react";

export default function NavBar() {
	return (
		<div className='z-9999 container p-0 sticky top-0'>
			<header className=' flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6'>
				<div className='flex '>
					<Link
						href='/'
						className='flex items-center gap-2 text-lg font-semibold md:text-base'
					>
						<Image
							src={logo}
							alt='Aerys Media Photography'
							width={40}
							height={40}
							className='rounded-full'
						></Image>
						<span className='sr-only'>Aerys Media Photography</span>
					</Link>
				</div>
				<nav className='hidden flex-2 w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-center md:gap-5 md:text-sm lg:gap-6'>
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
				<div className='flex flex-1 w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4'>
					<Button size='sm' className='h-8 gap-1'>
						<Link
							href='/book'
							className='flex items-center justify-center gap-2'
						>
							<CalendarClock className='h-3.5 w-3.5' />
							<span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
								Book Now
							</span>
						</Link>
					</Button>
				</div>
			</header>
		</div>
	);
}
