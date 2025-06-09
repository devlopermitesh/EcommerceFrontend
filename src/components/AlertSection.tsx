import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import type { Category, Product } from "@/data/type";
import ProductCard from "./Card";
import { Button } from "./ui/button";
import { CountdownTimer } from "./CountdownTimer";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import AdviceCard from "./AdviseCard";
import { ChevronRight} from "lucide-react";
type TimeSale={
    isTimeSale:boolean,
    startTime:Date|null,
    endTime:Date|null,
    isFinish:boolean,
}
interface AlertSectionProps{
    heading?:string,
    headingTag?:string,
    description?:string,
    time:TimeSale,
   items:Product[] | Category[],
   className?:string,
   link?:string,
   SectionType:"CarouselProductView"|"ListView"|"CarouselCategoryView"|"Advtice"|"Boarding"
}
const AlertSection:React.FC<AlertSectionProps>=({heading,time,items,description,headingTag,className,SectionType,link})=>{
    function isProductArray(items: (Product | Category)[]): items is Product[] {
  return (items.length > 0 && "price" in items[0]); // check for a key unique to Product
}

function Output():React.ReactNode{
  switch (SectionType) {
    case "Boarding":
      return (
        <div className="flex flex-col w-full">
{
  isProductArray(items) && items.map((item)=>{
    return (<AdviceCard needEdit={false} product={item}/>)
  })
}
        </div>
      );
case "Advtice":
  if(!isProductArray(items)){
    return null;
  }
  return (
    <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between items-center py-6 md:px-3 ">
    <span className="flex-2 flex flex-col">
    <h1 className=" md:text-3xl font-bold capitalize">{heading}</h1>
    <small className="text-xs text-gray-500">{description}</small>
    </span></div>
   <div className="bg-white text-black px-4 md:px-8 lg:px-16 py-10 space-y-10">
      {/* Product Grid */}
      { items.length >= 4 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Large Image */}
          <div className="md:col-span-1 relative">
            <img
              src={items[0].images?.[0]}
              alt={items[0].title || "Item 0"}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Right Section */}
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Banner Card (spanning full row) */}
            <div className="col-span-2 md:col-span-3 bg-black text-white rounded-xl p-4 flex flex-col justify-between">
              <div className="flex  sm:flex-nowrap">
                <div className="flex flex-col truncate">
                  <h2 className="text-xl font-semibold">{items[1].title}</h2>
                <p className="text-sm mt-2 max-w-60 sm:max-w-md ">{items[1].description}</p>
              <Button className="mt-4 self-start px-4 py-2 bg-transparent text-shadow-xs text-shadow-black text-white rounded-full text-sm font-medium cursor-pointer">
                Shop Now <ChevronRight size={15} className=" md:!w-6 md:!h-6 text-white" />
              </Button>
              </div>
                      <img
                src={items[2].images?.[0]}
                alt={items[2].title || "Item 2"}
                className="w-auto sm:w-full h-32 object-cover rounded-md mb-3 "
              />
              </div>
     
            </div>

            {/* Card 1 */}
            <div className="bg-black text-white rounded-xl p-4 flex flex-col justify-between">
              <img
                src={items[2].images?.[0]}
                alt={items[2].title || "Item 2"}
                className="w-full h-28 object-cover rounded-md mb-3"
              />
              <div>
                <h2 className="text-md font-semibold">{items[2].title}</h2>
                 <p className="text-sm truncate">{items[2].description}</p>

              </div>
             <Button className="mt-4 self-start px-4 py-2 bg-transparent text-shadow-xs text-shadow-black text-white rounded-full text-sm font-medium cursor-pointer">
                Shop Now <ChevronRight size={15} className=" md:!w-6 md:!h-6 text-white" />
              </Button>
            </div>

            {/* Card 2 */}
            <div className="bg-black text-white rounded-xl p-4 flex flex-col justify-between">
              <img
                src={items[3].images?.[0]}
                alt={items[3].title || "Item 3"}
                className="w-full h-28 object-cover rounded-md mb-3"
              />
              <div>
                <h2 className="text-md font-semibold">{items[3].title}</h2>
                <p className="text-sm truncate">{items[3].description}</p>
              </div>
             <Button className="mt-4 self-start px-4 py-2 bg-transparent text-shadow-xs text-shadow-black text-white rounded-full text-sm font-medium cursor-pointer">
                Shop Now <ChevronRight size={15} className=" md:!w-6 md:!h-6 text-white" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>

 
  );


    case "CarouselProductView":
    case "CarouselCategoryView":
      return (  <Carousel>
  <div className="flex flex-col sm:flex-row justify-between items-center py-6 sm:px-3  ">
    <span className="flex-2 flex flex-col  w-full">
    <h1 className=" text-2xl md:text-3xl font-bold capitalize">{heading}</h1>
    <small className="text-xs text-gray-500">{description}</small>
    </span>
    {
(time.isTimeSale && time.endTime)?(
    <span className="flex-3 flex justify-start items-center">
  <CountdownTimer endTime={time.endTime} />
    </span>
):(null)
    }
    
<div className="relative   flex-1 min-w-52 mt-3 ">
  <CarouselPrevious  className="size-10 md:!-left-10 cursor-pointer"/>
  <CarouselNext className=" size-10  md:!-right-10 cursor-pointer" />
</div>
    </div>  
  <CarouselContent className="gap-4">
  {
(isProductArray(items))?  items.map((item)=><CarouselItem className=" basis-1/1 sm:basis-1/4 border-none  shadow-none">
        <ProductCard product={item}/>
    </CarouselItem>):(
         items.map((item)=><CarouselItem className="basis-1/2 sm:basis-1/4 border-none  shadow-none">
<CategoryCard category={item}/>
    </CarouselItem>
             ))
  }
  
  </CarouselContent>
  {/* //Footer button  */}
  {
    link && (
  <div className="flex items-center justify-center">
<Link to={link ?? "/"} className="text-white bg-red-400 items-center rounded hover:bg-red-500 px-10 py-2" >
    View All Prodct
</Link>
  </div>
    )
  }
</Carousel>);
 case "ListView":
  return( <>
  <div className="flex flex-row justify-between items-center py-6 px-3  ">
    <span className="flex-2 flex flex-col">
    <h1 className=" md:text-3xl font-bold capitalize">{heading}</h1>
    <small className="text-xs text-gray-500">{description}</small>
    </span>
    <Link to={link ?? "/"} className="text-white bg-red-400 items-center rounded hover:bg-red-500 px-10 py-2" >
    View All 
   </Link>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
{
  (isProductArray(items)) && items.slice(0,8).map((item)=><ProductCard product={item}/>)
}
    </div>
    </>);
    default:
      return null;
  }
}

return (
    <div className={cn("flex flex-col w-full h-auto md:px-30  md:mt-10",className)}>
        {/* //heading tag  */}
        <div className="w-full">
          <span className="flex w-full flex-row items-center gap-2 justify-start   px-4">
            <span className="bg-red-500 rounded h-10 w-5"></span>
            <b className="text-red-500 text-md font-bold capitalize">{headingTag}</b>
          </span>
        </div>


        {/* //heading with timer and carousel items  */}
        {
Output()
        }
    </div>
)
}
export default AlertSection;