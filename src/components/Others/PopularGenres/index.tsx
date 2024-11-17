import { Mocks } from "@/mocks";
import CardGenre from "../CardGenres";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function PopularGenres() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-xl font-bold text-lootlab-font-base">
        Generos Populares
      </h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="group w-full max-w-none select-none"
      >
        <CarouselContent className="-ml-1">
          {Mocks.gameCategories.map((category, index) => (
            <CarouselItem
              key={index}
              className="pl-1 sm:basis-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/6"
            >
              <div className="p-1">
                <CardGenre
                  key={category.id}
                  image={category.image}
                  genre={category.genre}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="opacity-70 transition-opacity hover:opacity-100 disabled:opacity-10" />
        <CarouselNext className="opacity-70 transition-opacity hover:opacity-100 disabled:opacity-10" />
      </Carousel>
    </div>
  );
}
