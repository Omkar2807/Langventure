"use client"; // Add this line at the top

import { useRef } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
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
import { useOnScreen } from "@/hooks/useOnScreen"; // Import the custom hook
import Typewriter from "typewriter-effect";


type Props = {
    children: React.ReactNode;
}

const MarketingLayout = ({children}: Props) => {
  // Create refs for each section
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Use the custom hook to detect visibility
  const isFeaturesVisible = useOnScreen(featuresRef);
  const isTestimonialsVisible = useOnScreen(testimonialsRef);
  const isFaqVisible = useOnScreen(faqRef);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-neutral-50 to-neutral-100">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}

        {/* Hero Section */}
        <section className="w-full py-32 bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative z-10">
                          <h1 className="text-5xl lg:text-7xl font-bold text-neutral-800 mb-6">
                <Typewriter
                  options={{
                    strings: ["Learn, Practice, and Master New Languages"],
                    autoStart: true, // Automatically start typing
                    loop: true, // Loop the animation
                    cursor: "|", // Custom cursor character
                    cursorClassName: "text-yellow-500 blink", 
                    wrapperClassName: "typewriter-wrapper", // Custom wrapper class
                    delay: 70, // Typing speed (in milliseconds)
                    deleteSpeed: 60, // Deleting speed (in milliseconds)
                  }}
                />
              </h1>
              <p className="text-xl text-neutral-600 mb-8 animate-fade-in delay-100">
                Join millions of users worldwide and start your language journey today!
              </p>
              <div className="flex justify-center gap-4 animate-fade-in delay-200">
                <ClerkLoading>
                  <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
                </ClerkLoading>
                <ClerkLoaded>
                  <SignedOut>
                    <SignUpButton mode="modal">
                      <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 transition-all transform hover:scale-105 ">
                        Get Started
                      </Button>
                    </SignUpButton> 
                    <SignInButton mode="modal">
                      <Button size="lg" className="text-green-600 border-green-600 hover:bg-green-50 transition-all transform hover:scale-105">
                        I already have an account
                      </Button>
                    </SignInButton>           
                  </SignedOut>
                  <SignedIn>
                    <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 transition-all transform hover:scale-105" asChild>
                      <Link href="/learn">
                        Continue Learning
                      </Link>
                    </Button>
                  </SignedIn>
                </ClerkLoaded>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-20">
              <Image src="/language-icons.svg" alt="Language Icons" width={800} height={800} className="animate-float"/>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          ref={featuresRef}
          className={`w-full py-20 bg-white transition-opacity duration-1000 ${
            isFeaturesVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-neutral-800 mb-12">
              Why Choose LangVenture?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-neutral-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2">
                <div className="text-green-600 mb-4">
                  <Image src="/interactive-lessons.png" alt="Interactive Lessons" width={64} height={64} className="animate-bounce"/>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Interactive Lessons</h3>
                <p className="text-neutral-600">Engage with fun, game-like lessons that make learning addictive.</p>
              </div>
              <div className="bg-neutral-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2">
                <div className="text-green-600 mb-4">
                  <Image src="/progress-tracking.png" alt="Progress Tracking" width={64} height={64} 
                  className="animate-bounce"
                  // className="animate-pulse"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Progress Tracking</h3>
                <p className="text-neutral-600">Track your progress and celebrate milestones as you learn.</p>
              </div>
              <div className="bg-neutral-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2">
                <div className="text-green-600 mb-4">
                  <Image src="/community.png" alt="Community" width={64} height={64} className="animate-bounce"/>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Community Support</h3>
                <p className="text-neutral-600">Join a global community of learners and practice together.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          ref={testimonialsRef}
          className={`w-full py-20 bg-neutral-50 transition-opacity duration-2000 ${
            isTestimonialsVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-neutral-800 mb-12">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2">
                <p className="text-neutral-600 italic">"LangVenture has transformed the way I learn languages. The interactive lessons are fantastic!"</p>
                <p className="text-green-600 font-semibold mt-4">- Shreyas Jadhav</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2">
                <p className="text-neutral-600 italic">"I love the progress tracking feature. It keeps me motivated to continue learning."</p>
                <p className="text-green-600 font-semibold mt-4">- Rahul Iyer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-32 bg-gradient-to-br from-green-50 to-green-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-neutral-800 mb-8 animate-fade-in">
              Ready to Start Your Language Journey?
            </h2>
            <div className="flex justify-center gap-4 animate-fade-in delay-100">
              <ClerkLoading>
                <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
              </ClerkLoading>
              <ClerkLoaded>
                <SignedOut>
                  <SignUpButton mode="modal">
                    <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 transition-all transform hover:scale-105">
                      Get Started
                    </Button>
                  </SignUpButton> 
                  <SignInButton mode="modal">
                    <Button size="lg" className="text-green-600 border-green-600 hover:bg-green-50 transition-all transform hover:scale-105">
                      I already have an account
                    </Button>
                  </SignInButton>           
                </SignedOut>
                <SignedIn>
                  <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 transition-all transform hover:scale-105" asChild>
                    <Link className="animate-bounce" href="/learn">
                      Continue Learning
                    </Link>
                  </Button>
                </SignedIn>
              </ClerkLoaded>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          ref={faqRef}
          className={`w-full py-20 bg-white transition-opacity duration-1000 ${
            isFaqVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-neutral-800 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-neutral-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2">
                <h3 className="text-2xl font-semibold mb-4">How do I get started?</h3>
                <p className="text-neutral-600">Simply sign up for an account and start exploring our interactive lessons.</p>
              </div>
              <div className="bg-neutral-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2">
                <h3 className="text-2xl font-semibold mb-4">Is there a free trial?</h3>
                <p className="text-neutral-600">Yes, we offer a free trial for new users to experience our platform.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;