import Link from "next/link";
import {
	Package2,
	Home,
	GalleryVerticalEnd,
	Images,
	Package,
} from "lucide-react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export default function DashboardAside() {
	return (
		<aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'>
			<nav className='flex flex-col items-center gap-4 px-2 sm:py-5'>
				<Link
					href='#'
					className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base'
				>
					<Package2 className='h-4 w-4 transition-all group-hover:scale-110' />
					<span className='sr-only'>Aerys Media Photography</span>
				</Link>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								href='#'
								className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
							>
								<Home className='h-5 w-5' />
								<span className='sr-only'>Dashboard</span>
							</Link>
						</TooltipTrigger>
						<TooltipContent side='right'>Dashboard</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								href='#'
								className='flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
							>
								<Package className='h-5 w-5' />
								<span className='sr-only'>Services</span>
							</Link>
						</TooltipTrigger>
						<TooltipContent side='right'>Services</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								href='#'
								className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
							>
								<GalleryVerticalEnd className='h-5 w-5' />
								<span className='sr-only'>Galleries</span>
							</Link>
						</TooltipTrigger>
						<TooltipContent side='right'>Galleries</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								href='#'
								className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
							>
								<Images className='h-5 w-5' />
								<span className='sr-only'>Images</span>
							</Link>
						</TooltipTrigger>
						<TooltipContent side='right'>Images</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</nav>
		</aside>
	);
}
