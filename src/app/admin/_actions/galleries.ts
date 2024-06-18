"use server";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";




export async function editGallery(formData: FormData, galleryId: number) {
	console.log(formData);
}


export async function deleteGallery(galleryId: number) {
    console.log(galleryId);
}

export async function createGallery(formData: FormData) {
    
    console.log(formData);
}