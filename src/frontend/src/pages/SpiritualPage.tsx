import { Clock, MapPin, Star } from "lucide-react";

const attractions = [
  {
    id: "tirumala",
    title: "Tirumala Venkateswara Temple",
    distance: "19 km (Tirumala Hills)",
    desc: "The most visited religious shrine in the world, the Tirumala Venkateswara Temple stands atop the seven sacred hills of the Eastern Ghats. Lord Venkateswara, known as the God of Wealth, receives over 50,000 devotees daily. The temple's awe-inspiring Dravidian gopuram towers and golden vimanam are a sight that will stay with you forever.",
    tips: [
      "Book Tirumala darshan tokens at TTD official website in advance",
      "Early morning special darshan slots available with hotel assistance",
      "Temple opens at 3:00 AM for special Suprabhata Seva",
    ],
    img: "/assets/generated/tirumala-temple.dim_800x600.jpg",
    visitTime: "Allow 4–8 hours",
    reverse: false,
  },
  {
    id: "padmavathi",
    title: "Sri Padmavathi Ammavari Temple",
    distance: "4 km from hotel",
    desc: "Dedicated to Goddess Padmavathi, consort of Lord Venkateswara, this beautiful temple in Tiruchanur is considered incomplete without a visit alongside Tirumala. The presiding deity is enshrined in a Padmanabha posture amid fragrant lotus flowers in a temple tank.",
    tips: [
      "Visit at sunrise for the most serene atmosphere",
      "Dress code: traditional South Indian attire preferred",
      "Hotel shuttle runs twice daily to the temple",
    ],
    img: null,
    visitTime: "Allow 1–2 hours",
    reverse: true,
  },
  {
    id: "kapila",
    title: "Kapila Theertham",
    distance: "5 km from hotel",
    desc: "One of the most sacred waterfalls in South India, Kapila Theertham is believed to be the site where Lord Shiva himself resides as Kapileshwara. The holy waters cascade down rocks and collect in a tank where devotees take sacred dips. The ancient Shiva temple here is a masterpiece of South Indian temple architecture.",
    tips: [
      "Best visited in early morning or late evening",
      "Sacred bath in the theertham is believed to cleanse sins",
      "The Shiva temple within has beautiful stone carvings",
    ],
    img: null,
    visitTime: "Allow 1–2 hours",
    reverse: false,
  },
  {
    id: "akasa",
    title: "Akasa Ganga Waterfalls",
    distance: "On Tirumala Hills",
    desc: "A spectacular waterfall on the Tirumala Hills believed to originate from the heavens (Akasa = sky). The waters are considered sacred and used for abhishekam at the Venkateswara Temple. During the monsoon, the falls are particularly breathtaking, cascading through lush green hills.",
    tips: [
      "Best visited during July–September monsoon season",
      "Located along the Tirumala Hills footpath route",
      "Waters are considered sacred — avoid wearing footwear near the falls",
    ],
    img: null,
    visitTime: "Allow 30–60 minutes",
    reverse: true,
  },
];

const hotelServices = [
  {
    id: "darshan",
    title: "Darshan Token Assistance",
    desc: "Our dedicated pilgrimage desk helps secure TTD Special Entry Darshan (SED) tokens and manages your Tirumala queue registration.",
  },
  {
    id: "morning",
    title: "Early Morning Arrangements",
    desc: "For devotees attending Suprabhata Seva or early darshan, we offer 3 AM wake-up calls, packed prasad breakfasts, and shuttle arrangements.",
  },
  {
    id: "guidance",
    title: "Dress & Preparation Guidance",
    desc: "Our concierge provides complete guidance on temple dress codes, entry norms, restricted items, and the darshan process for first-time visitors.",
  },
  {
    id: "return",
    title: "Return Care",
    desc: "After your Tirumala darshan, return to a prepared room, refreshing amenity kit, and a nourishing vegetarian meal at Annapurna restaurant.",
  },
];

export default function SpiritualPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="py-28 relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(20,5,5,0.88) 50%, rgba(20,5,5,0.4) 100%), url('/assets/generated/tirumala-temple.dim_800x600.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gold-400 font-serif italic text-sm tracking-widest uppercase mb-4">
            Sacred Tirupati
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-bold leading-tight mb-5">
            The Spiritual Heart of
            <br />
            <span className="gold-shimmer">Andhra Pradesh</span>
          </h1>
          <p className="text-cream-100/70 text-lg max-w-xl leading-relaxed">
            Tirupati is more than a destination — it is a divine experience. Let
            us guide you through every sacred moment of your pilgrimage.
          </p>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl text-maroon-800 font-bold">
              Sacred Sites Near the Hotel
            </h2>
            <div className="lotus-divider max-w-xs mx-auto mt-4">
              <span className="text-gold-500 text-lg">✦</span>
            </div>
          </div>
          <div className="space-y-12">
            {attractions.map((attr) => (
              <div
                key={attr.id}
                className="grid lg:grid-cols-2 gap-10 items-start"
              >
                <div className={attr.reverse ? "lg:order-2" : ""}>
                  {attr.img ? (
                    <div className="rounded-xl overflow-hidden shadow-luxury">
                      <img
                        src={attr.img}
                        alt={attr.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ) : (
                    <div className="rounded-xl h-64 bg-maroon-gradient flex items-center justify-center shadow-luxury">
                      <div className="text-center text-white">
                        <Star
                          size={40}
                          className="text-gold-400 mx-auto mb-3"
                        />
                        <p className="font-serif text-lg font-semibold">
                          {attr.title}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className={attr.reverse ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={15} className="text-gold-500" />
                    <span className="text-xs text-gold-600 font-medium">
                      {attr.distance}
                    </span>
                    <span className="text-xs text-maroon-700/40">•</span>
                    <Clock size={13} className="text-gold-500" />
                    <span className="text-xs text-gold-600 font-medium">
                      {attr.visitTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-maroon-800 font-bold mb-3">
                    {attr.title}
                  </h3>
                  <p className="text-maroon-700/60 text-sm leading-relaxed mb-5">
                    {attr.desc}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-maroon-700/50 uppercase tracking-wider mb-2">
                      Visitor Tips
                    </p>
                    {attr.tips.map((tip) => (
                      <div
                        key={tip}
                        className="flex items-start gap-2 text-sm text-maroon-700/60"
                      >
                        <span className="text-gold-500 mt-0.5">✦</span>
                        {tip}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel pilgrim support */}
      <section className="py-20 bg-maroon-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl text-white font-bold">
              How We Support Your Pilgrimage
            </h2>
            <p className="text-cream-100/60 mt-3 max-w-xl mx-auto">
              Our team of dedicated pilgrimage assistants ensure that your
              entire Tirupati darshan experience is seamless, peaceful, and
              spiritually fulfilling.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {hotelServices.map(({ id, title, desc }) => (
              <div
                key={id}
                className="p-6 bg-white/5 border border-gold-500/20 rounded-xl hover:bg-white/10 transition-colors"
              >
                <h3 className="font-serif text-lg text-gold-400 font-semibold mb-3">
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
    </div>
  );
}
