import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import AmenitiesPage from "./pages/AmenitiesPage";
import BookingPage from "./pages/BookingPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import SpiritualPage from "./pages/SpiritualPage";

export type Page =
  | "home"
  | "about"
  | "rooms"
  | "amenities"
  | "spiritual"
  | "gallery"
  | "booking"
  | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "about":
        return <AboutPage />;
      case "rooms":
        return <RoomsPage setCurrentPage={setCurrentPage} />;
      case "amenities":
        return <AmenitiesPage />;
      case "spiritual":
        return <SpiritualPage />;
      case "gallery":
        return <GalleryPage />;
      case "booking":
        return <BookingPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1">{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
      <Toaster />
    </div>
  );
}
