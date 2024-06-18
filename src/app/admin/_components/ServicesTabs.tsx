import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import aerys from "../../../../public/_MG_6363.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, MoreHorizontal } from "lucide-react";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ServicesData = {
	id: number;
	name: string;
	hero_description: string;
	description: string;
	parent: number;
	hero_gallery: null | string;
	full_gallery: null | string;
	owner: number;
	service_image: string;
	service_image_url: null | string;
};

export default async function ServicesTabs() {
	const cloudFrontUrl = "https://d1dh6nb6nxzrno.cloudfront.net";
	const servicesData = await getServicesData();
	return (
		<Tabs defaultValue='all'>
			<div className='flex items-center'>
				<TabsList>
					<TabsTrigger value='all'>All</TabsTrigger>
					<TabsTrigger value='portraits'>Portraits</TabsTrigger>
					<TabsTrigger value='headshots'>Headshots</TabsTrigger>
					<TabsTrigger value='events' className='hidden sm:flex'>
						Events
					</TabsTrigger>
					<TabsTrigger value='estate' className='hidden sm:flex'>
						Real Estate and Interior
					</TabsTrigger>
				</TabsList>
				<div className='ml-auto flex items-center gap-2'>
					<Button size='sm' className='h-8 gap-1'>
						<PlusCircle className='h-3.5 w-3.5' />
						<span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
							Add Services
						</span>
					</Button>
				</div>
			</div>
			<TabsContent value='all'>
				<Card x-chunk='dashboard-06-chunk-0'>
					<CardHeader>
						<CardTitle>Services</CardTitle>
						<CardDescription>
							Manage your services and view their sales performance.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className='hidden w-[100px] sm:table-cell'>
										<span className='sr-only'>Image</span>
									</TableHead>
									<TableHead>Name</TableHead>
									<TableHead>Category</TableHead>
									<TableHead className='hidden md:table-cell'>Price</TableHead>
									<TableHead className='hidden md:table-cell'>
										Total Sales
									</TableHead>
									<TableHead className='hidden md:table-cell'>
										Created at
									</TableHead>
									<TableHead>
										<span className='sr-only'>Actions</span>
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{servicesData.map((service: ServicesData) => {
									let serviceImageUrl = "https://placehold.co/400";
									if (service.service_image_url) {
										serviceImageUrl =
											"https://d1dh6nb6nxzrno.cloudfront.net/media/" +
											service.service_image_url;
									}

									return (
										<TableRow key={service.id}>
											<TableCell className='hidden sm:table-cell'>
												<Image
													alt='Product image'
													className='aspect-square rounded-md object-cover'
													height='64'
													src={serviceImageUrl}
													width='64'
												/>
											</TableCell>
											<TableCell className='font-medium'>
												{service.name}
											</TableCell>
											<TableCell>
												<Badge variant='outline'>{service.parent}</Badge>
											</TableCell>
											<TableCell className='hidden md:table-cell'>
												0.00
											</TableCell>
											<TableCell className='hidden md:table-cell'>0</TableCell>
											<TableCell className='hidden md:table-cell'>
												May 8, 2024
											</TableCell>
											<TableCell>
												<DropdownMenu>
													<DropdownMenuTrigger asChild>
														<Button
															aria-haspopup='true'
															size='icon'
															variant='ghost'
														>
															<MoreHorizontal className='h-4 w-4' />
															<span className='sr-only'>Toggle menu</span>
														</Button>
													</DropdownMenuTrigger>
													<DropdownMenuContent align='end'>
														<DropdownMenuLabel>Actions</DropdownMenuLabel>
														<DropdownMenuItem>Edit</DropdownMenuItem>
														<DropdownMenuItem>Delete</DropdownMenuItem>
													</DropdownMenuContent>
												</DropdownMenu>
											</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</TabsContent>
			<TabsContent value='portraits'>
				<Card x-chunk='dashboard-06-chunk-1'>
					<CardHeader>
						<CardTitle>Portraits</CardTitle>
						<CardDescription>
							Manage your services and view their sales performance.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className='hidden w-[100px] sm:table-cell'>
										<span className='sr-only'>Image</span>
									</TableHead>
									<TableHead>Name</TableHead>
									<TableHead>Category</TableHead>
									<TableHead className='hidden md:table-cell'>Price</TableHead>
									<TableHead className='hidden md:table-cell'>
										Total Sales
									</TableHead>
									<TableHead className='hidden md:table-cell'>
										Created at
									</TableHead>
									<TableHead>
										<span className='sr-only'>Actions</span>
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{servicesData.map((service: ServicesData) => {
									let serviceImageUrl = "https://placehold.co/400";
									if (service.service_image_url) {
										serviceImageUrl =
											"https://d1dh6nb6nxzrno.cloudfront.net/media/" +
											service.service_image_url;
									}
									return (
										<TableRow key={service.id}>
											<TableCell className='hidden sm:table-cell'>
												<Image
													alt='Product image'
													className='aspect-square rounded-md object-cover'
													height='64'
													src={serviceImageUrl}
													width='64'
												/>
											</TableCell>
											<TableCell className='font-medium'>
												{service.name}
											</TableCell>
											<TableCell>
												<Badge variant='outline'>{service.parent}</Badge>
											</TableCell>
											<TableCell className='hidden md:table-cell'>
												0.00
											</TableCell>
											<TableCell className='hidden md:table-cell'>0</TableCell>
											<TableCell className='hidden md:table-cell'>
												May 8, 2024
											</TableCell>
											<TableCell>
												<DropdownMenu>
													<DropdownMenuTrigger asChild>
														<Button
															aria-haspopup='true'
															size='icon'
															variant='ghost'
														>
															<MoreHorizontal className='h-4 w-4' />
															<span className='sr-only'>Toggle menu</span>
														</Button>
													</DropdownMenuTrigger>
													<DropdownMenuContent align='end'>
														<DropdownMenuLabel>Actions</DropdownMenuLabel>
														<DropdownMenuItem>Edit</DropdownMenuItem>
														<DropdownMenuItem>Delete</DropdownMenuItem>
													</DropdownMenuContent>
												</DropdownMenu>
											</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</TabsContent>
		</Tabs>
	);
}

async function getServicesData() {
	const token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE1NjA3NTQxLCJpYXQiOjE3MTU1MjExNDEsImp0aSI6ImQ0NjNjYjJmYTU3MzQyNjU4ZWRjM2E2Yzg3NDQ5ZWRmIiwidXNlcl9pZCI6MX0.8H67wc0YAQe-wqk0ViPm2V3bIi98Hc-a-4L1QTC5FT8";
	const response = await fetch(
		"http://127.0.0.1:8000/service/categories/list/",
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	const data = await response.json();
	return data;
}
