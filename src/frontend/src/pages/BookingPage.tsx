import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  CheckCircle,
  Mail,
  MessageSquare,
  Phone,
  Users,
} from "lucide-react";
import { useState } from "react";

interface BookingForm {
  roomType: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  name: string;
  phone: string;
  email: string;
  requests: string;
}

const initialForm: BookingForm = {
  roomType: "",
  checkIn: "",
  checkOut: "",
  guests: "",
  name: "",
  phone: "",
  email: "",
  requests: "",
};

export default function BookingPage() {
  const [form, setForm] = useState<BookingForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center px-4">
        <div data-ocid="booking.success_state" className="text-center max-w-lg">
          <div className="w-20 h-20 rounded-full bg-gold-100 border-2 border-gold-400 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-gold-600" />
          </div>
          <h2 className="font-serif text-3xl text-maroon-800 font-bold mb-4">
            Booking Confirmed!
          </h2>
          <p className="text-maroon-700/60 leading-relaxed mb-3">
            Thank you, <strong>{form.name}</strong>. Your reservation request
            for the <strong>{form.roomType}</strong> has been received.
          </p>
          <p className="text-maroon-700/60 text-sm mb-8">
            Our team will contact you at <strong>{form.phone}</strong> or{" "}
            <strong>{form.email}</strong> within 2 hours to confirm availability
            and finalize your booking.
          </p>
          <p className="text-gold-600 font-serif italic mb-8">
            ✦ We look forward to welcoming you to Divine Tirupati Luxury ✦
          </p>
          <Button
            onClick={() => {
              setSubmitted(false);
              setForm(initialForm);
            }}
            className="bg-maroon-800 text-cream-50 hover:bg-maroon-700"
          >
            Make Another Booking
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-maroon-gradient text-center">
        <p className="text-gold-400 font-serif italic text-sm tracking-widest uppercase mb-4">
          Reserve Your Stay
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-white font-bold mb-5">
          Book Your Room
        </h1>
        <p className="text-cream-100/70 max-w-xl mx-auto px-4">
          Begin your journey to the divine. Fill in your details and our team
          will confirm your reservation promptly.
        </p>
      </section>

      {/* Form */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-luxury temple-border p-8 sm:p-12">
            <h2 className="font-serif text-2xl text-maroon-800 font-bold mb-8 pb-4 border-b border-gold-200">
              Reservation Details
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Room Type */}
              <div>
                <Label className="text-sm font-semibold text-maroon-700 mb-2 block">
                  Room Type *
                </Label>
                <Select
                  value={form.roomType}
                  onValueChange={(v) => setForm((p) => ({ ...p, roomType: v }))}
                  required
                >
                  <SelectTrigger
                    data-ocid="booking.select"
                    className="border-gold-200 focus:border-gold-400 focus:ring-gold-400"
                  >
                    <SelectValue placeholder="Select a room type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Deluxe Temple View Room">
                      Deluxe Temple View Room — ₹4,999/night
                    </SelectItem>
                    <SelectItem value="Premium Family Suite">
                      Premium Family Suite — ₹8,999/night
                    </SelectItem>
                    <SelectItem value="Royal Tirumala Suite">
                      Royal Tirumala Suite — ₹14,999/night
                    </SelectItem>
                    <SelectItem value="Devotional Retreat Room">
                      Devotional Retreat Room — ₹3,499/night
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Dates */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label className="text-sm font-semibold text-maroon-700 mb-2 block flex items-center gap-1.5">
                    <Calendar size={14} className="text-gold-500" /> Check-in
                    Date *
                  </Label>
                  <Input
                    type="date"
                    required
                    data-ocid="booking.input"
                    value={form.checkIn}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, checkIn: e.target.value }))
                    }
                    className="border-gold-200 focus:border-gold-400 focus-visible:ring-gold-400"
                  />
                </div>
                <div>
                  <Label className="text-sm font-semibold text-maroon-700 mb-2 block flex items-center gap-1.5">
                    <Calendar size={14} className="text-gold-500" /> Check-out
                    Date *
                  </Label>
                  <Input
                    type="date"
                    required
                    data-ocid="booking.input"
                    value={form.checkOut}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, checkOut: e.target.value }))
                    }
                    className="border-gold-200 focus:border-gold-400 focus-visible:ring-gold-400"
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <Label className="text-sm font-semibold text-maroon-700 mb-2 block flex items-center gap-1.5">
                  <Users size={14} className="text-gold-500" /> Number of Guests
                  *
                </Label>
                <Select
                  value={form.guests}
                  onValueChange={(v) => setForm((p) => ({ ...p, guests: v }))}
                  required
                >
                  <SelectTrigger
                    data-ocid="booking.select"
                    className="border-gold-200 focus:border-gold-400 focus:ring-gold-400"
                  >
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <SelectItem key={n} value={String(n)}>
                        {n} Guest{n > 1 ? "s" : ""}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Personal Info */}
              <div className="pt-2 border-t border-gold-100">
                <h3 className="font-serif text-lg text-maroon-700 font-semibold mb-4">
                  Guest Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-semibold text-maroon-700 mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      type="text"
                      required
                      data-ocid="booking.input"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      className="border-gold-200 focus:border-gold-400 focus-visible:ring-gold-400"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-semibold text-maroon-700 mb-2 block flex items-center gap-1.5">
                        <Phone size={14} className="text-gold-500" /> Phone
                        Number *
                      </Label>
                      <Input
                        type="tel"
                        required
                        data-ocid="booking.input"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, phone: e.target.value }))
                        }
                        className="border-gold-200 focus:border-gold-400 focus-visible:ring-gold-400"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-semibold text-maroon-700 mb-2 block flex items-center gap-1.5">
                        <Mail size={14} className="text-gold-500" /> Email
                        Address *
                      </Label>
                      <Input
                        type="email"
                        required
                        data-ocid="booking.input"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, email: e.target.value }))
                        }
                        className="border-gold-200 focus:border-gold-400 focus-visible:ring-gold-400"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-maroon-700 mb-2 block flex items-center gap-1.5">
                      <MessageSquare size={14} className="text-gold-500" />{" "}
                      Special Requests
                    </Label>
                    <Textarea
                      data-ocid="booking.textarea"
                      placeholder="Any special requests, dietary requirements, darshan timing preferences..."
                      value={form.requests}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, requests: e.target.value }))
                      }
                      className="border-gold-200 focus:border-gold-400 focus-visible:ring-gold-400 min-h-24"
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                data-ocid="booking.submit_button"
                className="w-full bg-gold-gradient text-maroon-950 font-bold text-base py-3 h-auto rounded-lg shadow-gold-lg hover:opacity-90 transition-opacity"
              >
                Confirm Booking
              </Button>
              <p className="text-xs text-center text-maroon-700/40">
                By submitting, you agree to our booking terms. Our team will
                contact you within 2 hours to confirm.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
