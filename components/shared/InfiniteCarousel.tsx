"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface CarouselProps {
  images: string[];
  reverse?: boolean;
}

export default function InfiniteCarousel({ images, reverse }: CarouselProps) {
  return (
    <div className="w-full relative">
      <Marquee
        pauseOnHover
        speed={20}
        gradient={false}
        className="flex gap-4"
        direction={reverse ? "right" : "left"}
      >
        {images.map((image, i) => (
          <div
            key={i}
            className="border border-[#FFFFFF24] rounded-xl overflow-hidden mr-4"
          >
            <Image
              src={image}
              alt={`Carousel image ${i}`}
              width={333}
              height={230}
              className="w-[333px] h-[230px] object-cover rounded-xl"
              loading="lazy"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
