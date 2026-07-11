import Image from "next/image";
import type { PhilosophyMedia } from "./philosophy.types";

type PhilosophyMediaProps = {
  media: PhilosophyMedia;
};

export function PhilosophyMedia({ media }: PhilosophyMediaProps) {
  if (media.type === "image" && media.image) {
    return (
      <Image
        src={media.image.src}
        alt={media.image.alt}
        width={media.image.width}
        height={media.image.height}
        className="philosophy-image"
        priority
      />
    );
  }

  if (media.type === "video" && media.video) {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={media.video.poster}
        className="philosophy-video"
      >
        {media.video.sources.map((source, index) => (
          <source key={index} src={source.src} type={source.type} />
        ))}
      </video>
    );
  }

  return null;
}
