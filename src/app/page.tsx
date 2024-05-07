import Image from "next/image";
import DashboardAside from "@/components/DashboardAside";

export default function Dashboard() {
	return (
		<div className='flex min-h-screen w-full flex-col bg-muted/40'>
			<DashboardAside />
		</div>
	);
}
