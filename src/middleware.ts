import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const authHeader = req.headers.get('Authorization');
    let token;

    if (authHeader) {
        token = authHeader.split(' ')[1];
    }

    if (token) {
        // Verify the token with the backend
        const response = await fetch("http://127.0.0.1:8000/accounts/verify-token/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            // If the token is not valid, redirect to the login page
            console.log("Token is not valid");
        }
    }

   
}

export const config = {
    matcher: '/admin/:path*'
}