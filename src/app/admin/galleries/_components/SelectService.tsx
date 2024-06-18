"use client";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";

type Service = {
	id: number;
	name: string;
};

export default function SelectService() {
	const token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE1ODUxMDg5LCJpYXQiOjE3MTU3NjQ2ODksImp0aSI6IjExNTdiN2NjYzRlNDQ1ZTg4OTcyYTJhODk4ZmYzZGVjIiwidXNlcl9pZCI6MX0.EnwhDGEQSXUpdaipeZAVK7FR2lSsYYRhPUvMTdNYWrw";
	const [services, setServices] = useState<Service[]>([]);
	useEffect(() => {
		fetch("http://127.0.0.1:8000/service/simple/list/", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => response.json())
			.then((data) => setServices(data))
			.catch((error) => console.error("Error:", error));
	}, []);

	return (
		<Select>
			<SelectTrigger className='w-[180px]'>
				<SelectValue placeholder='Select service' />
			</SelectTrigger>
			<SelectContent>
				{services.map((service: Service) => (
                    console.log(`service: ${service.name}, service.id: ${service.id}`),
					<SelectItem key={service.id} value={service.name}>
						{service.name}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}


