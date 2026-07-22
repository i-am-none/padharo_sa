import { StoryDetail } from "@/features/marketing/stories";
import { RelatedStories } from "@/features/marketing/stories";
import type { Story } from "@/features/marketing/stories/stories.types";
import storiesData from "@/content/stories.json";
import type { Metadata } from "next";

// Placeholder - will be replaced with CMS data fetching
const placeholderStory: Story = {
  id: "placeholder",
  slug: "placeholder",
  title: "Story Not Found",
  category: "heritage",
  excerpt: "This story does not exist yet.",
  coverImage: "/images/placeholder.jpg",
  content: [],
  publishedAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  readTime: 1,
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  // Find story by slug - will be replaced with CMS data fetching
  const story = storiesData.stories.find((s) => s.slug === slug) || placeholderStory;
  
  return {
    title: `${story.title} | Padharo Sa Stories`,
    description: story.seoDescription || story.excerpt,
    keywords: story.keywords,
    openGraph: {
      title: story.title,
      description: story.seoDescription || story.excerpt,
      type: "article",
      locale: "en_US",
      siteName: "Padharo Sa",
      images: [
        {
          url: story.coverImage,
          width: 1200,
          height: 675,
          alt: story.title,
        },
      ],
    },
  };
}

export default async function StoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Find story by slug - will be replaced with CMS data fetching
  const storyData = storiesData.stories.find((s) => s.slug === slug);
  const story = storyData ? {
    ...storyData,
    category: storyData.category as any,
    content: storyData.content.map((section: any) => ({
      ...section,
      type: section.type as any,
    })),
  } : placeholderStory;

  // Article structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": story.title,
    "description": story.seoDescription || story.excerpt,
    "image": story.coverImage,
    "author": {
      "@type": "Organization",
      "name": story.author?.name || "Padharo Sa",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Jain's Little India",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.png",
      },
    },
    "datePublished": story.publishedAt,
    "dateModified": story.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://padharo-sa.mu/stories/${story.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="story-detail-page">
        <div className="story-detail-container">
          <StoryDetail story={story} />
        </div>
        <div className="story-detail-related">
          <RelatedStories currentStoryId={story.id} stories={[]} />
        </div>
      </div>
    </>
  );
}
