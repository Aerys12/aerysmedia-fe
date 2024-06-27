import Link from "next/link";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";

export default function EventsLinks() {
	return (
		<Accordion type='single' collapsible className='w-full'>
			<AccordionItem value='item-1'>
				<AccordionTrigger className='text-lg'>Events</AccordionTrigger>
				<AccordionContent>
					<div className='flex flex-col gap-2 text-lg'>
						<Link href='/services/engagements'>Engagements</Link>
						<Link href='/services/couples'>Sports</Link>
						<Link href='/services/birthdays'>Birthdays</Link>
						<Link href='/services/baby-showers'>Baby Showers</Link>
						<Link href='/services/graduations'>Graduations</Link>
						<Link href='/services/corporate'>Corporate</Link>
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
