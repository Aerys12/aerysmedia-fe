import { Button } from "@/components/ui/button";
import Link from "next/link";
import hero1 from "../../../../public/engagement.jpg";
import hero2 from "../../../../public/newborn.jpg";
import hero3 from "../../../../public/_MG_0217.jpg";
import hero4 from "../../../../public/aerys.jpg";

import Image from "next/image";

export default function CallToAction() {
	return (
		<div className='grid p-4 md:p-8 min-h-screen items-center bg-slate-50'>
			<div className='grid gap-4 md:gap-8 text-center items-center'>
				<div className="grid items-center gap-2 md:gap-4">
					<h1 className='text-5xl'>PRESERVE YOUR MEMORIES</h1>
                    <p className='text-2xl'>
						The value of your investment increases <br /> with time
					</p>
				</div>
				<div className="grid gap-4 md:gap-8">
					

					<div>
						<Button size='lg' className='text-xl' asChild>
							<Link href='book'>RESERVE YOUR SPOT</Link>
						</Button>
					</div>
				</div>
			</div>
			<div className='grid'>
				<div className='grid p-4 md:p-8 h-full md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8'>
					<div className='grid items-center lg:items-end'>
						<Image alt='engagement photo' src={hero1}></Image>
					</div>
					<div className='grid items-center'>
						<Image alt='baby photo' src={hero2}></Image>
					</div>
					<div className='grid items-center lg:items-end'>
						<Image alt='engagement photo' src={hero3}></Image>
					</div>
					<div className='grid items-center'>
						<Image alt='baby photo' src={hero4}></Image>
					</div>
				</div>
			</div>
		</div>
	);
}
