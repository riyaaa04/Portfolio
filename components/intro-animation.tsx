"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

interface IntroAnimationProps {
  onComplete: () => void
}

// Create the base animation component
function BaseIntroAnimation({ onComplete }: IntroAnimationProps) {
  // Initialize all state at the top level
  const [mounted, setMounted] = useState(false)
  const [showHi, setShowHi] = useState(false)
  const [showName, setShowName] = useState(false)
  const [startExit, setStartExit] = useState(false)
  const [randomValues] = useState(() => ({
    binary: Array.from({ length: 20 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      rotation: Math.random() * 360,
      bits: Array.from({ length: 20 }).map(() => Math.round(Math.random()))
    })),
    circuits: Array.from({ length: 15 }).map((_, i) => ({
      width: Math.random() * 200 + 50,
      left: Math.random() * 100,
      top: Math.random() * 100,
      rotate: [0, 90, 180, 270][i % 4],
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }))
  }))

  // Mount effect
  useEffect(() => {
    setMounted(true)
  }, [])

  // Animation sequence effect
  useEffect(() => {
    if (!mounted) return

    const timer1 = setTimeout(() => setShowHi(true), 500)
    const timer2 = setTimeout(() => setShowName(true), 2000)
    const timer3 = setTimeout(() => setStartExit(true), 4000)
    const timer4 = setTimeout(() => onComplete(), 5000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [mounted, onComplete])

  // Only render animations on the client side
  if (!mounted) {
    return null
  }


  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-900 overflow-hidden">
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: startExit ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Girl Character */}
        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80"
          initial={{ scale: 0.8, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          {/* Character Body - Simple SVG representation */}
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Head */}
            <motion.circle
              cx="100"
              cy="70"
              r="40"
              fill="#FFD7BA"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />

            {/* Hair */}
            <motion.path
              d="M60,70 Q80,20 100,40 Q120,20 140,70 Q140,40 100,30 Q60,40 60,70"
              fill="#4A2C2A"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />

            {/* Eyes */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.3 }}>
              <circle cx="85" cy="65" r="5" fill="#4A2C2A" />
              <circle cx="115" cy="65" r="5" fill="#4A2C2A" />
            </motion.g>

            {/* Smile - animated to appear */}
            <motion.path
              d="M85,85 Q100,95 115,85"
              stroke="#4A2C2A"
              strokeWidth="3"
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            />

            {/* Body - changed to tech theme colors */}
            <motion.path
              d="M80,110 Q100,120 120,110 L130,170 L70,170 Z"
              fill="#0891B2" // Cyan-600
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />

            {/* Arms */}
            <motion.g
              initial={{ rotate: -10, x: -5 }}
              animate={{ rotate: 0, x: 0 }}
              transition={{ repeat: 2, duration: 0.5, delay: 1.2 }}
            >
              <path d="M80,115 L50,140" stroke="#FFD7BA" strokeWidth="8" strokeLinecap="round" />
            </motion.g>

            <motion.g
              initial={{ rotate: 10, x: 5 }}
              animate={{ rotate: 0, x: 0 }}
              transition={{ repeat: 2, duration: 0.5, delay: 1.2 }}
            >
              <path d="M120,115 L150,140" stroke="#FFD7BA" strokeWidth="8" strokeLinecap="round" />
            </motion.g>
          </svg>

          {/* Terminal-style Speech Bubble */}
          {showHi && (
            <motion.div
              className="absolute -top-16 right-0 bg-gray-800 text-cyan-400 rounded-md px-6 py-3 shadow-lg border border-cyan-500"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <div className="flex items-center gap-1 mb-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="font-mono">
                <span className="text-green-400">$</span> echo <span className="text-cyan-300">&quot;Hi!&quot;</span>
              </p>
              <div className="absolute -bottom-2 right-10 w-4 h-4 bg-gray-800 transform rotate-45 border-r border-b border-cyan-500"></div>
            </motion.div>
          )}
        </motion.div>

        {/* Name Text - Terminal Style */}
        {showName && (
          <motion.div
            className="text-center mt-4 font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">
              <span className="text-green-400">$</span> whoami
              <br />
              <span className="text-white">&gt; Riya Singh</span>
            </h1>
            <motion.p
              className="text-gray-300 text-lg mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="text-green-400">$</span> ./view_portfolio.sh
            </motion.p>
          </motion.div>
        )}
      </motion.div>

      {/* Background code elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Binary code background */}
        <div className="absolute inset-0 opacity-10">
          {randomValues.binary.map((element, i) => (
            <div
              key={i}
              className="absolute text-xs text-cyan-500 font-mono"
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
                transform: `rotate(${element.rotation}deg)`,
              }}
            >
              {element.bits.map((bit, j) => (
                <span key={j}>{bit}</span>
              ))}
            </div>
          ))}
        </div>

        {/* Animated circuit lines */}
        {randomValues.circuits.map((line, i) => (
          <motion.div
            key={i}
            className="absolute bg-cyan-500/20 h-px"
            style={{
              width: `${line.width}px`,
              left: `${line.left}%`,
              top: `${line.top}%`,
              rotate: `${line.rotate}deg`,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: 1,
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: line.duration,
              delay: line.delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop"
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Create a client-side only version of the animation component
const IntroAnimation = dynamic(
  () => Promise.resolve(BaseIntroAnimation),
  { ssr: false }
)

export default IntroAnimation
