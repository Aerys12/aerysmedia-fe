import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import card1 from "../../../../../public/estate/card1.jpg";
import card2 from "../../../../../public/estate/card2.jpg";
import card3 from "../../../../../public/estate/card3.jpg";
import {
	Card,
	CardContent,
	CardTitle,
	CardHeader,
	CardDescription,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "Real Estate and Interior Photography | Aerys Media Photography",
	description:
		"Enhance the appeal of your property with our professional real estate and interior photography services in Toronto. We specialize in capturing stunning visuals that showcase your space’s unique features, helping you attract buyers and elevate your listings.",
	keywords:
		"Toronto real estate photography, interior photography in Toronto, Property photo shoot in Toronto, Professional real estate photographer in Toronto, Drone video and aerial photography in toronto",
};

export default function Estate() {
	return (
		<div className='container p-0'>
			<div className='relative bg-hero1 h-96 bg-no-repeat bg-cover bg-center '>
				<div className='flex flex-col w-full h-full justify-center items-center bg-black opacity-60'>
					<h1 className=' text-xl md:text-4xl text-white font-bold mb-2'>
						AERYS MEDIA PHOTOGRAPHY
					</h1>
					<h2 className='text-white'>
						PHOTO / <span className='md:text-xl'>REAL ESTATE </span> / VIDEO{" "}
					</h2>
				</div>
			</div>
			<div className='grid md:grid-cols-2 p-4 md:p-8 gap-4 md:gap-8 min-h-screen'>
				<div className='flex flex-col justify-center gap-4 items-center'>
					<h1 className='text-4xl md:text-7xl mb-2 md:mb-8'>
						Stand out and Sell with Professional Real Estate and Interior
						Photography
					</h1>
					<p>
						I am a premier real estate photographer bringing listings to life in
						Toronto and the surrounding areas through dynamic imagery and
						videography services. This guide provides an overview of who I am,
						ways I can serve you, and how to book a complimentary consult call
						to learn more.
					</p>
					<p>
						If you have any additional questions regarding the information in
						this guide, please don’t hesitate to reach out.
					</p>
				</div>
				<div className='grid'>
					<Image
						className='object-contain'
						alt='bedroom detail shot'
						width={500}
						height={500}
						src={card1}
					/>
				</div>
			</div>
			<div className='grid md:grid-cols-2 p-4 md:p-8 gap-4 md:gap-8 bg-black'>
				<div>
					<Image
						className='object-contain h-96'
						src={card2}
						alt='detail shot of a ceiling'
					/>
				</div>
				<div className='flex flex-col justify-center gap-4 items-center text-white'>
					<h1 className='text-xl mt-8'>WHY INVEST IN PROFESSIONAL REAL</h1>
					<h1 className='text-xl'>ESTATE PHOTOGRAPHY?</h1>
					<h1 className='text-4xl md:text-5xl'>A COMPETITIVE</h1>
					<h1 className='text-6xl md:text-7xl'>EDGE</h1>
					<p className='p-4 md:px-16'>
						Whether you’re a real estate agency or seller, quality photos and
						videos of your listing help capture the attention of prospective
						buyers in a saturated market—resulting in more showings, fuller open
						houses, and stronger sales. Our team of highly skilled photographers
						and videographers have the eye, skill, and experience it takes to
						set your space apart.
					</p>
				</div>
			</div>
			<div className='grid md:grid-cols-2 p-4 md:p-8 gap-12 md:gap-0 min-h-screen'>
				<div className='flex flex-col items-start justify-center gap-8'>
					<h1 className='text-xl mt-12 md:mt-0'>AREAS OF EXPERTISE</h1>
					<h1 className='text-5xl md:text-6xl'>We can help</h1>
					<h1 className='text-5xl md:text-6xl'>you achieve</h1>
					<h1 className='text-5xl md:text-6xl'>all your goals</h1>
					<h1 className='text-5xl md:text-6xl'>with:</h1>
					<div className='flex flex-col gap-12 items-start'>
						<div className='flex flex-col md:gap-4 justify-center items-start'>
							<h1 className='text-lg'>01 / ONE</h1>
							<h1 className='text-3xl'>Commercial and Residential</h1>
							<h1 className='text-3xl'>Real Estate Photography</h1>
						</div>
						<div className='flex flex-col md:gap-4 justify-center items-start'>
							<h1 className='text-lg'>03 / THREE</h1>
							<h1 className='text-3xl'>Video Walkthrough Tours</h1>
						</div>
					</div>
				</div>
				<div className='flex flex-col md:gap-4 justify-center items-start'>
					<h1 className='text-lg'>02 / TWO</h1>
					<h1 className='text-3xl'>Drone Video and Aerial</h1>
					<h1 className='text-3xl'>Photography</h1>
				</div>
			</div>
			<div className='relative bg-hero2 h-96 bg-no-repeat bg-cover bg-center '>
				<div className='flex flex-col w-full h-full justify-center items-center bg-black opacity-60'>
					<h1 className='text-center text-2xl md:text-5xl text-white font-bold mb-2'>
						HIGH QUALITY
					</h1>
					<h1 className='text-center text-md md:text-3xl text-white font-bold mb-2'>
						VIDEOS & PHOTOS{" "}
					</h1>
					<h1 className='text-center text-2xl md:text-5xl text-white font-bold mb-2'>
						CREATED TO MAKE{" "}
					</h1>
					<h1 className='text-center text-sm md:text-2xl text-white font-bold mb-2'>
						YOUR PROPERTY A{" "}
					</h1>
					<h1 className='text-center text-2xl md:text-5xl text-white font-bold mb-2'>
						STAND OUT
					</h1>
				</div>
			</div>
			<div className='grid md:grid-cols-2 p-4 md:p-8 gap-12 md:gap-16 min-h-screen'>
				<div className='flex flex-col items-start md:px-16 justify-center gap-8 md:mt-16'>
					<h1 className='text-xl'>OUR SERVICES</h1>
					<h1 className='text-6xl'>Ways to</h1>
					<h1 className='text-6xl'>Work Together</h1>
				</div>
				<div className='flex flex-col justify-center items-start'>
					<p className='mr-16'>
						Each of our services is intentionally designed to ensure a smooth
						client experience and stellar results each step of the way. Select
						all of the services you’re interested in learning more about and we
						can discuss them in detail on our complimentary 30-minute consult
						call.
					</p>
				</div>
				<div className='col-span-full w-full md:px-16 md:mt-16'>
					<h1 className='bg-white p-4 drop-shadow-md border-black border-l-4'>
						Select one or more services below
					</h1>
				</div>
				<div className='col-span-full grid md:grid-cols-3 gap-4 md:px-16'>
					<Card>
						<div className=''>
							<Image
								className='object-cover h-64'
								alt='real estate image'
								src={card1}
							/>
						</div>
						<CardHeader>
							<CardTitle>REAL ESTATE PHOTOGRAPHY COLLECTION 1</CardTitle>
						</CardHeader>
						<CardContent>
							<h1 className='underline font-semibold'>
								Heres what you'll get:
							</h1>
							<ul>
								<li>30 minute planning call</li>
								<li>60 min on-site shooting session</li>
								<li>Up to 30 high-resolution photos</li>
								<li>Professional editing and retouching</li>
								<li>Private Online Image Gallery</li>
								<li>The investment: $380</li>
							</ul>
						</CardContent>
						<CardFooter className='flex justify-end'>
							<Link href='/'>
								<Button>Select</Button>
							</Link>
						</CardFooter>
					</Card>
					<Card>
						<div className=''>
							<Image
								className='object-cover h-64'
								alt='real estate image'
								src={card2}
							/>
						</div>
						<CardHeader>
							<CardTitle>REAL ESTATE PHOTOGRAPHY COLLECTION 2</CardTitle>
						</CardHeader>
						<CardContent>
							<h1 className='underline font-semibold'>
								Heres what you'll get:
							</h1>
							<ul>
								<li>30 minute planning call</li>
								<li>60 min on-site shooting session</li>
								<li>Up to 50 high-resolution photos</li>
								<li>Professional editing and retouching</li>
								<li>Private Online Image Gallery</li>
								<li>The investment: $460</li>
							</ul>
						</CardContent>
						<CardFooter className='flex justify-end'>
							<Link href='/'>
								<Button>Select</Button>
							</Link>
						</CardFooter>
					</Card>
					<Card>
						<div className=''>
							<Image
								className='object-cover h-64'
								alt='real estate image'
								src={card3}
							/>
						</div>
						<CardHeader>
							<CardTitle>REAL ESTATE PHOTOGRAPHY COLLECTION 3</CardTitle>
						</CardHeader>
						<CardContent>
							<h1 className='underline font-semibold'>
								Heres what you'll get:
							</h1>
							<ul>
								<li>30 minute planning call</li>
								<li>60 min on-site shooting session</li>
								<li>Up to 100 high-resolution photos</li>
								<li>Professional editing and retouching</li>
								<li>Private Online Image Gallery</li>
								<li>The investment: $760</li>
							</ul>
						</CardContent>
						<CardFooter className='flex justify-end'>
							<Link href='/'>
								<Button>Select</Button>
							</Link>
						</CardFooter>
					</Card>
					<Card>
						<div className=''>
							<Image
								className='object-cover h-64'
								alt='real estate image'
								src={card3}
							/>
						</div>
						<CardHeader>
							<CardTitle>DRONE AND AERIAL PHOTOGRAPHY</CardTitle>
						</CardHeader>
						<CardContent>
							<h1 className='underline font-semibold'>
								Heres what you'll get:
							</h1>
							<ul>
								<li>30 minute planning call</li>
								<li>60 min on-site shooting session</li>
								<li>20-30 high-resolution aerial photos</li>
								<li>Professional editing and retouching</li>
								<li>Fully edited 1-2 minute drone video</li>
								<li>Private Online Image Gallery</li>
								<li>The investment: $760</li>
							</ul>
						</CardContent>
						<CardFooter className='flex justify-end'>
							<Link href='/'>
								<Button>Select</Button>
							</Link>
						</CardFooter>
					</Card>
				</div>
			</div>
			<div className='grid p-4 md:p-8 gap-12 md:gap-16 min-h-screen bg-black'>
				<div className='flex flex-col items-center text-white gap-4'>
					<h1 className='texl-3xl text-center'>RECENT WORK</h1>
					<h1 className='text-5xl md:text-6xl text-center'>PORTIFOLIO</h1>
				</div>
			</div>
		</div>
	);
}
