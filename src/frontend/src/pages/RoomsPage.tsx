import { Button } from "@/components/ui/button";
import { Check, Coffee, Maximize, Users, Wifi } from "lucide-react";
import type { Page } from "../App";

interface RoomsPageProps {
  setCurrentPage: (page: Page) => void;
}

const rooms = [
  {
    id: "deluxe",
    title: "Deluxe Temple View Room",
    tagline: "Sacred views, supreme comfort",
    desc: "A beautifully appointed room featuring private balcony views of the Tirumala Hills and the Venkateswara Temple gopuram. Elegant South Indian decor with gold-accented furnishings.",
    img: "/assets/generated/room-deluxe.dim_800x600.jpg",
    price: "\u20b94,999",
    features: [
      "Private temple-view balcony",
      "King-size premium bed",
      "Marble en-suite bathroom",
      "Complimentary prasad welcome kit",
      "High-speed WiFi & 55-inch Smart TV",
    ],
    size: "380 sq ft",
    guests: 2,
  },
  {
    id: "family",
    title: "Premium Family Suite",
    tagline: "Generous space for cherished journeys",
    desc: "Designed with families in mind \u2014 a spacious suite with a separate living area, two bedrooms, and warm South Indian textile decor. Ideal for multi-generational pilgrimage visits.",
    img: "/assets/generated/room-family.dim_800x600.jpg",
    price: "\u20b98,999",
    features: [
      "2 bedrooms + living lounge",
      "Panoramic city and hills view",
      "South Indian silk furnishings",
      "In-room kitchenette & minibar",
      "Priority temple shuttle booking",
    ],
    size: "720 sq ft",
    guests: 4,
  },
  {
    id: "royal",
    title: "Royal Tirumala Suite",
    tagline: "The pinnacle of divine luxury",
    desc: "Our crown jewel \u2014 a palatial suite celebrating South Indian royalty with hand-carved teak wood accents, a grand canopied bed, private jacuzzi, and a sweeping terrace overlooking the sacred hills.",
    img: "/assets/generated/room-royal.dim_800x600.jpg",
    price: "\u20b914,999",
    features: [
      "Grand canopied king bed",
      "Private terrace with hill views",
      "Jacuzzi & rain shower spa",
      "Personal butler service",
      "Complimentary airport transfer",
    ],
    size: "1,100 sq ft",
    guests: 2,
  },
  {
    id: "retreat",
    title: "Devotional Retreat Room",
    tagline: "Simplicity, peace, and spiritual focus",
    desc: "Thoughtfully designed for solo pilgrims and spiritual seekers \u2014 a serene, minimalist retreat with a built-in meditation corner, yoga mat, and sacred ambience to support your inner journey.",
    img: "/assets/generated/room-retreat.dim_800x600.jpg",
    price: "\u20b93,499",
    features: [
      "Built-in meditation corner",
      "Yoga mat & spiritual reading",
      "Calming aromatic diffuser",
      "Comfortable single/twin beds",
      "Early darshan wake-up service",
    ],
    size: "280 sq ft",
    guests: 2,
  },
];

export default function RoomsPage({ setCurrentPage }: RoomsPageProps) {
  const nav = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-maroon-gradient text-center">
        <p className="text-gold-400 font-serif italic text-sm tracking-widest uppercase mb-4">
          Accommodation
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-white font-bold mb-5">
          Rooms &amp; Suites
        </h1>
        <p className="text-cream-100/70 max-w-xl mx-auto px-4">
          Each room is a sanctuary \u2014 crafted with care to blend spiritual
          ambience with five-star luxury.
        </p>
      </section>

      {/* Rooms */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          {rooms.map((room, i) => (
            <div
              key={room.id}
              data-ocid={`rooms.item.${i + 1}`}
              className="grid lg:grid-cols-2 gap-10 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="rounded-xl overflow-hidden shadow-luxury temple-border">
                  <img
                    src={room.img}
                    alt={room.title}
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-gold-600 font-serif italic text-sm mb-2">
                  {room.tagline}
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl text-maroon-800 font-bold mb-3">
                  {room.title}
                </h2>
                <p className="text-maroon-700/60 leading-relaxed mb-5 text-sm">
                  {room.desc}
                </p>

                <div className="flex gap-5 mb-6 text-sm text-maroon-700/60">
                  <span className="flex items-center gap-1.5">
                    <Maximize size={15} className="text-gold-500" /> {room.size}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={15} className="text-gold-500" /> {room.guests}{" "}
                    Guests
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Wifi size={15} className="text-gold-500" /> Free WiFi
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Coffee size={15} className="text-gold-500" /> Breakfast
                  </span>
                </div>

                <ul className="space-y-2 mb-8">
                  {room.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-maroon-700/70"
                    >
                      <Check
                        size={15}
                        className="text-gold-500 mt-0.5 shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-serif text-2xl font-bold text-gold-600">
                      {room.price}
                    </span>
                    <span className="text-sm text-maroon-700/50"> / night</span>
                  </div>
                  <Button
                    onClick={() => nav("booking")}
                    data-ocid={`rooms.book_button.${i + 1}`}
                    className="bg-gold-gradient text-maroon-950 font-bold px-6 shadow-gold hover:opacity-90 transition-opacity"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
