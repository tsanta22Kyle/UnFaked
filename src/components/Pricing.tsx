
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function Pricing() {
    return (
        <section className="container mx-auto py-12 px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Free Plan */}
                <Card className="flex flex-col border-border/50 shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Free</CardTitle>
                        <CardDescription>Start verifying content</CardDescription>
                        <div className="mt-4 flex items-baseline gap-1">
                            <span className="text-4xl font-extrabold tracking-tight">$0</span>
                            <span className="text-muted-foreground ml-1">/month</span>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <ul className="space-y-3">
                            {[
                                "5 verifications/month",
                                "Basic analysis",
                                "Standard speed",
                                "Community support"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-[#ff1101]" />
                                    <span className="text-sm font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" className="w-full hover:bg-[#ff1101]/10 hover:text-[#ff1101] hover:border-[#ff1101]/50">
                            Get Started Free
                        </Button>
                    </CardFooter>
                </Card>

                {/* Pro Plan */}
                <Card className="relative flex flex-col border-[#ff1101] shadow-xl scale-105 z-10">
                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                        <Badge className="bg-[#ff1101] hover:bg-[#ff1101]/90 text-white px-3 py-1 rounded-full shadow-lg border-0">
                            Most Popular
                        </Badge>
                    </div>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Pro</CardTitle>
                        <CardDescription>For content creators</CardDescription>
                        <div className="mt-4 flex flex-col">
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-extrabold tracking-tight">$9.99</span>
                                <span className="text-muted-foreground ml-1">/month</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm mt-1">
                                <span className="text-muted-foreground line-through">$19.99</span>
                                <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400">
                                    Save 50%
                                </Badge>
                            </div>
                            <p className="text-xs text-[#ff1101] font-medium mt-2">
                                Early adopter pricing <span className="text-muted-foreground font-normal">· Limited time</span>
                            </p>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <ul className="space-y-3">
                            {[
                                "100 verifications/month",
                                "Deepfake detection",
                                "Metadata analysis",
                                "Priority support",
                                "Source tracing"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-[#ff1101]" />
                                    <span className="text-sm font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-[#ff1101] hover:bg-[#ff1101]/90 text-white shadow-md shadow-[#ff1101]/20">
                            Go Pro
                        </Button>
                    </CardFooter>
                </Card>

                {/* Ultra Plan */}
                <Card className="flex flex-col border-border/50 shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Ultra</CardTitle>
                        <CardDescription>For media agencies</CardDescription>
                        <div className="mt-4 flex flex-col">
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-extrabold tracking-tight">$29.99</span>
                                <span className="text-muted-foreground ml-1">/month</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm mt-1">
                                <span className="text-muted-foreground line-through">$49.99</span>
                                <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400">
                                    Save 40%
                                </Badge>
                            </div>
                            <p className="text-xs text-[#ff1101] font-medium mt-2">
                                Early adopter pricing <span className="text-muted-foreground font-normal">· Limited time</span>
                            </p>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <ul className="space-y-3">
                            {[
                                "Unlimited verifications",
                                "Advanced AI forensics",
                                "Real-time alerts",
                                "VIP 24/7 support",
                                "API access",
                                "Detailed reports"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-[#ff1101]" />
                                    <span className="text-sm font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-[#ff1101] hover:bg-[#ff1101]/90 text-white shadow-md shadow-[#ff1101]/20">
                            Go Ultra
                        </Button>
                    </CardFooter>
                </Card>
            </div>

            <div className="mt-12 text-center flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                    <Check className="h-3 w-3 text-[#ff1101]" /> No credit card required
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1">
                    <Check className="h-3 w-3 text-[#ff1101]" /> Cancel anytime
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1">
                    <Check className="h-3 w-3 text-[#ff1101]" /> Secure payments via Stripe
                </span>
            </div>
        </section>
    )
}
