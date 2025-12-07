
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImpactHeadlineProps {
    className?: string;
}

export function ImpactHeadline({ className }: ImpactHeadlineProps) {
    return (
        <div className={cn("flex flex-col items-center text-center font-black tracking-tighter", className)}>
            <h1 className="text-3xl md:text-5xl lg:text-7xl leading-[0.9] text-foreground">
                Detect Deepfakes
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-3xl md:text-5xl lg:text-7xl leading-[0.9] mt-1 md:mt-2">
                <span className="text-foreground">+misinfo</span>
                <span className="text-foreground">in</span>
                <span className="flex items-center gap-1 text-[#ff1101] italic tracking-tight">
                    <Zap className="size-8 md:size-16 fill-[#ff1101] animate-pulse" style={{ animationDuration: '2s' }} />
                    seconds
                </span>
            </div>
        </div>
    );
}
