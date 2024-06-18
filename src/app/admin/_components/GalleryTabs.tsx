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
import { MoreHorizontal } from "lucide-react";
import { formatDate } from "@/lib/utils";

type Service = {
	id: number;
	name: string;
};

type GalleryData = {
	id: number;
	service: Service;
	title: string;
	description: string;
	created_at: string;
	updated_at: string;
	owner: number;
};

export default async function GallerySection() {
	const galleryData = await getGalleryData();
	return (
		<Card x-chunk='dashboard-06-chunk-0'>
			<CardHeader>
				<CardTitle>Galleries</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Type</TableHead>
							<TableHead className='hidden md:table-cell'>
								Total Images
							</TableHead>
							<TableHead className='hidden md:table-cell'>Created at</TableHead>
							<TableHead className='hidden md:table-cell'>Updated at</TableHead>
							<TableHead>
								<span className='sr-only'>Actions</span>
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{galleryData.map((gallery: GalleryData) => {
							const formattedCreatedAt = formatDate(gallery.created_at);
							const formattedUpdatedAt = formatDate(gallery.updated_at);

							return (
								<TableRow key={gallery.id}>
									<TableCell className='font-medium'>{gallery.title}</TableCell>
									<TableCell className='font-medium'>
										{gallery.service.name}
									</TableCell>
									<TableCell className='hidden md:table-cell'>0</TableCell>
									<TableCell className='hidden md:table-cell'>
										{formattedCreatedAt}
									</TableCell>
									<TableCell className='hidden md:table-cell'>
										{formattedUpdatedAt}
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
	);
}

async function getGalleryData() {
	const token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE1NjA3NTQxLCJpYXQiOjE3MTU1MjExNDEsImp0aSI6ImQ0NjNjYjJmYTU3MzQyNjU4ZWRjM2E2Yzg3NDQ5ZWRmIiwidXNlcl9pZCI6MX0.8H67wc0YAQe-wqk0ViPm2V3bIi98Hc-a-4L1QTC5FT8";
	const data = await fetch("http://127.0.0.1:8000/gallery/list/", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});

	return data.json();
}
