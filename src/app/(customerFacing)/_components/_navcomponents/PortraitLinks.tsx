import Link from "next/link";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";

export default function PortraitLinks() {
	return (
		<Accordion type='single' collapsible className="w-full">
			<AccordionItem value='item-1'>
				<AccordionTrigger className="text-lg">Portraits</AccordionTrigger>
				<AccordionContent>
					<div className='flex flex-col gap-2 text-lg'>
						<Link href='/services/singles'>Singles</Link>
						<Link href='/services/couples'>Couples</Link>
						<Link href='/services/branding'>Branding</Link>
						<Link href='/services/family'>Family</Link>
						<Link href='/services/Maternity'>Maternity</Link>
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
