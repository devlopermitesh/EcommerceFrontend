import React, { useState } from "react";
import Sheetbox from "./Sheetbox"; // Assuming you have a Sheetbox component
import useRoutes from "@/hooks/useRoutes"; // Custom hook for fetching routes
import NavbarItem from "./NavbarItem"; // Assuming you have a NavbarItem component
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface Collection {
  id: string;
  name: string;
  products: string[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  collections: Collection[];
}

type MenuState = "pages" | "collections" | "products";

export function MobileMenu({ isOpen, onClose, collections }: MobileMenuProps) {
  const routes = useRoutes(); // Get routes using a custom hook
  const [menuState, setMenuState] = useState<MenuState>("pages"); // Default state: pages
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null); // Selected collection

  const handleCollectionClick = (collection: Collection) => {
    setSelectedCollection(collection); // Set selected collection
    setMenuState("products"); // Switch to product view
  };



  // Function to handle rendering content based on the current menu state
  const output = (): React.ReactNode => {
    switch (menuState) {
      case "pages":
        return (
          <div className="flex flex-col space-y-3 items-center justify-center">
            {routes.map((route) => (
              <NavbarItem key={route.label} {...route} />
            ))}
          </div>
        );
      case "collections":
        return (
        <div className="flex flex-col h-auto space-y-3 items-center justify-center overflow-y-auto max-h-[70vh] w-full">
            <div className="flex flex-col w-full space-y-3">
                {collections.map((collection) => (
                    <Button
                        key={collection.id}
                        variant="ghost"
                        className="w-full justify-between text-left text-black hover:bg-gray-800 p-4"
                        onClick={() => handleCollectionClick(collection)}
                    >
                        <span className="font-medium">{collection.name}</span>
                    </Button>
                ))}
            </div>
      
        </div>
        );
      case "products":
     return (
          <div className="space-y-4 overflow-y-auto max-h-[90vh]">
            <Link to={selectedCollection?.name ?? "/"} className="text-black font-bold text tracking-wide mb-2 text-center">{`Trending ${selectedCollection?.name} Products`}</Link>
               
            {selectedCollection?.products.map((product, index) => (
              <div key={index} className="bg-white text-black p-4 border border-gray-600 hover:bg-gray-800 rounded-md ">
                <h3 className="font-medium">{product}</h3>
                <p className="text-sm mt-1">49.99</p>
                <Button size="sm" className="bg-black text-white hover:bg-gray-800 mt-2">
                  Add to Cart
                </Button>
              </div>
            ))}
         
          </div>
        );
      default:
        return <h2>Something went wrong!</h2>;
    }
  };

  return (
    <Sheetbox open={isOpen} onclose={onClose} side="left" title="Exclusive" description="Browse our exclusive collections">
      <div className="flex flex-col  text-black ">
        {/* Navigation to toggle between Pages and Collections */}
        <div className="flex flex-row justify-around p-4 border-b border-gray-600">
          <h2
            className={`text-lg font-medium cursor-pointer py-2 ${menuState === "pages" ? "text-black underline" : "text-gray-400"}`}
            onClick={() => setMenuState("pages")}
          >
            Pages
          </h2>
          <h2
            className={`text-lg font-medium cursor-pointer py-2 ${menuState === "collections" ? "text-black underline" : "text-gray-400"}`}
            onClick={() => setMenuState("collections")}
          >
            Collections
          </h2>
        </div>

        {/* Content Area */}
        <div className="flex flex-col space-y-4 p-4 h-screen ">{output()}</div>
      </div>
    </Sheetbox>
  );
}
