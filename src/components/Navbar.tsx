import {  useState } from "react";
import NavbarItem from "./NavbarItem";
import { SearchBar } from "./SearchBar";
import { Button } from "./ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { Badge } from "./ui/badge";
import Hamburger from "./HambuggerButton";
import useRoutes from "@/hooks/useRoutes";
import { MobileMenu } from "./MobileMenu";
import {collections} from "@/data/dummy";

const Navbar = () => {
   const routes = useRoutes();
  const [cartCount] = useState(0);
  const [wishlistCount] = useState(0);
    const [isMobileMenuopen, setisMobileMenuopen] = useState(false);
  const toggleMenu = () => {
    setisMobileMenuopen(!isMobileMenuopen);
  };


  return (
    <>
    <div className="relative flex flex-col w-full">
 {/* main navbar  */}
    <div className="flex flex-row border md:px-3 md:py-2">
      {/* mobile Menu  */}
<Hamburger toggleMenu={toggleMenu} isMobileMenuopen={isMobileMenuopen} />
      {/* Logo Section */}
      <div className="flex flex-1 items-center justify-center py-2">
        <h3 className="text-2xl font-bold">Exclusive</h3>
      </div>


      {/* cart icons visible in small device  */}
  {/* Icons Section */}
        <div className="flex flex-row gap-2  items-center sm:hidden">
          {/* Wishlist Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="relative text-black hover:text-black-700 hover:bg-black-100 transition-colors cursor-pointer"
            aria-label={`Wishlist with ${wishlistCount} items`}
          >
            <Heart size={24} className="!h-6 !w-6" />
            {wishlistCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs text-white bg-black hover:bg-black-600"
              >
                {wishlistCount}
              </Badge>
            )}
          </Button>

          {/* Cart Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="relative text-black hover:text-black-700 hover:bg-black-100 transition-colors cursor-pointer"
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            <ShoppingCart size={24} className="!h-6 !w-6" />
            {cartCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs text-white bg-black hover:bg-black-600"
              >
                {cartCount}
              </Badge>
            )}
          </Button>
        </div>

      {/* Navigation & Icons hidden in small devices */}
      <div className=" flex-3 flex-row justify-between gap-2 py-2 pr-40 hidden md:flex">
        
        {/* Navbar Items */}
        <div className="flex flex-1 flex-row gap-6 justify-start">
          {routes.map((route) => (
            <NavbarItem key={route.label} {...route} />
          ))}
        </div>

        {/* Search Bar (hidden on small screens) */}
        <div className="hidden sm:block">
          <SearchBar />
        </div>

        {/* Icons Section */}
        <div className="flex flex-row gap-2">
          {/* Wishlist Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="relative text-black hover:text-black-700 hover:bg-black-100 transition-colors cursor-pointer"
            aria-label={`Wishlist with ${wishlistCount} items`}
          >
            <Heart size={24} className="!h-6 !w-6" />
            {wishlistCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs text-white bg-black hover:bg-black-600"
              >
                {wishlistCount}
              </Badge>
            )}
          </Button>

          {/* Cart Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="relative text-black hover:text-black-700 hover:bg-black-100 transition-colors cursor-pointer"
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            <ShoppingCart size={24} className="!h-6 !w-6" />
            {cartCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs text-white bg-black hover:bg-black-600"
              >
                {cartCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>


    </div>   
         {/* Mobile Search Bar */}
          <div className="sm:hidden pb-3">
            <SearchBar  className="h-10"/>
          </div>
    <MobileMenu
        isOpen={isMobileMenuopen}
        onClose={() => setisMobileMenuopen(false)}
        collections={collections}
      />
     </div>

    </>
  );
};

export default Navbar;
