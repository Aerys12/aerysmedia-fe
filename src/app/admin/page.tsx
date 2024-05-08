import Analytics from "./_components/Analytics";
import ServicesSection from "./_components/ServicesSection";

export default function AdminDashboard() {
	return (
		<div className='flex min-h-screen w-full flex-col bg-muted/40'>
			<div className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
				<Analytics />
			</div>
		</div>
	);
}
