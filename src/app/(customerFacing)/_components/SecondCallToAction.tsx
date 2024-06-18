import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function SecondCallToAction() {
	return (
		<div className='container p-0 bg-slate-50'>
			<div className='grid p-4 md:p-8 items-center min-h-screen'>
				<div className='grid p-4 md:p-8 items-center'>
					<h1 className='text-center text-4xl'>
						Eternal Moments: Captured with a Documentary Touch
					</h1>
					<p className='text-center text-lg p-8'>
						As a visionary, you yearn for a photography experience that
						authentically captures your essence, resulting in a unique creation
						that mirrors your individuality. You seek profound photography,
						crafted to bring out your best qualities. You admire artistic works
						and desire a photographer with a documentary flair to transform your
						moments into bespoke images, preserving your cherished memories. Let
						us transform your unique story into a timeless masterpiece that you
						will treasure forever.
					</p>
					<div className='flex justify-center items-end'>
						<div className='items-center'>
							<Button size='lg' className='text-center text-xl' asChild>
								<Link href='/book'>BOOK YOUR DATE</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
