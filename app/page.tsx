import Intro from "@/components/Intro"
import SectionDivider from "@/components/SectionDivider"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About />
      <Projects />
      <Footer />
    </main>
  )
}
