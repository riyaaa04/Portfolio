"use client"

import { useEffect, useState } from "react"
import { Code, Github, Laptop, Terminal } from "lucide-react"
import AboutSection from "@/components/about-section"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import IntroAnimation from "@/components/intro-animation"
import ExperienceSection from "@/components/experience-section"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [showPortfolio, setShowPortfolio] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-gray-900">
      {!showPortfolio ? (
        <IntroAnimation onComplete={() => setShowPortfolio(true)} />
      ) : (
        <>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />

          <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md p-2 rounded-full z-50">
            <ul className="flex space-x-4">
              <li>
                <a href="#hero" className="text-white hover:text-cyan-400 p-2 rounded-full block">
                  <Terminal size={20} />
                  <span className="sr-only">Hero</span>
                </a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-cyan-400 p-2 rounded-full block">
                  <Code size={20} />
                  <span className="sr-only">About</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white hover:text-cyan-400 p-2 rounded-full block">
                  <Laptop size={20} />
                  <span className="sr-only">Skills</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white hover:text-cyan-400 p-2 rounded-full block">
                  <Github size={20} />
                  <span className="sr-only">Projects</span>
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </main>
  )
}
