import Image from "next/image";
import type { Story } from "../stories.types";

type StoryCardProps = {
  story: Story;
};

const categoryLabels: Record<string, string> = {
  heritage: "HERITAGE",
  cuisine: "CUISINE",
  "signature-dishes": "SIGNATURE DISHES",
  hospitality: "HOSPITALITY",
  "mauritius-connection": "MAURITIUS CONNECTION",
};

export function StoryCard({ story }: StoryCardProps) {
  return (
    <article className="story-card group" data-story-card>
      <a href={`/stories/${story.slug}`} className="story-card-link">
        <div className="story-card-media">
          <Image
            src={story.coverImage}
            alt={story.title}
            width={800}
            height={450}
            className="story-card-image"
          />
          <div className="story-card-overlay" />
        </div>
        <div className="story-card-content">
          <span className="story-card-category">
            {categoryLabels[story.category] || story.category.toUpperCase()}
          </span>
          <h3 className="story-card-title">{story.title}</h3>
          <p className="story-card-excerpt">{story.excerpt}</p>
          <span className="story-card-cta">
            Explore Story →
          </span>
        </div>
      </a>
    </article>
  );
}
