import Image from "next/image";
import type { StorySection } from "../stories.types";

type StoryContentProps = {
  sections: StorySection[];
};

export function StoryContent({ sections }: StoryContentProps) {
  return (
    <div className="story-content">
      {sections.map((section, index) => {
        switch (section.type) {
          case "heading":
            const HeadingTag = section.level === 2 ? "h2" : section.level === 3 ? "h3" : "h4";
            return (
              <HeadingTag key={index} className={`story-heading story-heading-${section.level}`}>
                {section.content}
              </HeadingTag>
            );
          case "paragraph":
            return (
              <p key={index} className="story-paragraph">
                {section.content}
              </p>
            );
          case "image":
            return (
              <figure key={index} className="story-image-container">
                {section.image?.image && (
                  <Image
                    src={section.image.image.src}
                    alt={section.image.image.alt}
                    width={section.image.image.width}
                    height={section.image.image.height}
                    className="story-image"
                  />
                )}
                {section.image?.image && section.image.image.alt && (
                  <figcaption className="story-image-caption">{section.image.image.alt}</figcaption>
                )}
              </figure>
            );
          case "quote":
            return (
              <blockquote key={index} className="story-quote">
                <p className="story-quote-text">{section.content}</p>
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
