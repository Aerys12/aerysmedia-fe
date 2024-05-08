import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Activity,
	ArrowUpRight,
	CircleUser,
	CreditCard,
	DollarSign,
	Menu,
	Package,
	Search,
	Users,
} from "lucide-react";

export default function ServicesSection() {
	return (
		<div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
			<Card x-chunk='dashboard-01-chunk-0'>
				<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
					<CardTitle className='text-sm font-medium'>Services</CardTitle>
					<Package className='h-4 w-4 text-muted-foreground' />
				</CardHeader>
				<CardContent className="flex flex-col gap-2">
					<div className='text-2xl font-bold'>12 Services</div>
					<Button asChild size='sm' className='ml-auto gap-1'>
						<Link href='/admin/services'>
							View All
							<ArrowUpRight className='h-4 w-4' />
						</Link>
					</Button>
				</CardContent>
			</Card>
            <Card x-chunk='dashboard-01-chunk-0'>
				<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
					<CardTitle className='text-sm font-medium'>Galleries</CardTitle>
					<Package className='h-4 w-4 text-muted-foreground' />
				</CardHeader>
				<CardContent className="flex flex-col gap-2">
					<div className='text-2xl font-bold'>20 Galleries</div>
					<Button asChild size='sm' className='ml-auto gap-1'>
						<Link href='/admin/services'>
							View All
							<ArrowUpRight className='h-4 w-4' />
						</Link>
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
