import { Boardings } from "@/data/dummy";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Media from "./Media";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const Boarding = ({ className }: { className: string }) => {
  const [emblaApi, setEmblaApi] = useState<any>(null);
  const totalSlides = Boardings.length;

  // Set up auto-scroll to the next slide every 60 seconds
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      const currentIndex = emblaApi.selectedScrollSnap();
      const nextIndex = (currentIndex + 1) % totalSlides;
      emblaApi.scrollTo(nextIndex);
    }, 60000); // 60 seconds

    return () => clearInterval(interval);
  }, [emblaApi, totalSlides]);

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <Carousel className="h-full" opts={{ loop: true }} setApi={setEmblaApi}>
        <CarouselContent className="flex flex-row relative w-[110%] h-full !gap-0">
          {Boardings.map((board) => (
            <CarouselItem className="relative h-full w-full" key={board.title}>
              {board.needstyle && (
                <div className="absolute flex flex-col h-full w-full items-center justify-center z-30">
                  <h1 className="text-lg sm:text-3xl font-bold font-mono text-shadow-xs text-shadow-slate-300">
                    {board.title}
                  </h1>
                  <p className="text-xs md:text max-w-50 md:max-w-xs text-gray-600 text-shadow-xs text-shadow-slate-300">
                    {board.description}
                  </p>
                  <Button className="bg-transparent text-md font-thin hover:bg-transparent text-shadow-black text-shadow-xs cursor-pointer flex items-center">
                    Shop Now
                    <ChevronRight size={25} className="md:!w-8 md:!h-8 text-white" />
                  </Button>
                </div>
              )}
              <Media medias={[...board.medias]} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Boarding;
