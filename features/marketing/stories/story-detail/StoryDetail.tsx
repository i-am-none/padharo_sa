import Image from "next/image";
import type { Story } from "../stories.types";
import { StoryContent } from "../story-content";
import { StoryCTA } from "../story-cta";

type StoryDetailProps = {
  story: Story;
};

const categoryLabels: Record<string, string> = {
  heritage: "HERITAGE & CUISINE",
  cuisine: "CUISINE",
  "signature-dishes": "SIGNATURE DISHES",
  hospitality: "HOSPITALITY",
  "mauritius-connection": "MAURITIUS CONNECTION",
};

export function StoryDetail({ story }: StoryDetailProps) {
  return (
    <article className="story-detail">
      <header className="story-detail-header">
        <span className="story-detail-category">
          {categoryLabels[story.category] || story.category.toUpperCase()}
        </span>
        <h1 className="story-detail-title">{story.title}</h1>
        {story.subtitle && <p className="story-detail-subtitle">{story.subtitle}</p>}
        <div className="story-detail-meta">
          {story.author && (
            <div className="story-detail-author">
              {story.author.avatar && (
                <Image
                  src={story.author.avatar.src}
                  alt={story.author.avatar.alt}
                  width={40}
                  height={40}
                  className="story-detail-author-avatar"
                />
              )}
              <div className="story-detail-author-info">
                <span className="story-detail-author-name">{story.author.name}</span>
                {story.author.role && (
                  <span className="story-detail-author-role">{story.author.role}</span>
                )}
              </div>
            </div>
          )}
          <div className="story-detail-date">
            <time dateTime={story.publishedAt}>
              {new Date(story.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="story-detail-read-time">{story.readTime} min read</span>
          </div>
        </div>
      </header>

      <div className="story-detail-hero">
        <Image
          src={story.coverImage}
          alt={story.title}
          width={1200}
          height={675}
          className="story-detail-hero-image"
          priority
        />
      </div>

      <div className="story-detail-body">
        <p className="story-detail-introduction">{story.excerpt}</p>
        <StoryContent sections={story.content} />
      </div>

      <div className="story-detail-footer">
        <StoryCTA />
      </div>
    </article>
  );
}
