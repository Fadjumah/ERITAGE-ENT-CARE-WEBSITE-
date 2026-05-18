import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/layout/ScrollToTop";
import SitewideSchema from "@/components/layout/SitewideSchema";

// Pages
import Index from "@/pages/Index";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import BlogArticle from "@/pages/BlogArticle";
import Contact from "@/pages/Contact";
import ENTServices from "@/pages/ENTServices";
import FAQ from "@/pages/FAQ";
import HearingTests from "@/pages/HearingTests";
import Reviews from "@/pages/Reviews";
import UrgentENTGuidance from "@/pages/UrgentENTGuidance";
import LocationEntebbe from "@/pages/locations/LocationEntebbe";
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import TermsOfService from "@/pages/legal/TermsOfService";
import Bookings from "@/pages/Bookings";
import BlockedEar from "@/pages/conditions/BlockedEar";
import EarPain from "@/pages/conditions/EarPain";
import EarDischarge from "@/pages/conditions/EarDischarge";
import Sinusitis from "@/pages/conditions/Sinusitis";
import Tonsillitis from "@/pages/conditions/Tonsillitis";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <SitewideSchema />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Core pages */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/ent-services" element={<ENTServices />} />
            <Route path="/hearing-tests" element={<HearingTests />} />
            <Route path="/urgent-ent-guidance" element={<UrgentENTGuidance />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bookings" element={<Bookings />} />

            {/* Condition pages */}
            <Route path="/conditions/blocked-ear-entebbe" element={<BlockedEar />} />
            <Route path="/conditions/ear-pain-entebbe" element={<EarPain />} />
            <Route path="/conditions/ear-discharge-entebbe" element={<EarDischarge />} />
            <Route path="/conditions/sinusitis-entebbe" element={<Sinusitis />} />
            <Route path="/conditions/tonsillitis-entebbe" element={<Tonsillitis />} />

            {/* Locations */}
            <Route path="/locations/entebbe" element={<LocationEntebbe />} />

            {/* Blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />

            {/* Legal */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />

            {/* 404 — must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Analytics />
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
