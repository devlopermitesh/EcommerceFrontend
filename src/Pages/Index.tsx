
import AlertSection from "@/components/AlertSection";
import Boarding from "@/components/Boarding";
import {categories, collections, products } from "@/data/dummy";
import { Headphones, RotateCcw, Truck } from "lucide-react";

const Home=()=>{
const date = new Date();

// 2 din pehle
const twoDaysAgo = new Date(date);
twoDaysAgo.setDate(date.getDate() - 2);

// 2 din baad
const twoDaysafter = new Date(date);
twoDaysafter.setDate(date.getDate() + 2); 

 const alertSections = [
  {
    time: {
      isTimeSale: true,
      startTime: twoDaysAgo,
      endTime: twoDaysafter,
      isFinish: false,
    },
    items: products.filter((product) => typeof product.brand === "string"),
    className: "",
    description: "Big billion sales for this Diwali",
    heading: "Flash Sales",
    headingTag: "Sales",
    key: "sales-section-1",
    SectionType: "CarouselProductView" as const,
  },
    {
    time: {
      isTimeSale:false,
      startTime: null,
      endTime: null,
      isFinish: false,
    },
    items: categories,
    className: "",
    description: "View all the category of products",
    heading: "Browse By Category",
    headingTag: "category",
    key: "sales-section-2",
    SectionType: "CarouselCategoryView" as const,
  },
     

      {
    time: {
      isTimeSale:false,
      startTime: null,
      endTime: null,
      isFinish: false,
    },
    items:products.filter((product) => typeof product.brand === "string"),
    className: "",
    description: "View all the bestselling  products",
    heading: "Best by Selling",
    headingTag: "This Month",
    key: "sales-section-3",
    SectionType: "ListView" as const,
  },
  {
    time: {
      isTimeSale:false,
      startTime: null,
      endTime: null,
      isFinish: false,
    },
    items: products.filter((product) => typeof product.brand === "string").slice(0,1),
    className: "",
    description: "View all the category of products",
    heading: "",
    headingTag: "Most Trending",
    key: "sales-section-8",
    SectionType: "Boarding" as const,
  },
      {
    time: {
      isTimeSale:false,
      startTime: null,
      endTime: null,
      isFinish: false,
    },
    items:products.filter((product) => typeof product.brand === "string"),
    className: "",
    description: "explore all the bestselling  products",
    heading: "Explore our Products",
    headingTag: "Explore",
    key: "sales-section-4",
    SectionType: "CarouselProductView" as const,
  },
      {
    time: {
      isTimeSale:false,
      startTime: null,
      endTime: null,
      isFinish: false,
    },
    items:products.filter((product) => typeof product.brand === "string"),
    className: "",
    description: "explore all the new arrivals products",
    heading: "New Arrival",
    headingTag: "New",
    key: "sales-section-5",
    SectionType: "Advtice" as const,
  },
  
];
    return (
      <div className="flex flex-col space-y-10">
<div className="flex flex-row border">
  {/* //collections category */}
<div className="flex-col flex-1 space-y-2 max-h-[440px] no-scrollbar overflow-y-auto border hidden md:flex items-center">
  <h2 className="text-center italic font-thin">Trending collecions</h2>
  <ul className="flex flex-col   items-center no-scrollbar w-full px-4">
    {collections.map((collection, index) => (
      <li
        key={index}
        className="text-shadow-black font-semibold text-md cursor-pointer hover:underline"
      >
        {collection.name}
      </li>
    ))}
  </ul>
</div>


{/* boarding  */}
<div className="flex-4   max-h-[440px] flex-wrap">
<Boarding className={"w-full sm:w-[90%] "} />
</div>
</div>
<div className="flex flex-col items-center w-full mt-10 gap-5">
{alertSections.map((section) => (
  <AlertSection
    key={section.key}
    time={section.time}
    items={section.items}
    className={section.className}
    description={section.description}
    heading={section.heading}
    headingTag={section.headingTag}
    SectionType={section.SectionType}
  />
))}
</div>
 {/* Feature Icons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center pt-10 border-t my-10 px-30">
        {/* Delivery */}
        <div className="flex flex-col items-center">
          <Truck className="h-10 w-10 mb-2 bg-black text-white shadow-gray-500 shadow-xl rounded-full px-2" />
          <h3 className="font-bold">FREE AND FAST DELIVERY</h3>
          <p className="text-sm text-gray-500">Free delivery for all orders over $140</p>
        </div>

        {/* Customer Service */}
        <div className="flex flex-col items-center">
          <Headphones className="h-10 w-10 mb-2 bg-black text-white shadow-gray-500 shadow-xl rounded-full px-2" />
          <h3 className="font-bold">24/7 CUSTOMER SERVICE</h3>
          <p className="text-sm text-gray-500">Friendly 24/7 customer support</p>
        </div>

        {/* Money Back */}
        <div className="flex flex-col items-center">
          <RotateCcw className="h-10 w-10 mb-2 bg-black text-white shadow-gray-500 shadow-xl rounded-full px-2" />
          <h3 className="font-bold">MONEY BACK GUARANTEE</h3>
          <p className="text-sm text-gray-500">We return money within 30 days</p>
        </div>
      </div>
      </div>
    )
}
export default Home;