import type { BoardingMedia } from "@/data/dummy";
import { useState, type JSX } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface MediaProps {
  medias: BoardingMedia[];
}

const Media: React.FC<MediaProps> = ({ medias }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  if (!medias.length) return <div>❌ No media available</div>;

  const currentMedia = medias[currentMediaIndex];

  const renderMedia = (media: BoardingMedia): JSX.Element =>
    media.isVideo ? (
      <video
        src={media.url}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
      />
    ) : (
      <img
        src={media.url}
        alt={media.filename}
        className="w-full h-full object-fill"
      />
    );

  return (
    <div className="flex flex-col items-center h-[400px] w-full relative">
      {renderMedia(currentMedia)}

      {medias.length > 1 && (
        <div className="absolute bottom-5 left-15 z-50  flex">
          <Carousel className="w-full max-w-xl">
            <CarouselContent className="gap-2 w-60 sm:w-full">
              {medias.map((media, idx) => (
                <CarouselItem
                  key={media.url}
                  onClick={() => setCurrentMediaIndex(idx)}
                  className="basis-1/4 md:basis-1/3 w-[70px] h-[50px] md:w-[90px] md:h-[70px] shrink-0 grow-0 cursor-pointer rounded overflow-hidden"
                >
                  {renderMedia(media)}
                </CarouselItem>
              ))}
            </CarouselContent>

            {medias.length > 3 && (
              <>
                <CarouselPrevious className="!-left-8 md:!-left-10" />
                <CarouselNext className="!-right-8 md:!-right-10" />
              </>
            )}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Media;
