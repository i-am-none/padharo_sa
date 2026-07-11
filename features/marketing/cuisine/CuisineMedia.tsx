import Image from "next/image";
import type { CuisineMedia as CuisineMediaType } from "./cuisine.types";

type CuisineMediaProps = {
  media: CuisineMediaType;
};

export function CuisineMedia({ media }: CuisineMediaProps) {
  if (media.type === "image" && media.image) {
    return (
      <div className="cuisine-media-wrapper">
        <Image
          src={media.image.src}
          alt={media.image.alt}
          width={media.image.width}
          height={media.image.height}
          className="cuisine-media-image"
          priority
        />
      </div>
    );
  }

  if (media.type === "video" && media.video) {
    return (
      <div className="cuisine-media-wrapper">
        <video
          poster={media.video.poster}
          className="cuisine-media-video"
          autoPlay
          loop
          muted
          playsInline
        >
          {media.video.sources.map((source, index) => (
            <source key={index} src={source.src} type={source.type} />
          ))}
        </video>
      </div>
    );
  }

  return null;
}
