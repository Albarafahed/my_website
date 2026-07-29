"use client";

import useEmblaCarousel from "embla-carousel-react";

interface ProjectGalleryProps {
  images: string[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div className="min-w-full" key={index}>
              <img
                src={image}
                alt=""
                className="h-[420px] w-full rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-3">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="rounded-lg bg-cyan-500 px-4 py-2 text-white"
        >
          ◀
        </button>

        <button
          onClick={() => emblaApi?.scrollNext()}
          className="rounded-lg bg-cyan-500 px-4 py-2 text-white"
        >
          ▶
        </button>
      </div>
    </div>
  );
}