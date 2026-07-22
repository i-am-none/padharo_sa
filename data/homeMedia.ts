import { getCloudinaryUrl, getCloudinaryVideoUrl } from '@/lib/cloudinary';
import homeContent from '@/content/home.json';

export const homeMedia = {
  hero: {
    video: {
      poster: getCloudinaryUrl(homeContent.hero.video.poster),
      sources: homeContent.hero.video.sources.map(source => ({
        src: getCloudinaryVideoUrl(source.src),
        type: source.type,
      })),
    },
  },
  hospitality: {
    video: {
      poster: getCloudinaryUrl('Home/JLI/hero-poster'),
      sources: homeContent.atmosphere.media.video.sources.map(source => ({
        src: getCloudinaryVideoUrl(source.src),
        type: source.type,
      })),
    },
  },
  philosophy: {
    video: {
      poster: getCloudinaryUrl('Home/JLI/hero-poster'),
      sources: homeContent.philosophy.media.video.sources.map(source => ({
        src: getCloudinaryVideoUrl(source.src),
        type: source.type,
      })),
    },
  },
  signatureCuisine: {
    video: {
      poster: getCloudinaryUrl('Home/JLI/hero-poster'),
      sources: homeContent.cuisine.media.video.sources.map(source => ({
        src: getCloudinaryVideoUrl(source.src),
        type: source.type,
      })),
    },
  },
  featuredDishes: homeContent.cuisine.dishes.map(dish => ({
    id: dish.id,
    image: {
      src: dish.media.image.src.startsWith('http') ? dish.media.image.src : getCloudinaryUrl(dish.media.image.src),
      alt: dish.media.image.alt,
    },
  })),
} as const;
