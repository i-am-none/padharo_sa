"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import type { StoriesContentModel, StoryCategory, Story, StorySection } from "./stories.types";
import { StoryHero } from "./story-hero";
import { StoryCard } from "./story-card";
import { Categories } from "./categories";
import { Footer } from "@/app/homepage/components/Footer";
import storiesData from "@/content/stories.json";

type StoriesProps = {
  content?: StoriesContentModel;
};

export function Stories({ content }: StoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState<StoryCategory | undefined>();
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Load stories from JSON data with type assertion
  const typedStories: Story[] = storiesData.stories.map(story => ({
    ...story,
    category: story.category as StoryCategory,
    content: story.content.map((section: any): StorySection => ({
      ...section,
      type: section.type as StorySection["type"],
    })),
  }));

  const defaultContent: StoriesContentModel = {
    id: "stories",
    eyebrow: "Stories",
    headline: "Discover the traditions, flavours and stories behind Rajasthan",
    description: "Every dish carries history, craftsmanship, and culture. Explore the heritage that defines our culinary journey.",
    stories: typedStories,
  };

  const storiesContent = content || defaultContent;

  const filteredStories = selectedCategory
    ? storiesContent.stories.filter((story) => story.category === selectedCategory)
    : storiesContent.stories;

  const featuredStory = storiesContent.featuredStory || storiesContent.stories.find(s => s.featured) || storiesContent.stories[0];
  const regularStories = featuredStory
    ? storiesContent.stories.filter((story) => story.id !== featuredStory.id)
    : storiesContent.stories;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionElement = sectionRef.current;
    if (!sectionElement || prefersReducedMotion) {
      return;
    }

    const context = gsap.context(() => {
      // Animate story cards on entrance
      const cards = sectionElement.querySelectorAll("[data-story-card]");
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards,
            start: "top 85%",
          },
        }
      );

      // Animate section titles
      const titles = sectionElement.querySelectorAll(".stories-section-title");
      gsap.fromTo(
        titles,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titles,
            start: "top 85%",
          },
        }
      );
    }, sectionElement);

    return () => {
      context.revert();
    };
  }, [filteredStories, prefersReducedMotion]);

  return (
    <section className="stories-page" ref={sectionRef}>
      <StoryHero
        eyebrow={storiesContent.eyebrow}
        headline={storiesContent.headline}
        description={storiesContent.description}
        highlightWords={["stories", "flavours"]}
      />

      <div className="stories-container">
        {featuredStory && (
          <section className="stories-featured">
            <h2 className="stories-section-title">Featured Story</h2>
            <StoryCard story={featuredStory} />
          </section>
        )}

        <section className="stories-categories">
          <Categories
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </section>

        <section className="stories-grid-section">
          <h2 className="stories-section-title">
            {selectedCategory ? `${selectedCategory} Stories` : "Latest Stories"}
          </h2>
          {filteredStories.length > 0 ? (
            <div className="stories-grid">
              {filteredStories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          ) : (
            <div className="stories-empty">
              <p className="stories-empty-text">
                {selectedCategory
                  ? `No stories found in ${selectedCategory} category.`
                  : "No stories published yet. Check back soon!"}
              </p>
            </div>
          )}
        </section>

        <section className="stories-cta">
          <div className="stories-cta-content">
            <h3 className="stories-cta-headline">Experience the Stories in Person</h3>
            <p className="stories-cta-description">
              Reserve your table and taste the heritage behind every dish.
            </p>
            <a href="#reservation" className="stories-cta-button">
              Reserve a Table
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </section>
  );
}
