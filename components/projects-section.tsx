"use client"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { Code, ExternalLink, Github, Star } from "lucide-react"

const projects = [
  {
    title: "QuickPay",
    description: "The Paytm Clone is a full-featured digital wallet and utility app designed to replicate and enhance the functionality of the original Paytm app. This project integrates secure multi-method transaction support, AI-powered chatbot assistance, and a wide range of services including ticket booking and utility payments — offering users a seamless and unified digital experience.",
    image: "/logos/Pay-link.png",
    tags: ["ReactJs", "Node.js", "Socket.io", "MongoDB","Firebase"],
    githubLink: "https://github.com/riyaaa04/Paytm_MernStack_Clone",
    demoLink: "#",
  },
  {
    title: "Telemedicine Website",
    description: "Built a responsive and user-friendly telemedicine frontend where patients can book video consultations with doctors, chat in real time, and view upcoming and past appointments. The platform includes secure user authentication, doctor profile browsing, appointment scheduling, and session reminders — all designed with a clean, intuitive UI.",
    image: "/logos/video-conferencing-in-telemedicine-scaled.jpg",
    tags: ["ReactJs", "Html", "CSS", "Figma"],
    githubLink: "https://github.com/riyaaa04/Telemedicine_Frontend_Website",
    demoLink: "https://www.youtube.com/watch?v=rYi2VPHWc0U",
  },
  {
    title: "Rentease",
    description: "Built a full-stack car rental application offering features like car browsing, instant booking, driver selection, and free home delivery. Users can choose from hourly, daily, or monthly rentals with options for sanitized cars, insurance coverage, and real-time availability. Included badge-based rewards to boost engagement and an intuitive UI for smooth user experience.",
    image: "/logos/Car-Rentals-in-India.jpg",
    tags: ["ReactJs", "NodeJs", "Express", "MongoDB"],
    githubLink: "https://github.com/BHAGATBHAGYASHREE/RentEase",
    demoLink: "https://www.youtube.com/watch?v=UkUAEfmqQ6M",
  },
]

export default function ProjectsSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  }

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" animate={controls} variants={containerVariants} className="text-center mb-16">
          <motion.div
            variants={itemVariants}
            className="inline-block bg-gray-800 px-3 py-1 rounded-md text-cyan-400 font-mono mb-4"
          >
            <span className="text-green-400">$</span> ls -la projects/
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
            My <span className="text-cyan-400">Projects</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl max-w-2xl mx-auto text-gray-300">
            Check out some of my recent work
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300"
            >
              {/* Project Header - GitHub Style */}
              <div className="bg-gray-700 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <Code className="w-5 h-5 text-cyan-400 mr-2" />
                  <h3 className="font-mono text-sm font-medium">riya-singh/{project.title.toLowerCase()}</h3>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center text-xs">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    
                  </div>
                  <div className="flex items-center text-xs">
                    <svg className="w-4 h-4 text-gray-400 mr-1" viewBox="0 0 16 16" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      ></path>
                    </svg>
    
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden group">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.githubLink}
                      className="bg-gray-800 text-white py-2 px-4 rounded-md flex items-center gap-2 hover:bg-gray-700"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.demoLink}
                      className="bg-cyan-600 text-white py-2 px-4 rounded-md flex items-center gap-2 hover:bg-cyan-700"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-700 text-xs px-3 py-1 rounded-full text-cyan-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code snippet preview */}
              <div className="px-6 pb-6">
                <div className="bg-gray-900 rounded-md p-3 font-mono text-xs text-gray-400 overflow-hidden">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  {index === 0 && (
                    <pre>
                      <code>{'import { useState } from "react";\n\nfunction Chat() { ... }'}</code>
                    </pre>
                  )}
                  {index === 1 && (
                    <pre>
                      <code>{"const Snippet = ({ code, language }) => { ... }"}</code>
                    </pre>
                  )}
                  {index === 2 && (
                    <pre>
                      <code>
                        {"const [tasks, setTasks] = useState([]);\n\nconst moveTask = (id, status) => { ... }"}
                      </code>
                    </pre>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
