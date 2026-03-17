import { Button } from "@/components/ui/button";
import {
  Car,
  ChevronRight,
  Clock,
  Leaf,
  Shield,
  Star,
  Utensils,
  Wifi,
} from "lucide-react";
import type { Page } from "../App";

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const featuredRooms = [
  {
    id: "deluxe",
    title: "Deluxe Temple View Room",
    desc: "Wake up to the sacred silhouette of Tirumala Hills from your private balcony.",
    price: "\u20b94,999",
    img: "/assets/generated/room-deluxe.dim_800x600.jpg",
  },
  {
    id: "family",
    title: "Premium Family Suite",
    desc: "Spacious suite crafted for family comfort, adorned with South Indian art and warm textures.",
    price: "\u20b98,999",
    img: "/assets/generated/room-family.dim_800x600.jpg",
  },
  {
    id: "royal",
    title: "Royal Tirumala Suite",
    desc: "Our grandest offering \u2014 regal d\u00e9cor, panoramic views, and unmatched five-star luxury.",
    price: "\u20b914,999",
    img: "/assets/generated/room-royal.dim_800x600.jpg",
  },
];

const amenities = [
  { id: "dining", icon: Utensils, label: "Pure Veg Fine Dining" },
  { id: "shuttle", icon: Car, label: "Temple Shuttle" },
  { id: "spa", icon: Leaf, label: "Luxury Spa" },
  { id: "wifi", icon: Wifi, label: "High-Speed WiFi" },
  { id: "concierge", icon: Clock, label: "24/7 Concierge" },
  { id: "pilgrimage", icon: Shield, label: "Guided Pilgrimage" },
];

const testimonials = [
  {
    id: "ramesh",
    name: "Ramesh Sharma",
    location: "Delhi",
    rating: 5,
    text: "An extraordinary blend of luxury and spirituality. The temple shuttle made our Tirumala darshan so smooth. We felt cared for throughout our stay.",
  },
  {
    id: "priya",
    name: "Priya Venkatesh",
    location: "Chennai",
    rating: 5,
    text: "The Royal Suite exceeded our expectations. Waking up to the view of Tirumala Hills while enjoying premium hospitality was an unforgettable experience.",
  },
  {
    id: "anil",
    name: "Anil & Family",
    location: "Hyderabad",
    rating: 5,
    text: "Perfect for families on a pilgrimage. The vegetarian restaurant is exceptional, and the staff guided us through every step of our Tirupati visit.",
  },
];

export default function HomePage({ setCurrentPage }: HomePageProps) {
  const nav = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(20,5,5,0.7) 0%, rgba(107,26,26,0.6) 50%, rgba(30,8,8,0.8) 100%), url('/assets/generated/hotel-hero.dim_1400x800.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Decorative corner ornaments */}
        <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-gold-500/40 rounded-tl-sm" />
        <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-gold-500/40 rounded-tr-sm" />
        <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-gold-500/40 rounded-bl-sm" />
        <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-gold-500/40 rounded-br-sm" />

        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <p className="text-gold-400 font-serif italic text-lg mb-4 animate-fade-up animate-fade-up-delay-1">
            \u2726 Welcome to Divine Tirupati Luxury \u2726
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up animate-fade-up-delay-2">
            Luxury Stay in the <span className="gold-shimmer">Divine City</span>{" "}
            of Tirupati
          </h1>
          <p className="text-cream-100/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light animate-fade-up animate-fade-up-delay-3">
            Premium comfort for pilgrims and travelers \u2014 where devotion
            meets luxury in the shadow of sacred Tirumala
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-fade-up-delay-4">
            <Button
              onClick={() => nav("booking")}
              data-ocid="home.primary_button"
              className="bg-gold-gradient text-maroon-950 font-bold text-base px-8 py-3 h-auto rounded shadow-gold-lg hover:opacity-90 transition-opacity"
            >
              Book Your Stay
            </Button>
            <Button
              onClick={() => nav("rooms")}
              data-ocid="home.secondary_button"
              variant="outline"
              className="border-gold-400/60 text-gold-300 bg-transparent hover:bg-gold-400/10 hover:text-gold-200 font-semibold text-base px-8 py-3 h-auto rounded"
            >
              Explore Rooms
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold-400/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-400/60 to-transparent" />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-600 font-serif italic text-sm tracking-widest uppercase mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-maroon-800 font-bold mb-6 leading-snug">
                A Sanctuary of Luxury in India's Most Sacred City
              </h2>
              <p className="text-maroon-700/70 leading-relaxed mb-5">
                Tirupati, nestled at the foothills of the Eastern Ghats, is home
                to the revered Tirumala Venkateswara Temple \u2014 one of the
                most visited religious sites on earth. Each year, over 50
                million devotees make the sacred journey here, seeking blessings
                and spiritual renewal.
              </p>
              <p className="text-maroon-700/70 leading-relaxed mb-8">
                Divine Tirupati Luxury was conceived to honour this pilgrimage
                with the comfort it deserves. We offer a harmonious blend of
                five-star hospitality, South Indian cultural elegance, and
                spiritual tranquillity \u2014 so your journey to the divine is
                as serene and comfortable as the destination itself.
              </p>
              <button
                type="button"
                onClick={() => nav("about")}
                data-ocid="home.secondary_button"
                className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:gap-3 transition-all"
              >
                Discover Our Story <ChevronRight size={18} />
              </button>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-luxury">
                <img
                  src="/assets/generated/tirumala-temple.dim_800x600.jpg"
                  alt="Tirumala Venkateswara Temple"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-maroon-800 text-cream-50 p-5 rounded-lg shadow-maroon">
                <p className="font-serif text-3xl font-bold text-gold-400">
                  50M+
                </p>
                <p className="text-sm text-cream-100/70 mt-1">
                  Annual pilgrims to Tirupati
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ROOMS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-600 font-serif italic text-sm tracking-widest uppercase mb-3">
              Accommodation
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-maroon-800 font-bold">
              Exquisite Rooms &amp; Suites
            </h2>
            <div className="lotus-divider max-w-xs mx-auto mt-4">
              <span className="text-gold-500 text-lg">\u2726</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <div
                key={room.id}
                className="group bg-cream-50 rounded-lg overflow-hidden temple-border hover:shadow-gold transition-all duration-300"
              >
                <div className="overflow-hidden h-52">
                  <img
                    src={room.img}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-maroon-800 font-bold mb-2">
                    {room.title}
                  </h3>
                  <p className="text-sm text-maroon-700/60 mb-4 leading-relaxed">
                    {room.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-bold text-gold-600">
                      {room.price}
                      <span className="text-sm font-normal text-maroon-700/50">
                        /night
                      </span>
                    </span>
                    <button
                      type="button"
                      onClick={() => nav("rooms")}
                      data-ocid="home.secondary_button"
                      className="text-sm text-gold-600 font-semibold hover:text-gold-700 inline-flex items-center gap-1 transition-colors"
                    >
                      View Room <ChevronRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              onClick={() => nav("rooms")}
              data-ocid="home.secondary_button"
              className="bg-maroon-800 hover:bg-maroon-700 text-cream-50 px-8"
            >
              View All Rooms &amp; Suites
            </Button>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-20 bg-maroon-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-serif italic text-sm tracking-widest uppercase mb-3">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold">
              Premium Amenities
            </h2>
            <div className="lotus-divider max-w-xs mx-auto mt-4">
              <span className="text-gold-400 text-lg">\u2726</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {amenities.map(({ id, icon: Icon, label }) => (
              <div
                key={id}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-white/5 border border-gold-500/20 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-gold-400" />
                </div>
                <p className="text-cream-100 font-medium text-sm">{label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => nav("amenities")}
              data-ocid="home.secondary_button"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold transition-colors"
            >
              Explore All Amenities <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-600 font-serif italic text-sm tracking-widest uppercase mb-3">
              Guest Stories
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-maroon-800 font-bold">
              What Our Guests Say
            </h2>
            <div className="lotus-divider max-w-xs mx-auto mt-4">
              <span className="text-gold-500 text-lg">\u2726</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white p-8 rounded-lg temple-border shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }, (_, j) => (
                    <Star
                      key={`star-${t.id}-${j}`}
                      size={16}
                      className="fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>
                <p className="text-maroon-700/70 text-sm leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-serif font-bold text-maroon-800">
                    {t.name}
                  </p>
                  <p className="text-xs text-gold-600">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK BOOKING CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(107,26,26,0.95), rgba(63,15,15,0.95)), url('/assets/generated/hotel-dining.dim_800x600.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold-400 font-serif italic text-sm tracking-widest uppercase mb-4">
            Reserve Your Stay
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-5">
            Begin Your Divine Journey Today
          </h2>
          <p className="text-cream-100/70 mb-10 text-lg">
            Let us curate a perfect pilgrimage experience \u2014 serene,
            luxurious, and spiritually enriching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => nav("booking")}
              data-ocid="home.primary_button"
              className="bg-gold-gradient text-maroon-950 font-bold px-10 py-3 h-auto rounded shadow-gold-lg hover:opacity-90"
            >
              Book Your Stay
            </Button>
            <Button
              onClick={() => nav("contact")}
              data-ocid="home.secondary_button"
              variant="outline"
              className="border-gold-400/50 text-gold-300 bg-transparent hover:bg-gold-400/10 px-8 py-3 h-auto rounded"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
