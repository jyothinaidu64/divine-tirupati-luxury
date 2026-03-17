import { Award, Heart, MapPin, Star } from "lucide-react";

const pillars = [
  {
    id: "devotion",
    icon: Heart,
    title: "Devotional Hospitality",
    desc: "Every detail of our service is inspired by the spirit of seva \u2014 selfless devotion. We care for your comfort as pilgrims preparing for a sacred darshan.",
  },
  {
    id: "luxury",
    icon: Star,
    title: "Five-Star Luxury",
    desc: "From premium linens to fine vegetarian cuisine, we deliver world-class hospitality befitting the sanctity of your spiritual journey.",
  },
  {
    id: "location",
    icon: MapPin,
    title: "Ideal Location",
    desc: "Perfectly situated near Alipiri Gate and the Tirupati Railway Station, ensuring effortless access to Tirumala and all sacred sites.",
  },
  {
    id: "heritage",
    icon: Award,
    title: "South Indian Heritage",
    desc: "Our interiors celebrate the rich Dravidian cultural tradition \u2014 brass lamps, lotus motifs, silk textiles, and hand-carved wooden accents.",
  },
];

const locationStats = [
  { id: "alipiri", label: "Alipiri Gate", distance: "2 km" },
  { id: "railway", label: "Railway Station", distance: "3.5 km" },
  { id: "airport", label: "Tirupati Airport", distance: "14 km" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="py-32 relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(107,26,26,0.92) 50%, rgba(107,26,26,0.4) 100%), url('/assets/generated/hotel-hero.dim_1400x800.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gold-400 font-serif italic text-sm tracking-widest uppercase mb-4">
            Our Philosophy
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-bold leading-tight mb-5">
            Luxury in the
            <br />
            <span className="gold-shimmer">Service of the Divine</span>
          </h1>
          <p className="text-cream-100/80 text-lg max-w-xl leading-relaxed">
            Divine Tirupati Luxury was born from a simple belief: that those who
            journey to seek God's blessings deserve to be received with the
            finest grace and comfort.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-maroon-800 font-bold mb-6">
                A Home Away From Home for Every Devotee
              </h2>
              <p className="text-maroon-700/70 leading-relaxed mb-5">
                For centuries, pilgrims from across India and the world have
                walked the sacred path to Tirumala to seek the blessings of Lord
                Venkateswara. We consider it a privilege to be their hosts on
                this momentous journey.
              </p>
              <p className="text-maroon-700/70 leading-relaxed mb-5">
                Founded by a family deeply rooted in South Indian culture and
                hospitality traditions, Divine Tirupati Luxury brings together
                the warmth of traditional values with the refinement of modern
                five-star service.
              </p>
              <p className="text-maroon-700/70 leading-relaxed mb-8">
                Our team of experienced hospitality professionals understands
                the unique needs of pilgrims \u2014 from early morning
                arrangements for Tirumala darshan to ensuring you return to a
                peaceful, nourishing sanctuary.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg temple-border text-center">
                  <p className="font-serif text-3xl font-bold text-gold-600 mb-1">
                    12+
                  </p>
                  <p className="text-sm text-maroon-700/60">
                    Years of Excellence
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg temple-border text-center">
                  <p className="font-serif text-3xl font-bold text-gold-600 mb-1">
                    50K+
                  </p>
                  <p className="text-sm text-maroon-700/60">Happy Guests</p>
                </div>
                <div className="bg-white p-5 rounded-lg temple-border text-center">
                  <p className="font-serif text-3xl font-bold text-gold-600 mb-1">
                    98%
                  </p>
                  <p className="text-sm text-maroon-700/60">
                    Guest Satisfaction
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg temple-border text-center">
                  <p className="font-serif text-3xl font-bold text-gold-600 mb-1">
                    5\u2605
                  </p>
                  <p className="text-sm text-maroon-700/60">Luxury Rated</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-luxury">
                <img
                  src="/assets/generated/hotel-spa.dim_800x600.jpg"
                  alt="Hotel Spa"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-luxury">
                <img
                  src="/assets/generated/hotel-dining.dim_800x600.jpg"
                  alt="Hotel Dining"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="py-20 bg-maroon-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-serif italic text-sm tracking-widest uppercase mb-3">
              Our Pillars
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold">
              What Defines Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map(({ id, icon: Icon, title, desc }) => (
              <div
                key={id}
                className="p-6 bg-white/5 border border-gold-500/20 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-gold-400" />
                </div>
                <h3 className="font-serif text-lg text-white font-semibold mb-3">
                  {title}
                </h3>
                <p className="text-cream-100/60 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl text-maroon-800 font-bold mb-6">
            Conveniently Located
          </h2>
          <p className="text-maroon-700/70 leading-relaxed mb-8">
            Located at 12-34 Balaji Nagar, just minutes from the Alipiri Mettu
            footpath route, Tirupati Railway Station, and the Sri Padmavathi
            Ammavari Temple, our hotel places you at the very heart of the
            pilgrimage experience \u2014 yet enveloped in serenity.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {locationStats.map(({ id, label, distance }) => (
              <div key={id} className="bg-white p-6 rounded-lg temple-border">
                <p className="font-serif text-2xl font-bold text-gold-600 mb-1">
                  {distance}
                </p>
                <p className="text-sm text-maroon-700/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
