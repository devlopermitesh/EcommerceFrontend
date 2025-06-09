import type { Category } from "@/data/type";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  category: Category
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={`/${category.slug}`}
      className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg shadow-sm bg-white text-black hover:bg-[#DB4444] hover:text-white border transition-all duration-200 ease-in-out transform hover:scale-105 sm:w-72 md:w-80 lg:w-96"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-40 object-contain rounded-lg"
      />
      <p className="text-sm font-medium sm:text-base lg:text-lg">{category.name}</p>
    </Link>
  );
};

export default CategoryCard;
