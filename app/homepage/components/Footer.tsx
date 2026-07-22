import Link from 'next/link';
import { contactConfig } from '@/lib/config/contact';

export function Footer() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Stories', href: '/stories' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="border-t border-border-soft bg-bg-secondary py-16">
      <div className="layout-container">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-logo mb-4">Padharo Sa</h3>
            <p className="font-sans text-sm leading-relaxed text-text-secondary">
              A premium Rajasthani hospitality experience in Mauritius, bringing the
              authentic flavors and royal traditions of Rajasthan to your table.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-text-heading">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-text-secondary transition-colors hover:text-accent-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-text-heading">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="font-sans text-sm text-text-secondary">
                {contactConfig.restaurant.address}
              </li>
              <li className="font-sans text-sm text-text-secondary">
                <a
                  href={`tel:${contactConfig.restaurant.phone}`}
                  className="transition-colors hover:text-accent-primary"
                >
                  {contactConfig.restaurant.phone}
                </a>
              </li>
              <li className="font-sans text-sm text-text-secondary">
                <a
                  href={`mailto:${contactConfig.restaurant.email}`}
                  className="transition-colors hover:text-accent-primary"
                >
                  {contactConfig.restaurant.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-text-heading">
              Newsletter
            </h4>
            <p className="mb-4 font-sans text-sm text-text-secondary">
              Subscribe for updates on special events and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full border border-border-soft bg-bg-surface px-4 py-2 font-sans text-sm text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary"
                suppressHydrationWarning
              />
              <button
                type="button"
                className="rounded-full bg-accent-primary px-4 py-2 font-sans text-sm font-semibold text-bg-base transition-colors hover:bg-accent-hover focus-ring"
                suppressHydrationWarning
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border-soft pt-8 text-center md:mt-16">
          <p className="font-sans text-sm text-text-muted">
            © {new Date().getFullYear()} Padharo Sa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
