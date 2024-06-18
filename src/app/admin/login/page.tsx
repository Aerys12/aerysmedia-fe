import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
	
	return (
		<div className='grid flex-1 items-center justify-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
			<Card className='w-full max-w-sm'>
				<CardHeader>
					<CardTitle className='text-2xl'>Login</CardTitle>
					<CardDescription>
						Enter your username to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent className='grid gap-4'>
					<div className='grid gap-2'>
						<Label htmlFor='username'>Username</Label>
						<Input
							id='username'
							type='text'
							required
						/>
					</div>
					<div className='grid gap-2'>
						<Label htmlFor='password'>Password</Label>
						<Input id='password' type='password' required />
					</div>
				</CardContent>
				<CardFooter>
					<Button className='w-full'>Sign in</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
