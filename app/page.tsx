import NavBar from '@/components/NavBar'
import HeroSection from '@/components/HeroSection'
import ForWhomSection from '@/components/ForWhomSection'
import ProgramSection from '@/components/ProgramSection'
import WhySection from '@/components/WhySection'
import SpeakerSection from '@/components/SpeakerSection'
import ResultsSection from '@/components/ResultsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import RegisterSection from '@/components/RegisterSection'
import Footer from '@/components/Footer'
import StickyCtaBar from '@/components/StickyCtaBar'
import ThemeSwitcher from '@/components/ThemeSwitcher'

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <ForWhomSection />
      <ProgramSection />
      <WhySection />
      <SpeakerSection />
      <ResultsSection />
      <TestimonialsSection />
      <RegisterSection />
      <Footer />
      <StickyCtaBar />
      <ThemeSwitcher />
    </main>
  )
}
