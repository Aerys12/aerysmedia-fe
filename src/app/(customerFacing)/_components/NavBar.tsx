import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import { Button } from "@/components/ui/button";
import { CalendarClock } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavBar() {
	return (
		<div className='z-10 container p-0 sticky top-0'>
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
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<Link href='/' legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Home
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Portraits</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
										<ListItem
											href='services/portraits'
											title='Portraits'
										></ListItem>
										<ListItem
											href='services/couples'
											title='Couples'
										></ListItem>
										<ListItem
											href='services/branding'
											title='Branding'
										></ListItem>
										<ListItem href='services/family' title='Family'></ListItem>
										<ListItem
											href='services/maternity'
											title='Maternity'
										></ListItem>
										<ListItem href='services/kids' title='Kids'></ListItem>
										<ListItem
											href='services/Newborn'
											title='Newborn'
										></ListItem>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Headshots</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className='grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]'>
										<ListItem href='services/actors' title='Actors'></ListItem>
										<ListItem
											href='services/linkedin'
											title='LinkedIn'
										></ListItem>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Events</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
										<ListItem
											href='services/engagements'
											title='Engagements'
										></ListItem>
										<ListItem href='services/sports' title='Sports'></ListItem>
										<ListItem
											href='services/birthdays'
											title='Birthdays'
										></ListItem>
										<ListItem
											href='services/baby-showers'
											title='Baby Showers'
										></ListItem>
										<ListItem
											href='services/graduations'
											title='Graduations'
										></ListItem>
										<ListItem
											href='services/corporate'
											title='Corporate'
										></ListItem>
										<ListItem
											href='services/baptisms'
											title='Baptisms'
										></ListItem>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href='/services/estate' legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Real Estate and Interior
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
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

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className='text-sm font-medium leading-none'>{title}</div>
					<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
