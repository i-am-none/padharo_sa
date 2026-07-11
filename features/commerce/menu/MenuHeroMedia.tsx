import Image from "next/image";
import type { MenuHeroMedia } from "./menu.types";

interface MenuHeroMediaProps {
  content: MenuHeroMedia;
}

export function MenuHeroMedia({ content }: MenuHeroMediaProps) {
  return (
    <div className="menu-hero-media absolute inset-0">
      {content.type === "video" ? (
        <video
          src={content.src}
          poster={content.poster}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
      ) : (
        <Image
          src={content.src}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}
    </div>
  );
}
