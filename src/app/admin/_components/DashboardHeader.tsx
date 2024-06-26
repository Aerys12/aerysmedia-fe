"use client";
import Link from "next/link";
import Image from "next/image";
import aerys from "../../../../public/_MG_6363.jpg";
import { usePathname } from "next/navigation";

import {
	Package2,
	Home,
	GalleryVerticalEnd,
	Images,
	Package,
	PanelLeft,
	Search,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export default function DashboardHeader() {
	const path = usePathname();
	const pathnames = path.split("/").filter((x) => x);
	return (
		<div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
			<header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
				<Sheet>
					<SheetTrigger asChild>
						<Button size='icon' variant='outline' className='sm:hidden'>
							<PanelLeft className='h-5 w-5' />
							<span className='sr-only'>Toggle Menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side='left' className='sm:max-w-xs'>
						<nav className='grid gap-6 text-lg font-medium'>
							<Link
								href='#'
								className='group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base'
							>
								<Package2 className='h-5 w-5 transition-all group-hover:scale-110' />
								<span className='sr-only'>Aerys Media Photography</span>
							</Link>
							<Link
								href='/admin'
								className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
							>
								<Home className='h-5 w-5' />
								Dashboard
							</Link>
							<Link
								href='/admin/services'
								className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
							>
								<Package className='h-5 w-5' />
								Services
							</Link>
							<Link
								href='/admin/galleries'
								className='flex items-center gap-4 px-2.5 text-foreground'
							>
								<GalleryVerticalEnd className='h-5 w-5' />
								Galleries
							</Link>
							<Link
								href='/admin/images'
								className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
							>
								<Images className='h-5 w-5' />
								Images
							</Link>
						</nav>
					</SheetContent>
				</Sheet>
				<Breadcrumb className='hidden md:flex'>
					<BreadcrumbList>
						{pathnames.map((value, index) => {
							const breadcrumbPath = `/${pathnames
								.slice(0, index + 1)
								.join("/")}`;

							return (
								<BreadcrumbItem key={breadcrumbPath}>
									<BreadcrumbLink asChild>
										<Link href={breadcrumbPath}>{value}</Link>
									</BreadcrumbLink>
									{index < pathnames.length - 1 && <BreadcrumbSeparator />}
								</BreadcrumbItem>
							);
						})}
					</BreadcrumbList>
				</Breadcrumb>
				<div className='relative ml-auto flex-1 md:grow-0'>
					<Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
					<Input
						type='search'
						placeholder='Search...'
						className='w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]'
					/>
				</div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant='outline'
							size='icon'
							className='overflow-hidden rounded-full'
						>
							<Image
								src={aerys}
								width={36}
								height={36}
								alt='Avatar'
								className='overflow-hidden rounded-full'
							/>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Settings</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Logout</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</header>
		</div>
	);
}
