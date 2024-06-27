import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
} from "@/components/ui/sheet";
import { PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PortraitLinks from "./_navcomponents/PortraitLinks";
import HeadshotsLinks from "./_navcomponents/HeadshotsLinks";
import EventsLinks from "./_navcomponents/EventsLInks";
import Link from "next/link";

export default function NavSheet() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size='icon' variant='outline' className='sm:hidden'>
					<PanelLeft className='h-5 w-5 gap-1' />
					<span className='sr-only'>Toggle Menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent className='sm:max-w-xs'>
				<SheetHeader><SheetTitle className="text-xl ">Services</SheetTitle></SheetHeader>
				<PortraitLinks />
				<HeadshotsLinks />
				<EventsLinks />
				<div className='w-full mt-4'>
					<Link href='/services/estate' className='text-lg'>
						Real Estate and Interior
					</Link>
				</div>
			</SheetContent>
		</Sheet>
	);
}
