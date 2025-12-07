import Link from "next/link";
import { CheckCircle2, ShieldAlert, ShieldCheck } from "lucide-react";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Review } from "@/components/Review";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden selection:bg-[#ff1101]/20">

      {/* Navbar removed as it is handled by layout.tsx */}

      <main className="flex-1 ">

        <Hero />
        <Review />
        {/* --- FEATURES GRID --- */}
        <Features />
        <Pricing />

      </main>

      {/* Footer is handled by global layout or can be added here if not present globally. Given user said "no navbar", I'll leave footer simple here */}
      <footer className="py-12 border-t border-black/5 dark:border-white/5 text-sm text-muted-foreground bg-black/5 dark:bg-black/20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-semibold">UnFaked</div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#ff1101] transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-[#ff1101] transition-colors">Terms</Link>
            <Link href="#" className="hover:text-[#ff1101] transition-colors">Twitter</Link>
          </div>
        </div>
      </footer>
      <SmoothCursor />
    </div>
  );
}
