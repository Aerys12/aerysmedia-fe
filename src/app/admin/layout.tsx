
import DashboardAside from "./_components/DashboardAside";
import DashboardHeader from "./_components/DashboardHeader";


export default function AdminLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<DashboardAside />
			<DashboardHeader />
			<div className='container my-6'>{children}</div>
		</>
	);
}
