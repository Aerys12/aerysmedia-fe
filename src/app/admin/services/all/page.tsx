import HeroServices from "@/app/(customerFacing)/_components/HeroServices";
import ServicesTabs from "../../_components/ServicesTabs";

export default function ServicesPage() {
	return (
		<div className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
			<ServicesTabs />
		</div>
	);
}
