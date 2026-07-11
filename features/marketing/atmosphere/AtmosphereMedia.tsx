import { forwardRef } from "react";
import Image from "next/image";

import type { AtmosphereMedia as AtmosphereMediaType } from "./atmosphere.types";

type AtmosphereMediaProps = {
  media: AtmosphereMediaType;
};

export const AtmosphereMedia = forwardRef<HTMLDivElement, AtmosphereMediaProps>(
  function AtmosphereMedia({ media }, ref) {
    if (media.type === "image" && media.image) {
      return (
        <div className="atmosphere-media" ref={ref}>
          <Image
            src={media.image.src}
            alt={media.image.alt}
            width={media.image.width}
            height={media.image.height}
            className="atmosphere-image"
            priority
          />
        </div>
      );
    }

    if (media.type === "video" && media.video) {
      return (
        <div className="atmosphere-media" ref={ref}>
          <div className="atmosphere-video-frame">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="atmosphere-video"
              poster={media.video.poster}
            >
              {media.video.sources.map((source, index) => (
                <source key={index} src={source.src} type={source.type} />
              ))}
            </video>
          </div>
        </div>
      );
    }

    return null;
  },
);
