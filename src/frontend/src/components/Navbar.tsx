import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import type { Page } from "../App";

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const navLinks: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Rooms", page: "rooms" },
  { label: "Amenities", page: "amenities" },
  { label: "Spiritual Experience", page: "spiritual" },
  { label: "Gallery", page: "gallery" },
  { label: "Contact", page: "contact" },
];

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page: Page) => {
    setCurrentPage(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-maroon-900/95 backdrop-blur-sm border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("home")}
            className="flex flex-col leading-none"
            data-ocid="nav.link"
          >
            <span className="font-serif text-lg lg:text-xl font-bold text-gold-400 tracking-wide">
              Divine Tirupati
            </span>
            <span className="font-serif text-xs text-gold-300/80 tracking-widest uppercase">
              Luxury
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.page}
                onClick={() => handleNav(link.page)}
                data-ocid="nav.link"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPage === link.page
                    ? "text-gold-400"
                    : "text-cream-100/80 hover:text-gold-300"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="hidden lg:flex items-center gap-1.5 text-gold-400 text-sm"
            >
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </a>
            <Button
              onClick={() => handleNav("booking")}
              data-ocid="nav.primary_button"
              className="hidden lg:inline-flex bg-gold-gradient text-maroon-950 font-semibold text-sm px-5 py-2 rounded hover:opacity-90 transition-opacity shadow-gold"
            >
              Book Now
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-gold-400 p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-maroon-900 border-t border-gold-500/20 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.page}
                onClick={() => handleNav(link.page)}
                data-ocid="nav.link"
                className={`px-3 py-2.5 text-sm font-medium text-left rounded-md transition-colors ${
                  currentPage === link.page
                    ? "bg-gold-500/20 text-gold-400"
                    : "text-cream-100/80 hover:text-gold-300 hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNav("booking")}
              data-ocid="nav.primary_button"
              className="mt-2 bg-gold-gradient text-maroon-950 font-semibold"
            >
              Book Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
