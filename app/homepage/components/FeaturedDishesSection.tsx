import homeContent from '@/content/home.json';
import { homeMedia } from '@/data/homeMedia';

export function FeaturedDishesSection() {
  const dishes = homeContent.cuisine.dishes;

  return (
    <section className="section-shell">
      <div className="layout-container">
        <div className="mb-16 text-center md:mb-20">
          <h2 className="cuisine-headline">Featured Dishes</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => {
            const mediaData = homeMedia.featuredDishes.find(
              (d) => d.id === dish.id
            );
            return (
              <div
                key={dish.id}
                className="group overflow-hidden rounded-2xl bg-bg-surface transition-transform hover:scale-[1.02]"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={mediaData?.image.src || '/images/hero-poster.svg'}
                    alt={dish.media.image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 font-display text-2xl font-semibold text-text-heading">
                    {dish.name}
                  </h3>
                  <p className="font-sans text-base leading-relaxed text-text-secondary line-clamp-3">
                    {dish.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
