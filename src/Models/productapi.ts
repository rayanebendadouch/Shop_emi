export interface Productapi {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number; // Fixed typo from "pice" to "price"
    discountPercentage: number; // Changed from string to number
    rating: number;
    stock: number;
    tags: string[];
    images:string[];
}
