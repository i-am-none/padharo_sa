import type { Story } from "../stories.types";
import { StoryCard } from "../story-card";

type StoryGridProps = {
  stories: Story[];
};

export function StoryGrid({ stories }: StoryGridProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
}
