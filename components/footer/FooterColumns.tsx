import Link from 'next/link';
import Image from 'next/image';
import { contactConfig } from '@/lib/config/contact';
import { FooterSocials } from './FooterSocials';
import { FooterNewsletter } from './FooterNewsletter';

export function FooterColumns() {
  const exploreLinks = [
    { label: 'Home', href: '/' },
    { label: 'Experience', href: '/experience' },
    { label: 'Menu', href: '/menu' },
    { label: 'Stories', href: '/stories' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Reserve', href: '/reserve' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="relative z-10 grid gap-12 md:grid-cols-2 lg:grid-cols-4 px-6 lg:px-12 py-16 max-w-7xl mx-auto">
      {/* Column 1: Brand */}
      <div className="space-y-6 md:col-span-2 lg:col-span-1">
        <Image
          src="https://res.cloudinary.com/zrqybpla/image/upload/v1784608071/Logo-padharo-sa1-1024x410_ro9af0.webp"
          alt="Padharo Sa"
          width={200}
          height={80}
          className="h-14 w-auto object-contain"
          priority
        />
        <p className="font-sans text-sm leading-relaxed text-amber-100/80 max-w-xs">
          Bringing the authentic royal hospitality of Rajasthan to Mauritius through timeless recipes, warm welcomes, and unforgettable dining experiences.
        </p>
        <FooterSocials />
      </div>

      {/* Column 2: Explore */}
      <div>
        <h3 className="font-serif text-lg font-semibold text-amber-200 mb-6 tracking-wide">
          Explore
        </h3>
        <ul className="space-y-3">
          {exploreLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative inline-block font-sans text-sm text-amber-100/70 transition-colors hover:text-amber-100"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Contact */}
      <div>
        <h3 className="font-serif text-lg font-semibold text-amber-200 mb-6 tracking-wide">
          Contact
        </h3>
        <ul className="space-y-4">
          <li className="font-sans text-sm text-amber-100/70 leading-relaxed">
            {contactConfig.restaurant.address}
          </li>
          <li>
            <a
              href={`tel:${contactConfig.restaurant.phone}`}
              className="font-sans text-sm text-amber-100/70 transition-colors hover:text-amber-100"
            >
              {contactConfig.restaurant.phone}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${contactConfig.restaurant.email}`}
              className="font-sans text-sm text-amber-100/70 transition-colors hover:text-amber-100"
            >
              {contactConfig.restaurant.email}
            </a>
          </li>
          <li className="pt-2">
            <a
              href={contactConfig.maps.googleMaps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-amber-200 transition-colors hover:text-amber-100"
            >
              <span>Get Directions</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      {/* Column 4: Newsletter */}
      <div className="md:col-span-2 lg:col-span-1">
        <FooterNewsletter />
      </div>
    </div>
  );
}
