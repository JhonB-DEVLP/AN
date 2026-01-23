import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ConversationExample } from "@/components/conversation-example"
import { WhoItsForSection } from "@/components/who-its-for-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <ConversationExample />
      <WhoItsForSection />
      <WhyChooseUsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
