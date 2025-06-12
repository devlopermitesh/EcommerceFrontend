
export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string; // ISO string
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

export interface Review {
  rating: number;
  comment: string;
  date: string; // ISO string
  reviewerName: string;
  reviewerEmail: string;
}

export interface Category{
 slug: string, name: string,  image:string
}
export type Cancellation = {
  orderId: string
  product: string
  productImage: string
  reason: string
  requestedBy: "User" | "Admin"
  date: string // ISO string
  status: "Pending" | "Approved" | "Rejected"
}
export type WishlistItem = {
  id: string;
  product: string;
  productImage: string;
  price: number;
  availability: "In Stock" | "Out of Stock";
  addedOn: string; // ISO date string
};
