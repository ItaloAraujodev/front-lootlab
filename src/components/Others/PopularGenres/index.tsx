import { Mocks } from "@/mocks";
import CardGenre from "../CardGenres";
import { Star } from "lucide-react";
import { Common } from "@/components/Common";
import Carousel from "../Carousels/Carousel";

export default function PopularGenres() {
  return (
    <div className="flex flex-col gap-5">
      <Common.CommonTitleSection>
        <Star /> Generos Populares
      </Common.CommonTitleSection>

      <Carousel>
        {Mocks.gameCategories.map((category, index) => (
          <div className="p-1" key={category.id + index}>
            <CardGenre
              key={category.id}
              image={category.image}
              genre={category.genre}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
