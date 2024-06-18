import HeroServices from "./(customerFacing)/_components/HeroServices";
import HomeHero from "./(customerFacing)/_components/HomeHero";
import CallToAction from "./(customerFacing)/_components/CallToAction";
import SecondCallToAction from "./(customerFacing)/_components/SecondCallToAction";
import Services from "./(customerFacing)/_components/Services";

export default function Landing() {
	return (
		<div className="container p-0">
			<div className='grid overflow-hidden bg-white'>
				<h1 className='text-5xl text-center p-4 md:p-8'>
					BEAUTIFUL MOMENTS ARE EVERYTHING
				</h1>
				<HeroServices />
				<CallToAction />
				<HomeHero />
				<SecondCallToAction />
				<Services />
			</div>
		</div>
	);
}
