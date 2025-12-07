import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import { ImpactHeadline } from "./ui/impact-headline";

export default function Hero() {
    return (
        <section className="relative pt-20 pb-32 md:pt-32 md:pb-45 overflow-hidden min-h-[90vh] flex items-center justify-center">
            {/* Background Gradients */}
            <BackgroundRippleEffect />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#ff1101]/20 rounded-[100%] blur-[100px] pointer-events-none -z-10 opacity-40 mix-blend-screen animate-pulse" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 rounded-[100%] blur-[120px] pointer-events-none -z-10 opacity-30" />

            <div className="container mx-auto px-4 text-center relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff1101]/10 border border-[#ff1101]/20 text-xs font-medium text-[#ff1101] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    AI-Powered Disinformation Detection
                </div>

                <ImpactHeadline className="mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100" />

                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                    UnFaked protects your reality. Detect deepfakes and verify content credibility instantly.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                    <Link href="/tools" className="h-14 px-8 rounded-full bg-[#ff1101] text-white font-bold hover:bg-[#ff1101]/90 transition-all flex items-center gap-2 shadow-[0_0_40px_-10px_#ff1101] hover:shadow-[0_0_60px_-15px_#ff1101] hover:scale-105">
                        Start Verifying
                        <ArrowRight className="size-5" />
                    </Link>
                    <Link href="/demo" className="h-14 px-8 rounded-full bg-secondary/50 text-secondary-foreground border border-black/5 dark:border-white/10 hover:bg-secondary transition-all flex items-center gap-2 backdrop-blur-sm font-semibold">
                        How it works
                    </Link>
                </div>

                {/* Platform Icons Floating (Visual only) */}
                <div className="mt-24 flex flex-wrap justify-center gap-8 opacity-60">
                    {/* Visual representation of platforms supported */}
                    <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-sm font-semibold">TikTok</div>
                    <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-sm font-semibold">YouTube</div>
                    <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-sm font-semibold">Instagram</div>
                    <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-sm font-semibold">Twitter / X</div>
                </div>
            </div>
            {/* Bottom blur transition */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-20 backdrop-blur-[1px]" />
        </section>
    );
}