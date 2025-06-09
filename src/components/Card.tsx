import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Star } from "lucide-react";
import type { Product } from "@/data/type";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
 <Card className="bg-white rounded-none flex flex-col border-none shadow-none">
    <CardHeader className="p-0 relative">
        <div className="overflow-hidden">
            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-52 sm:h-60 md:h-64 object-cover rounded-t-md bg-[#F5F5F5] transition-transform duration-300 ease-in-out hover:scale-105"
            />
        </div>
        <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-3 bg-white text-black hover:text-black-700 hover:bg-black-100 transition-colors cursor-pointer rounded-full !h-11 !w-11"
        >
            <Heart size={24} className="!h-7 !w-7" />
        </Button>
        <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-17 bg-white text-black hover:text-black-700 hover:bg-black-100 transition-colors cursor-pointer rounded-full !h-11 !w-11"
        >
            <Eye size={24} className="!h-7 !w-7" />
        </Button>
    </CardHeader>
  <CardContent>
        <CardTitle className="text-lg sm:text-xl font-semibold line-clamp-1">
          {product.title}
        </CardTitle>
        
        <CardDescription className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </CardDescription>
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <span className="text-base sm:text-lg font-bold">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500 line-through">
            ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          {product.rating.toFixed(1)} / 5 • {product.stock} in stock
        </div>
  </CardContent>
<CardFooter className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
        <Button
          variant="outline"
          className="text-black border-black hover:bg-black hover:text-white w-full sm:w-auto cursor-pointer"
        >
          Add to Cart
        </Button>
      </CardFooter>
</Card>
  );
}
