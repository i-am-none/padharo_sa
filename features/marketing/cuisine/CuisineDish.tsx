import type { CuisineDish as CuisineDishType } from "./cuisine.types";
import { CuisineIngredients } from "./CuisineIngredients";
import Image from "next/image";
import { getCloudinaryUrl, getCloudinaryVideoUrl } from "@/lib/cloudinary";

type CuisineDishProps = {
  dish: CuisineDishType;
  index: number;
};

export function CuisineDish({ dish, index }: CuisineDishProps) {
  return (
    <article className="cuisine-dish" data-cuisine-dish data-cuisine-dish-index={index}>
      <div className="cuisine-dish-media">
        {dish.media.type === "image" && dish.media.image ? (
          <Image
            src={getCloudinaryUrl(dish.media.image.src)}
            alt={dish.media.image.alt}
            width={dish.media.image.width}
            height={dish.media.image.height}
            className="cuisine-media-image"
          />
        ) : dish.media.type === "video" && dish.media.video ? (
          <video
            poster={getCloudinaryUrl(dish.media.video.poster)}
            autoPlay
            loop
            muted
            playsInline
            className="cuisine-media-video"
          >
            {dish.media.video.sources.map((source, idx) => (
              <source key={idx} src={getCloudinaryVideoUrl(source.src)} type={source.type} />
            ))}
          </video>
        ) : null}
      </div>
      <div className="cuisine-dish-content">
        <h3 className="cuisine-dish-name">{dish.name}</h3>
        <p className="cuisine-dish-description">{dish.description}</p>
        <CuisineIngredients ingredients={dish.ingredients} />
      </div>
    </article>
  );
}
