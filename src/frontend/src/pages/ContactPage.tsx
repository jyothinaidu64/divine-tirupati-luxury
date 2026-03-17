import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState } from "react";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-maroon-gradient text-center">
        <p className="text-gold-400 font-serif italic text-sm tracking-widest uppercase mb-4">
          Get in Touch
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-white font-bold mb-5">
          Contact Us
        </h1>
        <p className="text-cream-100/70 max-w-xl mx-auto px-4">
          We are here to help you plan your perfect divine stay. Reach out by
          any channel you prefer.
        </p>
      </section>

      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl text-maroon-800 font-bold mb-8">
                Our Contact Details
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-maroon-800 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-maroon-800 mb-0.5">
                      Address
                    </p>
                    <p className="text-sm text-maroon-700/60">
                      12-34, Balaji Nagar, Near Alipiri Gate,
                    </p>
                    <p className="text-sm text-maroon-700/60">
                      Tirupati, Andhra Pradesh 517501
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-maroon-800 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-maroon-800 mb-0.5">
                      Phone
                    </p>
                    <a
                      href="tel:+919876543210"
                      className="text-sm text-gold-600 hover:text-gold-700"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-maroon-800 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-maroon-800 mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:reservations@divinetirupatiluxury.com"
                      className="text-sm text-gold-600 hover:text-gold-700 break-all"
                    >
                      reservations@divinetirupatiluxury.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-maroon-800 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-maroon-800 mb-0.5">
                      Response Time
                    </p>
                    <p className="text-sm text-maroon-700/60">
                      Within 2 hours during business hours
                    </p>
                    <p className="text-sm text-maroon-700/60">
                      24/7 for urgent pilgrimage assistance
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.whatsapp_button"
                className="flex items-center gap-3 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1fb558] transition-colors w-fit shadow-sm"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>

              {/* Map placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden border border-gold-200 shadow-sm">
                <div className="h-52 bg-gradient-to-br from-maroon-800 to-maroon-950 flex flex-col items-center justify-center">
                  <MapPin
                    size={32}
                    className="text-gold-400 mb-3"
                    data-ocid="contact.map_marker"
                  />
                  <p className="text-white font-serif text-lg font-semibold">
                    Interactive Map
                  </p>
                  <p className="text-cream-100/50 text-sm mt-1">Coming Soon</p>
                  <p className="text-gold-400/70 text-xs mt-3">
                    Balaji Nagar, Tirupati, AP 517501
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl text-maroon-800 font-bold mb-8">
                Send Us a Message
              </h2>
              {sent ? (
                <div
                  data-ocid="contact.success_state"
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 rounded-full bg-gold-100 border-2 border-gold-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={28} className="text-gold-600" />
                  </div>
                  <h3 className="font-serif text-xl text-maroon-800 font-bold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-maroon-700/60 text-sm">
                    Thank you, <strong>{form.name}</strong>. We'll get back to
                    you within 2 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setForm({ name: "", email: "", message: "" });
                    }}
                    className="mt-6 text-gold-600 font-semibold hover:text-gold-700 text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label className="text-sm font-semibold text-maroon-700 mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      type="text"
                      required
                      data-ocid="contact.input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      className="border-gold-200 focus:border-gold-400 focus-visible:ring-gold-400"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-maroon-700 mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      required
                      data-ocid="contact.input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      className="border-gold-200 focus:border-gold-400 focus-visible:ring-gold-400"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-maroon-700 mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      required
                      data-ocid="contact.textarea"
                      placeholder="How can we help you? Ask about rooms, darshan assistance, special packages..."
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      className="border-gold-200 focus:border-gold-400 focus-visible:ring-gold-400 min-h-32"
                    />
                  </div>
                  <Button
                    type="submit"
                    data-ocid="contact.submit_button"
                    className="w-full bg-maroon-800 text-cream-50 font-bold py-3 h-auto rounded-lg hover:bg-maroon-700 transition-colors"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
