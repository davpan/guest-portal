
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Index from "./pages/Index";
import PasswordEntry from "./pages/PasswordEntry";
import Wifi from "./pages/Wifi";
import Lighting from "./pages/Lighting";
import TV from "./pages/TV";
import Music from "./pages/Music";
import Parking from "./pages/Parking";
import Other from "./pages/Other";
import NotFound from "./pages/NotFound";

import Header from "./components/layout/Header";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

// App Routes with Authentication
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<PasswordEntry />} />
      
      <Route path="/" element={
        <ProtectedRoute>
          <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <main className="flex-1 w-full px-4 sm:px-6 md:px-8 py-6 flex flex-col">
              <Index />
            </main>
          </div>
        </ProtectedRoute>
      } />
      
      <Route path="/wifi" element={
        <ProtectedRoute>
          <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <main className="flex-1 w-full px-4 sm:px-6 md:px-8 py-6 flex flex-col">
              <Wifi />
            </main>
          </div>
        </ProtectedRoute>
      } />
      
      <Route path="/lighting" element={
        <ProtectedRoute>
          <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <main className="flex-1 w-full px-4 sm:px-6 md:px-8 py-6 flex flex-col">
              <Lighting />
            </main>
          </div>
        </ProtectedRoute>
      } />
      
      <Route path="/tv" element={
        <ProtectedRoute>
          <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <main className="flex-1 w-full px-4 sm:px-6 md:px-8 py-6 flex flex-col">
              <TV />
            </main>
          </div>
        </ProtectedRoute>
      } />
      
      <Route path="/music" element={
        <ProtectedRoute>
          <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <main className="flex-1 w-full px-4 sm:px-6 md:px-8 py-6 flex flex-col">
              <Music />
            </main>
          </div>
        </ProtectedRoute>
      } />
      
      <Route path="/parking" element={
        <ProtectedRoute>
          <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <main className="flex-1 w-full px-4 sm:px-6 md:px-8 py-6 flex flex-col">
              <Parking />
            </main>
          </div>
        </ProtectedRoute>
      } />
      
      <Route path="/other" element={
        <ProtectedRoute>
          <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <main className="flex-1 w-full px-4 sm:px-6 md:px-8 py-6 flex flex-col">
              <Other />
            </main>
          </div>
        </ProtectedRoute>
      } />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL || '/'}>
          <AnimatePresence mode="wait">
            <AppRoutes />
          </AnimatePresence>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
