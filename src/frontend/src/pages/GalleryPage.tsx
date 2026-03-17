import { useState } from "react";

type GalleryCategory =
  | "All"
  | "Rooms"
  | "Dining"
  | "Spa"
  | "Meditation"
  | "Exterior";

const galleryItems: {
  id: string;
  category: Exclude<GalleryCategory, "All">;
  title: string;
  img?: string;
  gradient: string;
}[] = [
  {
    id: "exterior-entrance",
    category: "Exterior",
    title: "Grand Hotel Entrance",
    img: "/assets/generated/hotel-hero.dim_1400x800.jpg",
    gradient: "from-maroon-800 to-maroon-950",
  },
  {
    id: "room-deluxe",
    category: "Rooms",
    title: "Deluxe Temple View Room",
    img: "/assets/generated/room-deluxe.dim_800x600.jpg",
    gradient: "from-gold-700 to-maroon-800",
  },
  {
    id: "room-family",
    category: "Rooms",
    title: "Premium Family Suite",
    img: "/assets/generated/room-family.dim_800x600.jpg",
    gradient: "from-maroon-700 to-gold-800",
  },
  {
    id: "room-royal",
    category: "Rooms",
    title: "Royal Tirumala Suite",
    img: "/assets/generated/room-royal.dim_800x600.jpg",
    gradient: "from-gold-600 to-maroon-900",
  },
  {
    id: "meditation-retreat",
    category: "Meditation",
    title: "Devotional Retreat Room",
    img: "/assets/generated/room-retreat.dim_800x600.jpg",
    gradient: "from-maroon-800 to-gold-900",
  },
  {
    id: "dining-annapurna",
    category: "Dining",
    title: "Annapurna Fine Dining",
    img: "/assets/generated/hotel-dining.dim_800x600.jpg",
    gradient: "from-gold-700 to-maroon-950",
  },
  {
    id: "spa-moksha",
    category: "Spa",
    title: "Moksha Spa Suite",
    img: "/assets/generated/hotel-spa.dim_800x600.jpg",
    gradient: "from-maroon-700 to-gold-700",
  },
  {
    id: "exterior-temple",
    category: "Exterior",
    title: "Tirumala Temple View",
    img: "/assets/generated/tirumala-temple.dim_800x600.jpg",
    gradient: "from-maroon-900 to-gold-800",
  },
  {
    id: "spa-aromatherapy",
    category: "Spa",
    title: "Aromatherapy & Wellness",
    gradient: "from-gold-800 to-maroon-800",
  },
  {
    id: "dining-terrace",
    category: "Dining",
    title: "Private Dining Terrace",
    gradient: "from-maroon-800 to-gold-600",
  },
  {
    id: "meditation-yoga",
    category: "Meditation",
    title: "Sunrise Yoga Hall",
    gradient: "from-gold-600 to-maroon-700",
  },
  {
    id: "exterior-garden",
    category: "Exterior",
    title: "Garden & Courtyard",
    gradient: "from-maroon-700 to-gold-900",
  },
];

const categories: GalleryCategory[] = [
  "All",
  "Rooms",
  "Dining",
  "Spa",
  "Meditation",
  "Exterior",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-maroon-gradient text-center">
        <p className="text-gold-400 font-serif italic text-sm tracking-widest uppercase mb-4">
          Visual Journey
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-white font-bold mb-5">
          Gallery
        </h1>
        <p className="text-cream-100/70 max-w-xl mx-auto px-4">
          A glimpse into the beauty, luxury, and spiritual serenity of Divine
          Tirupati Luxury.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="bg-cream-50 pt-12 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-ocid="gallery.tab"
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                  activeCategory === cat
                    ? "bg-maroon-800 text-cream-50 border-maroon-800 shadow-maroon"
                    : "bg-white text-maroon-700 border-gold-200 hover:border-gold-400 hover:text-maroon-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-cream-50 py-10 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className={`group relative rounded-xl overflow-hidden shadow-sm hover:shadow-gold transition-all duration-300 cursor-pointer ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
                style={{ aspectRatio: i === 0 ? "auto" : "1" }}
              >
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ minHeight: i === 0 ? "300px" : "180px" }}
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                    style={{ minHeight: i === 0 ? "300px" : "180px" }}
                  >
                    <span className="text-gold-300/60 font-serif text-3xl">
                      \u2726
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-serif text-sm font-semibold">
                      {item.title}
                    </p>
                    <p className="text-gold-300/80 text-xs mt-0.5">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
