import { Button } from "@/components/ui/button";
import { 
  ClerkLoaded, 
  ClerkLoading, 
  SignedIn, 
  SignedOut, 
  SignUpButton,
  SignInButton
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-12">
      {/* Hero Image with Floating Animation */}
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[480px] mb-8 lg:mb-0">
        <Image
          src="/hero.svg"
          fill
          alt="Hero"
          className="animate-float" // Add a floating animation
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center gap-y-8">
        {/* Heading with Typing Animation */}
        <h1 className="text-3xl lg:text-5xl font-bold text-neutral-800 max-w-[480px] text-center animate-fade-in">
          Learn, Practice, and Master New Languages with{" "}
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            LangVenture
          </span>
        </h1>

        {/* Buttons with Shiny Animation */}
        <div className="flex flex-col items-center gap-y-4 w-full max-w-[330px]">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button
                  size="lg"
                 
                  className="w-full text-green-600 border-green-600 hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
                asChild
              >
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}