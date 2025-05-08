"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, FileCode, GitBranch, Globe } from "lucide-react"

const devJourney = [
  {
    year: "2018",
    title: "First Line of Code",
    description: "Started with HTML & CSS",
    icon: <Code className="w-5 h-5" />,
    color: "bg-blue-500",
  },
  {
    year: "2019",
    title: "JavaScript Fundamentals",
    description: "Learned JS basics & DOM manipulation",
    icon: <FileCode className="w-5 h-5" />,
    color: "bg-yellow-500",
  },
  {
    year: "2020",
    title: "Backend Development",
    description: "Explored Node.js & databases",
    icon: <Database className="w-5 h-5" />,
    color: "bg-green-500",
  },
  {
    year: "2021",
    title: "Full Stack Projects",
    description: "Built complete web applications",
    icon: <Globe className="w-5 h-5" />,
    color: "bg-purple-500",
  },
  {
    year: "2022",
    title: "Open Source Contributions",
    description: "Started contributing to open source",
    icon: <GitBranch className="w-5 h-5" />,
    color: "bg-cyan-500",
  },
]

export default function AboutSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [showJourney, setShowJourney] = useState(false)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
      const journeyTimer = setTimeout(() => setShowJourney(true), 500)
      return () => clearTimeout(journeyTimer)
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" ref={ref} className="min-h-screen py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" animate={controls} variants={containerVariants} className="text-center mb-16">
          <motion.div
            variants={itemVariants}
            className="inline-block bg-gray-800 px-3 py-1 rounded-md text-cyan-400 font-mono mb-4"
          >
            <span className="text-green-400">$</span> cat dev_journey.md
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
            My <span className="text-cyan-400">Developer Journey</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl max-w-2xl mx-auto text-gray-300">
            From writing my first HTML tag to building full-stack applications
          </motion.p>
        </motion.div>

        {showJourney && (
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>

            {devJourney.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gray-800 border-2 border-cyan-500 z-10"></div>

                {/* Content card */}
                <div
                  className={`w-5/12 bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-lg ${
                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                  }`}
                >
                  <div className="flex items-center mb-3">
                    <div className={`${milestone.color} p-2 rounded-md mr-3`}>{milestone.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-cyan-400">{milestone.title}</h3>
                      <p className="text-sm text-gray-400">{milestone.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{milestone.description}</p>

                  {/* Code snippet decoration */}
                  <div className="mt-3 bg-gray-900 p-2 rounded text-xs font-mono text-gray-400 overflow-x-auto">
                    {index === 0 && '<div class="hello-world">Hello World!</div>'}
                    {index === 1 && 'document.querySelector(".btn").addEventListener("click", () => {})'}
                    {index === 2 && 'app.get("/api/data", async (req, res) => { /* ... */ })'}
                    {index === 3 && "const [data, setData] = useState(null)"}
                    {index === 4 && "git push origin feature/new-component"}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
