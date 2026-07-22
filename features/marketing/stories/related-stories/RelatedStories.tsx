import type { Story } from "../stories.types";
import { StoryCard } from "../story-card";

type RelatedStoriesProps = {
  currentStoryId: string;
  stories: Story[];
  title?: string;
};

export function RelatedStories({ currentStoryId, stories, title = "Related Stories" }: RelatedStoriesProps) {
  const relatedStories = stories
    .filter((story) => story.id !== currentStoryId)
    .slice(0, 3);

  if (relatedStories.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-16 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">{title}</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {relatedStories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
}
