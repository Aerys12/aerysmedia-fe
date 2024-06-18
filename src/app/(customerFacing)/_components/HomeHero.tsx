import HomeHeroLeft from "./HomeHeroLeft";
import HomeHeroRight from "./HomeHeroRight";
import services from "../../../../hero-services.json";
type Service = {
	id: number;
	name: string;
	hero_description: string;
	description: string;
	service_image: string;
	service_image_url: string;
	parent: number | null;
	hero_gallery: number | null;
	full_gallery: number | null;
	service_page: string | null;
};

export default function HomeHero() {
	return (
		<div className='grid p-4 md:p-8 gap-4 md:gap-8 bg-white'>
			{services.map((service, index) =>
				index % 2 === 1 ? (
					<HomeHeroLeft key={service.id} service={service} />
				) : (
					<HomeHeroRight key={service.id} service={service} />
				)
			)}
		</div>
	);
}
