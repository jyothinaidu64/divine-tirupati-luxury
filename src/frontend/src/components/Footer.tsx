import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import type { Page } from "../App";

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const quickLinks: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About Us", page: "about" },
  { label: "Rooms & Suites", page: "rooms" },
  { label: "Amenities", page: "amenities" },
  { label: "Spiritual Experience", page: "spiritual" },
  { label: "Gallery", page: "gallery" },
  { label: "Booking", page: "booking" },
  { label: "Contact", page: "contact" },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/divinetirupatiluxury",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://facebook.com/divinetirupatiluxury",
    label: "Facebook",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/divinetirupati",
    label: "Twitter",
  },
];

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNav = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-maroon-950 border-t border-gold-500/20 text-cream-100">
      {/* Decorative top border */}
      <div className="h-1 bg-gold-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl text-gold-400 font-bold mb-2">
              Divine Tirupati
            </h3>
            <p className="font-serif text-sm text-gold-300/70 tracking-widest uppercase mb-4">
              Luxury
            </p>
            <p className="text-sm text-cream-100/60 leading-relaxed mb-6">
              Where devotion meets luxury. A sanctuary of peace and opulence in
              the holy city of Tirupati.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 hover:bg-gold-500/40 transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-gold-400 font-semibold mb-5 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.page)}
                    data-ocid="footer.link"
                    className="text-sm text-cream-100/60 hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-gold-400 font-semibold mb-5 text-lg">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-cream-100/60">
                <MapPin size={15} className="text-gold-400 mt-0.5 shrink-0" />
                <span>
                  12-34, Balaji Nagar, Near Alipiri Gate, Tirupati, AP 517501
                </span>
              </li>
              <li className="flex gap-3 text-sm text-cream-100/60">
                <Phone size={15} className="text-gold-400 shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-gold-300 transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-3 text-sm text-cream-100/60">
                <Mail size={15} className="text-gold-400 shrink-0" />
                <a
                  href="mailto:reservations@divinetirupatiluxury.com"
                  className="hover:text-gold-300 transition-colors break-all"
                >
                  reservations@divinetirupatiluxury.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-gold-400 font-semibold mb-5 text-lg">
              Hotel Hours
            </h4>
            <ul className="space-y-2 text-sm text-cream-100/60">
              <li className="flex justify-between">
                <span>Check-in</span>
                <span className="text-gold-300">2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Check-out</span>
                <span className="text-gold-300">12:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Reception</span>
                <span className="text-gold-300">24/7</span>
              </li>
              <li className="flex justify-between">
                <span>Restaurant</span>
                <span className="text-gold-300">6am – 11pm</span>
              </li>
              <li className="flex justify-between">
                <span>Spa</span>
                <span className="text-gold-300">7am – 9pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-gold-500/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-cream-100/40">
            © {new Date().getFullYear()} Divine Tirupati Luxury. All rights
            reserved.
          </p>
          <p className="text-xs text-cream-100/40">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
