
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Index from "./pages/Index";
import Wifi from "./pages/Wifi";
import Lighting from "./pages/Lighting";
import TV from "./pages/TV";
import Music from "./pages/Music";
import Parking from "./pages/Parking";
import Other from "./pages/Other";
import NotFound from "./pages/NotFound";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 w-full px-4 sm:px-6 md:px-8 py-6">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/wifi" element={<Wifi />} />
                <Route path="/lighting" element={<Lighting />} />
                <Route path="/tv" element={<TV />} />
                <Route path="/music" element={<Music />} />
                <Route path="/parking" element={<Parking />} />
                <Route path="/other" element={<Other />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
