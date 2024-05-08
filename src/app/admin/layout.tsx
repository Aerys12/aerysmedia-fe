import DashboardAside from "./_components/DashboardAside";
import DashboardHeader from "./_components/DashboardHeader";

export default function AdminLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
				<DashboardAside />
				<DashboardHeader />
				<div className=''>{children}</div>
			</div>
		</>
	);
}
