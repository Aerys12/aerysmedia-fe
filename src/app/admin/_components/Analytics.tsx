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
	Package2,
	Search,
	Users,
} from "lucide-react";

export default function Analytics() {
	return (
		<div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
			<Card x-chunk='dashboard-01-chunk-0'>
				<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
					<CardTitle className='text-sm font-medium'>Total Revenue</CardTitle>
					<DollarSign className='h-4 w-4 text-muted-foreground' />
				</CardHeader>
				<CardContent>
					<div className='text-2xl font-bold'>$45,231.89</div>
					<p className='text-xs text-muted-foreground'>
						+20.1% from last month
					</p>
				</CardContent>
			</Card>
			<Card x-chunk='dashboard-01-chunk-1'>
				<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
					<CardTitle className='text-sm font-medium'>Customers</CardTitle>
					<Users className='h-4 w-4 text-muted-foreground' />
				</CardHeader>
				<CardContent>
					<div className='text-2xl font-bold'>+2350</div>
					<p className='text-xs text-muted-foreground'>
						+180.1% from last month
					</p>
				</CardContent>
			</Card>
			<Card x-chunk='dashboard-01-chunk-2'>
				<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
					<CardTitle className='text-sm font-medium'>Sales</CardTitle>
					<CreditCard className='h-4 w-4 text-muted-foreground' />
				</CardHeader>
				<CardContent>
					<div className='text-2xl font-bold'>+12,234</div>
					<p className='text-xs text-muted-foreground'>+19% from last month</p>
				</CardContent>
			</Card>
			<Card x-chunk='dashboard-01-chunk-3'>
				<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
					<CardTitle className='text-sm font-medium'>New bookings</CardTitle>
					<Activity className='h-4 w-4 text-muted-foreground' />
				</CardHeader>
				<CardContent>
					<div className='text-2xl font-bold'>+573</div>
					<p className='text-xs text-muted-foreground'>+201 since last hour</p>
				</CardContent>
			</Card>
		</div>
	);
}
