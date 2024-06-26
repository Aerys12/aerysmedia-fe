import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import hero1 from "../../../../../public/branding/branding_hero1.jpg";
import hero2 from "../../../../../public/branding/branding_hero2.jpg";
import hero3 from "../../../../../public/branding/branding_hero3.jpg";
import hero4 from "../../../../../public/branding/branding_hero4.jpg";
import card1 from "../../../../../public/branding/branding_card1.jpg";
import card2 from "../../../../../public/branding/branding_card2.jpg";
import aerys from "../../../../../public/aerys.jpg";
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
	title: "Branding",
	description:
		"Elevate your brand with our expert branding photography services in Toronto. We specialize in creating powerful, professional images that capture the essence of your brand and connect with your target audience. Whether you need photos for your website, social media, marketing materials, or corporate identity, our skilled photographers deliver visually compelling results that enhance your brand’s image. Stand out from the competition with high-quality branding photography.",
	keywords:
		"Toronto branding photography, professional branding photos, brand identity photography, corporate photography, marketing photography, website photography, social media photography, business photography, Toronto photographer, brand photography services, commercial photography, Toronto branding services",
};

export default function Branding() {
	return (
		<div className='container p-0'>
			<div className='grid md:grid-cols-2 p-4 md:p-8 gap-4 md:gap-8 '>
				<div className='grid items-center col-span-full '>
					<h1 className='text-4xl md:text-6xl text-center'>
						Ready for impactful images that tell your brand’s story?
					</h1>
				</div>

				<div className='flex p-4 md:p-8 '>
					<Image
						className='object-cover h-96'
						alt='branding image'
						src={hero1}
					/>
				</div>
				<div className='flex flex-col gap-4 md:gap-8 p-4 md:p-8'>
					<div className='relative flex-1 '>
						<Image
							className='w-full h-64 object-cover'
							alt='branding image'
							src={hero2}
						/>
					</div>
					<div className='flex flex-col flex-1 gap-4 '>
						<div>
							<p>
								If you run a business, you need photography that works across
								platforms and speaks to your target audience. Together, we’ll
								create a collection of{" "}
								<span className='font-semibold'>
									{" "}
									brand photos that represent the passion, expertise, and joy
									you bring to the table.
								</span>
							</p>
						</div>
						<div className='flex flex-col justify-center items-end'>
							<h1 className='text-4xl'>Artistic BRAND</h1>
							<h1 className='text-4xl'>IMAGERY</h1>
						</div>
					</div>
				</div>
			</div>
			<div className='grid md:grid-cols-2 p-4 md:p-8 gap-4 md:gap-8 bg-slate-50 '>
				<div className='flex flex-col gap-4 md:gap-0 justify-center p-4 md:p-16'>
					<h1 className='p-4'>HEY THERE:</h1>
					<h1 className='text-2xl md:text-4xl p-4'>I'm Emmanuel</h1>
					<h1 className='p-4'>
						Your brand photography guide and fellow entrepreneur.
					</h1>
					<p className='p-4'>
						As a lifelong creative with a heart for helping business owners
						stand out visually, it’s no surprise I eventually picked up a camera
						and became a brand photographer. Today, I work with busy business
						owners like you to{" "}
						<span className='font-semibold'>
							{" "}
							bring your vision to life and achieve your goals{" "}
						</span>{" "}
						through my signature suite of brand photography services.
					</p>
				</div>
				<div className='p-4 md:pr-16'>
					<Image
						className='object-cover h-96'
						alt='photo of Emmanuel'
						src={aerys}
					/>
				</div>
			</div>
			<div className='grid md:grid-cols-3 p-4 md:p-16 gap-4 md:gap-8 min-h-screen'>
				<div className='flex flex-col gap-4 md:gap-8 col-span-full text-center'>
					<div className='flex flex-col gap-4'>
						<h1 className='text-4xl md:text-6xl'>A personalized Process</h1>
						<h1 className='text-xl'>HOW IT WORKS</h1>
					</div>
					<div>
						<p>
							A tailored-to-you experience that’s as enjoyable as it is
							effective:
						</p>
					</div>
				</div>
				<div className='flex flex-col p-4 md:p-8 gap-4 md:gap-8'>
					<h1 className='text-lg font-semibold'>
						<span className='text-3xl font-semibold'>01.</span> Consult
					</h1>
					<p>
						Schedule a consultation call with me to assess your needs and create
						a customized proposal to meet them.
					</p>
				</div>
				<div className='flex flex-col p-4 md:p-8 gap-4 md:gap-8'>
					<h1 className='text-lg font-semibold'>
						<span className='text-3xl font-semibold'>02.</span> Planning
					</h1>
					<p>
						We’ll review your brand questionnaire and develop a plan to shoot
						what’s most important for your business.
					</p>
				</div>
				<div className='flex flex-col p-4 md:p-8 gap-4 md:gap-8'>
					<h1 className='text-lg font-semibold'>
						<span className='text-3xl font-semibold'>03.</span> Photoshoot
					</h1>
					<p>
						Time to have some fun! Relax and enjoy your session, knowing I’m
						here to ensure you have the experience of your dreams.
					</p>
				</div>
				<div className='flex flex-col p-4 md:p-8 gap-4 md:gap-8'>
					<h1 className='text-lg font-semibold'>
						<span className='text-3xl font-semibold'>04.</span> Delivery
					</h1>
					<p>
						You’ll receive access to your edited digital gallery within 2-3
						weeks. Choose 50-100 images you’d like to keep!
					</p>
				</div>
				<div className='flex flex-col p-4 md:p-8 gap-4 md:gap-8'>
					<h1 className='text-lg font-semibold'>
						<span className='text-3xl font-semibold'>05.</span> Support
					</h1>
					<p>
						Have additional content needs? I’m always here to support you and
						add to your repertoire as your business evolves.
					</p>
				</div>
			</div>
			<div className='grid grid-cols-2 p-4 md:p-8 gap-4 md:gap-8'>
				<div className='flex flex-col p-4 md:p-8 gap-4 md:gap-8'>
					<div className='flex h-72'>
						<Image
							className='object-cover w-full'
							alt='branding image'
							src={hero3}
						/>
					</div>
					<div className='flex flex-2 flex-col gap-4 md:gap-8'>
						<h1 className='text-xl'>THE DETAILS</h1>
						<h1 className='text-2xl md:text-5xl'>Explore The</h1>
						<h1 className='text-2xl md:text-5xl'>Session Types</h1>
						<p>
							Each of my brand photography services is designed to walk you
							through the entire process with ease, deliver a stunning gallery,
							and leave you wondering, “When can we do that again?”{" "}
							<span className='font-semibold'>
								{" "}
								Select all of the services{" "}
							</span>{" "}
							you’re interested in learning more about and we can discuss them
							in detail on our complimentary consult call.
						</p>
					</div>
				</div>
				<div className='flex h-2/3 p-4 md:p-8'>
					<Image className='object-cover' alt='branding photo' src={hero4} />
				</div>
				<div className='col-span-full  w-full p-4'>
					<h1 className='text-start bg-white p-4 drop-shadow-md border-black border-l-4'>
						Select one or more services below
					</h1>
					<div className='grid gap-4 md:gap-8 mt-8'>
						<h1 className='text-2xl md:text-5xl'>I need lots of photos!</h1>
						<div className='flex flex-col gap-4 md:gap-8'>
							<Card className='flex p-4'>
								<div className='w-1/4'>
									<Image alt='branding image' src={card1} />
								</div>
								<div className=''>
									<CardHeader>
										<CardTitle>Brand Experience</CardTitle>
										<CardDescription>
											This session type is ideal for anyone who needs a large
											number and variety of images for their social media,
											website, print collateral, service guides, and more.
											Clients typically find these sessions afford them 6 or
											more months worth of visual content.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className='flex flex-col'>
											<h1 className='underline font-semibold'>INCLUDES:</h1>
											<ul>
												<li>4-5 hour photoshoot</li>
												<li>60-minute pre-session planning meeting</li>
												<li>Brand questionnaire</li>
												<li>3-4 locations</li>
												<li>
													100 edited images of your choosing delivered via
													online gallery
												</li>
											</ul>
											<h1 className='text-xl  mt-4 font-semibold'>
												THE INVESTMENT: $1800
											</h1>
										</div>
									</CardContent>
									<CardFooter className='flex justify-end'>
										<Link className='' href='/'>
											<Button className='text-xl'>I'm Interested</Button>
										</Link>
									</CardFooter>
								</div>
							</Card>
						</div>
					</div>
					<div className='grid gap-4 md:gap-8 mt-8'>
						<h1 className='text-2xl md:text-5xl'>
							I need a handful of photos!
						</h1>
						<div className='flex flex-col gap-4 md:gap-8'>
							<Card className='flex p-4'>
								<div className='w-1/4 h-1/4'>
									<Image alt='branding image' src={card2} />
								</div>
								<div className=''>
									<CardHeader>
										<CardTitle>Brand Refresh</CardTitle>
										<CardDescription>
											This session type is ideal for anyone who needs a large
											number and variety of images for their social media,
											website, print collateral, service guides, and more.
											Clients typically find these sessions afford them 6 or
											more months worth of visual content.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className='flex flex-col'>
											<h1 className='underline font-semibold'>INCLUDES:</h1>
											<ul>
												<li>2 hour photoshoot</li>
												<li>60-minute pre-session planning meeting</li>
												<li>Brand questionnaire</li>
												<li>2 locations</li>
												<li>
													50 edited images of your choosing delivered via online
													gallery
												</li>
											</ul>
											<h1 className='text-xl  mt-4 font-semibold'>
												THE INVESTMENT: $1000
											</h1>
										</div>
									</CardContent>
									<CardFooter className='flex justify-end'>
										<Link className='' href='/'>
											<Button className='text-xl'>I'm Interested</Button>
										</Link>
									</CardFooter>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
