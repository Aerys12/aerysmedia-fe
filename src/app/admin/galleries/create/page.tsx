import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import GalleryForm from "../_components/GalleryForm";

export default function CreateGalleryPage() {
	return (
		<div className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
			<div className='mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4'>
				<div className='grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8'>
					<Card x-chunk='dashboard-07-chunk-0'>
						<CardHeader>
							<CardTitle>Create gallery</CardTitle>
							<CardDescription>
								Create a new gallery to showcase your service.
							</CardDescription>
						</CardHeader>
						<CardContent>
                            <GalleryForm />
                        </CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
