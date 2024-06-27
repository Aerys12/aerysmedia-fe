import Link from "next/link";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";


export default function HeadshotsLinks() {
	return (
		<Accordion type='single' collapsible className='w-full'>
			<AccordionItem value='item-1'>
				<AccordionTrigger className="text-lg">Headshots</AccordionTrigger>
				<AccordionContent>
					<div className='flex flex-col gap-2 text-lg'>
						<Link href='/services/actors'>Actors</Link>
						<Link href='/services/linkedin'>LinkedIn</Link>
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
