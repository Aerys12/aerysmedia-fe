"use client";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createGallery } from "../../_actions/galleries";
import SelectService from "./SelectService";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const serviceSchema = z.object({
	id: z.number(),
	name: z.string(),
});

const formSchema = z.object({
	title: z.string().min(3).max(255),
	description: z.string().optional(),
	service: serviceSchema,
});

export default function GalleryForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			description: "",
			service: {
				id: 0,
				name: "",
			},
		},
	});
	return (
		<Form {...form}>
			<form action={createGallery} className='space-y-8'>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input placeholder='Title' {...field} required />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea placeholder='Description' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<SelectService />
				<Select>
					<SelectTrigger className='w-[180px]'>
						<SelectValue placeholder='Gallery type' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='hero_gallery'>Hero Gallery</SelectItem>
						<SelectItem value='fully_gallery'>Full Gallery</SelectItem>
					</SelectContent>
				</Select>

				<SubmitButton />
			</form>
		</Form>
	);
}

function SubmitButton() {
	return (
		<Button type='submit' className='w-full'>
			Submit
		</Button>
	);
}
