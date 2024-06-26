import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import hero1 from "/public/portraits/portrait_hero1.jpg";
import logo from "/public/logo.png";
import consult from "/public/portraits/consult.jpg";
import calendar from "/public/portraits/calendar.jpg";
import prep from "/public/portraits/prep.jpg";
import shoot from "/public/portraits/shoot.jpg";
import delivery from "/public/portraits/delivery.jpg";
import card1 from "/public/portraits/card1.jpg";
import card2 from "/public/portraits/card2.jpg";
import card3 from "/public/portraits/card3.jpg";
import card4 from "/public/portraits/card4.jpg";
import card5 from "/public/portraits/card5.jpg";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "Singles Portrait Photography | Aerys Media",
	description:
		"Capture your unique personality with our professional portrait photography services in Toronto. Specializing in portrait photography, we create timeless images that reflect your individuality and style. Our experienced photographers provide a comfortable and enjoyable session, ensuring you look your best in every shot. Book your portrait session today and cherish your memories forever.",
	keywords:
		"Toronto portrait photography, professional portrait photographer in Toronto, Toronto portrait photot shoot",
};

export default function Portraits() {
	return (
		<div className='container p-0'>
			<div className='grid md:grid-cols-2 p-4 md:p-8 gap-4 md:gap-0'>
				<div className='flex flex-col items-start justify-start gap-4 md:pl-16 pt-8 md:pt-16'>
					<h1 className='text-xl'>PORTRAIT PHOTOGRAPHY THAT</h1>
					<h1 className='text-4xl md:text-6xl'>BRINGS OUT</h1>
					<h1 className='text-4xl md:text-6xl'>YOUR</h1>
					<h1 className='text-4xl md:text-6xl'>PERSONALITY</h1>
					<h1 className='text-4xl md:text-6xl'>AND TELLS</h1>
					<h1 className='text-4xl md:text-6xl'>YOUR STORY</h1>
				</div>
				<div className='grid items-center'>
					<Image
						width={500}
						height={500}
						className='object-contain'
						alt='portrait photo'
						src={hero1}
					/>
				</div>
			</div>
			<div className='grid p-4 md:p-8 gap-4 bg-black text-white'>
				<div className='flex flex-col gap-4 justify-start items-center'>
					<h1 className='text-4xl md:text-6xl'>Gallery</h1>
					<h1 className='text-4xl md:text-6xl italic '>highlights</h1>
				</div>
				<div>
					<h1 className='text-center'>Gallery goes here</h1>
				</div>
			</div>
			<div className='grid p-4 md:p-8 gap-4'>
				<div className='flex flex-col gap-4 justify-start items-center'>
					<h1 className='text-xl md:text-2xl mt-8'>GETTING STARTED</h1>
					<h1 className='text-4xl md:text-6xl'>THE PROCESS</h1>
					<p>
						My mission is to make sure you have fun each step of the way and
						absolutely love the final results.
					</p>
				</div>
				<div className='grid md:grid-cols-3 p-4 md:p-8 gap-4 md:gap-8'>
					<Card>
						<div>
							<Image
								className='h-64 object-cover'
								src={consult}
								alt='consulting image'
							/>
						</div>
						<CardHeader>
							<CardTitle>01. Connect and Consult</CardTitle>
							<CardDescription>
								Select the session type(s) you’re most interested in below, and
								I’ll reach out via email within 24 hours with more information,
								session availability, and an opportunity to schedule a
								complimentary consultation on my calendar.
							</CardDescription>
						</CardHeader>
					</Card>
					<Card>
						<div>
							<Image
								className='h-64 object-cover'
								src={calendar}
								alt='consulting image'
							/>
						</div>
						<CardHeader>
							<CardTitle>02. Schedule Your Session</CardTitle>
							<CardDescription>
								If we’re a great fit to work together and you’d like to move
								forward, simply sign the contract and pay a 50% deposit to
								secure your desired session date on my calendar.
							</CardDescription>
						</CardHeader>
					</Card>
					<Card>
						<div>
							<Image
								className='h-64 object-cover'
								src={prep}
								alt='consulting image'
							/>
						</div>
						<CardHeader>
							<CardTitle>03. Session Prep</CardTitle>
							<CardDescription>
								In the weeks and months leading up to your session, I’ll act as
								a trusted resource and support for all things session prep.
								Chances are I know the answer to any question you may have, and
								if I don’t, I’ll find it out for you.
							</CardDescription>
						</CardHeader>
					</Card>
					<Card>
						<div>
							<Image
								className='h-64 object-cover'
								src={shoot}
								alt='consulting image'
							/>
						</div>
						<CardHeader>
							<CardTitle>04. The Photo Shoot</CardTitle>
							<CardDescription>
								It’s time to have some fun! I’ll guide you each step of the way
								so you feel comfortable and relaxed.
							</CardDescription>
						</CardHeader>
					</Card>
					<Card>
						<div>
							<Image
								className='h-64 object-cover'
								src={delivery}
								alt='consulting image'
							/>
						</div>
						<CardHeader>
							<CardTitle>05. Delivery</CardTitle>
							<CardDescription>
								I’ll deliver your images via a digital gallery within 2 weeks of
								your shoot day. All that’s left is to enjoy them, and use them
								as much as you can!
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</div>
			<div className='min-h-screen bg-slate-50'>
				<div className='grid md:grid-cols-2 p-4 md:p-16 gap-4 md:gap-4'>
					<div className='grid items-center'>
						<Image
							width={500}
							height={500}
							className='object-contain'
							alt='portrait photo'
							src={card1}
						/>
					</div>
					<div className='grid'>
						<div>
							<Image
								width={500}
								height={500}
								className='object-cover h-64'
								alt='portrait photo'
								src={card2}
							/>
						</div>
						<div className='flex flex-col p-4 gap-4 md:gap-8'>
							<h1 className='text-3xl'>What's Next?</h1>
							<h1 className='text-4xl md:text-6xl'>HOW TO</h1>
							<h1 className='text-4xl md:text-6xl'>PROCEED</h1>
							<h1 className='text-4xl md:text-6xl'>WITH BOOKING</h1>
							<p className='pr-24'>
								I’m honored you’re considering me to be your portrait
								photographer, and I strive to make the process of working
								together as seamless as possible.{" "}
								<span className='font-semibold'>
									{" "}
									Simply select your preferred session type(s) from this guide
									and hit ‘I'm interested.’{" "}
								</span>
								I can’t wait to hear from you and work together to tell your
								portrait story.
							</p>
						</div>
					</div>
				</div>
				<div className='grid items-center min-h-screen bg-white'>
					<div className='grid p-4 md:p-8 text-center gap-4'>
						<h1 className='text-xl'>FIND YOUR FIT</h1>
						<h1 className='text-4xl'>Session Types</h1>
						<div className='col-span-full w-full md:px-16 md:mt-16'>
							<h1 className='text-start bg-white p-4 drop-shadow-md border-black border-l-4'>
								Select one or more services below
							</h1>
						</div>
						<div className='col-span-full grid md:grid-cols-3 gap-4 md:px-16 text-start'>
							<Card>
								<div className=''>
									<Image
										className='object-cover h-64'
										alt='real estate image'
										src={card3}
									/>
								</div>
								<CardHeader>
									<CardTitle>Mini Session</CardTitle>
								</CardHeader>
								<CardContent>
									<h1 className='underline font-semibold'>
										Heres what you'll get:
									</h1>
									<ul>
										<li>30 minute planning call</li>
										<li>30 min shooting session</li>
										<li>1 Outfit</li>
										<li>1 Location</li>
										<li>Up to 20 high-resolution photos</li>
										<li>3 detail Edited Images</li>
										<li>Professional editing and retouching</li>
										<li>Private Online Image Gallery</li>
										<li>The investment: $150</li>
									</ul>
								</CardContent>
								<CardFooter className='flex justify-end'>
									<Link href='/'>
										<Button>I'm interested</Button>
									</Link>
								</CardFooter>
							</Card>
							<Card>
								<div className=''>
									<Image
										className='object-cover h-64'
										alt='real estate image'
										src={card4}
									/>
								</div>
								<CardHeader>
									<CardTitle>Full Session</CardTitle>
								</CardHeader>
								<CardContent>
									<h1 className='underline font-semibold'>
										Heres what you'll get:
									</h1>
									<ul>
										<li>30 minute planning call</li>
										<li>60 min shooting session</li>
										<li>3-4 Outfits</li>
										<li>1 Location</li>
										<li>Up to 30 high-resolution photos</li>
										<li>4 detail Edited Images + Hightlight reel</li>
										<li>Professional editing and retouching</li>
										<li>Private Online Image Gallery</li>
										<li>The investment: $300</li>
									</ul>
								</CardContent>
								<CardFooter className='flex justify-end'>
									<Link href='/'>
										<Button>I'm interested</Button>
									</Link>
								</CardFooter>
							</Card>
							<Card>
								<div className=''>
									<Image
										className='object-cover h-64'
										alt='real estate image'
										src={card5}
									/>
								</div>
								<CardHeader>
									<CardTitle>Full Session Plus</CardTitle>
								</CardHeader>
								<CardContent>
									<h1 className='underline font-semibold'>
										Heres what you'll get:
									</h1>
									<ul>
										<li>30 minute planning call</li>
										<li>90 min shooting session</li>
										<li>5-6 Outfits</li>
										<li>2 Location</li>
										<li>50+ high-resolution photos</li>
										<li>6 detail Edited Images + Highlight reel</li>
										<li>Professional editing and retouching</li>
										<li>Private Online Image Gallery</li>
										<li>The investment: $500</li>
									</ul>
								</CardContent>
								<CardFooter className='flex justify-end'>
									<Link href='/'>
										<Button>I'm interested</Button>
									</Link>
								</CardFooter>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
