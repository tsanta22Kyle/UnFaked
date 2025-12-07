
import { ShieldCheck, Zap, ScanLine, FileSearch, Siren, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Features() {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ff1101]/5 via-transparent to-transparent opacity-50 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
                        Protecting the Digital Commons
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Advanced AI forensics at your fingertips. Detect, analyze, and verify media with military-grade precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
                    {/* Large Card - Deepfake Detection */}
                    <div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all hover:border-[#ff1101]/30 hover:shadow-[0_0_50px_-15px_rgba(255,17,1,0.2)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ff1101]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="size-12 rounded-xl bg-[#ff1101]/10 flex items-center justify-center text-[#ff1101] mb-6">
                                <ScanLine className="size-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3 text-foreground">Deepfake Analysis</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Our multi-modal engine analyzes facial movements, light consistency, and audio artifacts to detect manipulation with 99.8% accuracy.
                                </p>
                            </div>
                        </div>

                        {/* Abstract Visual */}
                        <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-[#ff1101]/20 rounded-full blur-3xl group-hover:bg-[#ff1101]/30 transition-colors" />
                        <ScanLine className="absolute bottom-8 right-8 size-32 text-foreground/5 -rotate-12 group-hover:scale-110 transition-transform duration-500" />
                    </div>

                    {/* Card - Real-time Alerts */}
                    <div className="md:col-span-1 group relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all hover:border-orange-500/30 hover:shadow-[0_0_50px_-15px_rgba(249,115,22,0.2)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="size-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
                                <Siren className="size-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Real-time Alerts</h3>
                                <p className="text-muted-foreground">Instant notifications when you encounter flagged or suspicious content while browsing.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card - Source Verification */}
                    <div className="md:col-span-1 group relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all hover:border-purple-500/30 hover:shadow-[0_0_50px_-15px_rgba(168,85,247,0.2)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="size-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
                                <FileSearch className="size-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Source Tracing</h3>
                                <p className="text-muted-foreground">Verify content origin and trace propagation across social networks.</p>
                            </div>
                        </div>
                    </div>

                    {/* Large Card Bottom - API */}
                    <div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all hover:border-blue-500/30 hover:shadow-[0_0_50px_-15px_rgba(59,130,246,0.2)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 h-full">
                            <div className="flex-1">
                                <div className="size-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
                                    <Zap className="size-6" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">One Unified API</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Integrate UnFaked detection capabilities directly into your own platforms, apps, and moderation workflows.
                                </p>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-500">
                                    <span>POST</span>
                                    <span>api.unfaked.com/v1/detect</span>
                                </div>
                            </div>
                            <div className="flex-1 w-full relative h-full min-h-[160px] bg-neutral-950 rounded-lg border border-white/10 p-4 font-mono text-xs text-green-400 overflow-hidden shadow-2xl">
                                <div className="absolute top-2 left-2 flex gap-1.5">
                                    <div className="size-2 rounded-full bg-red-500/20" />
                                    <div className="size-2 rounded-full bg-yellow-500/20" />
                                    <div className="size-2 rounded-full bg-green-500/20" />
                                </div>
                                <div className="mt-6 opacity-90 space-y-1">
                                    <div><span className="text-purple-400">const</span> <span className="text-blue-400">result</span> = <span className="text-purple-400">await</span> unfaked.<span className="text-yellow-400">detect</span>(media);</div>
                                    <div className="text-gray-500">// Result:</div>
                                    <div>{`{`}</div>
                                    <div className="pl-4"><span className="text-blue-300">"confidence"</span>: <span className="text-orange-400">0.998</span>,</div>
                                    <div className="pl-4"><span className="text-blue-300">"is_manipulated"</span>: <span className="text-orange-400">true</span>,</div>
                                    <div className="pl-4"><span className="text-blue-300">"type"</span>: <span className="text-green-300">"deepfake_video"</span></div>
                                    <div>{`}`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
