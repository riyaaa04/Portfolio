"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Terminal } from "lucide-react"


export default function HeroSection() {
  const [showTerminal, setShowTerminal] = useState(false)
  const [terminalText, setTerminalText] = useState("")
  const fullText = "I'm a Full Stack Developer and UI/UX Designer."
  const typingSpeed = 70
  const cursorRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Start the animation sequence
    const terminalTimer = setTimeout(() => setShowTerminal(true), 500)

    return () => {
      clearTimeout(terminalTimer)
    }
  }, [])

  useEffect(() => {
    if (showTerminal) {
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTerminalText(fullText.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingInterval)
        }
      }, typingSpeed)

      return () => clearInterval(typingInterval)
    }
  }, [showTerminal])

  // Blinking cursor effect
  useEffect(() => {
    if (!cursorRef.current) return

    const blinkInterval = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = cursorRef.current.style.opacity === "0" ? "1" : "0"
      }
    }, 530)

    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <section
      id="hero"
      className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto">
          {/* Terminal Window */}
          <motion.div
            className="bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-700"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Terminal Header */}
            <div className="bg-gray-700 px-4 py-2 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto font-mono text-sm text-gray-300">riya@portfolio ~ </div>
            </div>

            {/* Terminal Content */}
            <div className="p-4 font-mono text-sm md:text-base">
              <div className="flex items-start">
                <span className="text-green-400 mr-2">riya@portfolio:~$</span>
                <span className="text-cyan-300">./welcome.sh</span>
              </div>

              <motion.div
                className="mt-4 text-2xl md:text-4xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <span className="text-cyan-400">Hello World!</span> I&apos;m{" "}
                <span className="text-cyan-300">Riya Singh</span>
              </motion.div>

              <div className="mt-6 flex items-start">
                <span className="text-green-400 mr-2">riya@portfolio:~$</span>
                <span className="text-white">cat about.txt</span>
              </div>

              {showTerminal && (
                <div className="mt-2 text-gray-300">
                  {terminalText}
                  <span ref={cursorRef} className="inline-block w-2 h-5 bg-cyan-400 ml-1"></span>
                </div>
              )}

              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 0.8 }}
              >
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 py-3 px-6 bg-cyan-600 text-white rounded-md font-medium hover:bg-cyan-700 transition-colors"
                >
                  <Terminal size={18} />
                  <span>View My Skills</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating skills background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

      </div>
    </section>
  )
}
