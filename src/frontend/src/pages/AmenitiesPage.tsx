import {
  Car,
  Clock,
  Compass,
  Leaf,
  Plane,
  Sparkles,
  Star,
  Users,
  Utensils,
} from "lucide-react";

const amenities = [
  {
    id: "dining",
    icon: Utensils,
    title: "Pure Vegetarian Fine Dining",
    desc: "Our award-winning restaurant, Annapurna, serves exquisite South Indian, North Indian, and continental vegetarian cuisine. Using only the finest organic ingredients, every meal is a spiritual and culinary celebration.",
    highlight: "Open 6am \u2013 11pm",
  },
  {
    id: "shuttle",
    icon: Car,
    title: "Temple Shuttle Assistance",
    desc: "Dedicated air-conditioned shuttle services run throughout the day to Alipiri Gate and the Tirumala footpath, ensuring you reach the temple comfortably and on time for your darshan slot.",
    highlight: "Every 2 hours",
  },
  {
    id: "spa",
    icon: Sparkles,
    title: "Luxury Spa & Wellness",
    desc: "Our Moksha Spa offers traditional Ayurvedic treatments, deep tissue massages, herbal steam baths, and rejuvenating body rituals \u2014 the perfect way to restore your body and spirit after a sacred journey.",
    highlight: "7am \u2013 9pm daily",
  },
  {
    id: "yoga",
    icon: Leaf,
    title: "Yoga & Meditation Hall",
    desc: "Begin each day with guided yoga and meditation in our serene hall. Experienced instructors lead sessions inspired by ancient Indian spiritual practices to prepare you for a mindful darshan experience.",
    highlight: "Sessions at 6am & 7pm",
  },
  {
    id: "concierge",
    icon: Clock,
    title: "24/7 Concierge Service",
    desc: "Our knowledgeable concierge team is available around the clock to assist with TTD darshan token booking, local tour arrangements, travel coordination, and any special requests.",
    highlight: "Always available",
  },
  {
    id: "transfers",
    icon: Plane,
    title: "Airport & Railway Transfers",
    desc: "Complimentary or premium transfer services from Tirupati Airport and Tirupati Railway Station in our luxury fleet. Advance booking available through reception or our WhatsApp concierge.",
    highlight: "All terminals served",
  },
  {
    id: "family",
    icon: Users,
    title: "Family-Friendly Rooms",
    desc: "Specially configured rooms for families with additional beds, child-safety fittings, and a dedicated kids' corner. Our family packages include early check-in and complimentary breakfast for children.",
    highlight: "Connecting rooms available",
  },
  {
    id: "banquet",
    icon: Star,
    title: "Banquet & Event Hall",
    desc: "A grand hall accommodating up to 300 guests, ideal for satyanarayan pujas, birthday celebrations, family gatherings, and spiritual events. Full catering and event management services available.",
    highlight: "Capacity: 300 guests",
  },
  {
    id: "pilgrimage",
    icon: Compass,
    title: "Guided Pilgrimage Support",
    desc: "Our dedicated pilgrimage desk helps you navigate TTD ticket booking, alternative darshan options, Kapila Theertham visits, and the complete Tirupati darshan circuit with knowledgeable local guides.",
    highlight: "Complimentary briefing",
  },
];

export default function AmenitiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-maroon-gradient text-center">
        <p className="text-gold-400 font-serif italic text-sm tracking-widest uppercase mb-4">
          Services
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-white font-bold mb-5">
          Premium Amenities
        </h1>
        <p className="text-cream-100/70 max-w-xl mx-auto px-4">
          Every service thoughtfully curated to make your stay extraordinary and
          your pilgrimage effortless.
        </p>
      </section>

      {/* Grid */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map(({ id, icon: Icon, title, desc, highlight }) => (
              <div
                key={id}
                className="bg-white p-8 rounded-xl temple-border hover:shadow-gold transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-maroon-800/10 flex items-center justify-center mb-5 group-hover:bg-gold-500/20 transition-colors">
                  <Icon
                    size={22}
                    className="text-maroon-800 group-hover:text-gold-600 transition-colors"
                  />
                </div>
                <h3 className="font-serif text-xl text-maroon-800 font-bold mb-3">
                  {title}
                </h3>
                <p className="text-maroon-700/60 text-sm leading-relaxed mb-5">
                  {desc}
                </p>
                <span className="inline-block px-3 py-1 bg-gold-50 text-gold-700 text-xs font-semibold rounded-full border border-gold-200">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra section */}
      <section
        className="py-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(107,26,26,0.94), rgba(63,15,15,0.94)), url('/assets/generated/hotel-spa.dim_800x600.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl text-white font-bold mb-5">
            The Complete Luxury Pilgrimage Experience
          </h2>
          <p className="text-cream-100/70 leading-relaxed">
            At Divine Tirupati Luxury, every amenity is designed to honour your
            spiritual journey. From the moment you arrive to the moment you
            depart, our team works tirelessly to ensure you can focus on what
            truly matters \u2014 your devotion and peace of mind.
          </p>
        </div>
      </section>
    </div>
  );
}
