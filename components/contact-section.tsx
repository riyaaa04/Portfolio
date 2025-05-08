"use client"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react"

export default function ContactSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

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
        staggerChildren: 0.2,
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
    <section id="contact" ref={ref} className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" animate={controls} variants={containerVariants} className="text-center mb-16">
          <motion.div
            variants={itemVariants}
            className="inline-block bg-gray-700 px-3 py-1 rounded-md text-cyan-400 font-mono mb-4"
          >
            <span className="text-green-400">$</span> ssh contact@riya-singh.dev
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl max-w-2xl mx-auto text-gray-300">
            Have a project in mind? Let&apos;s collaborate!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div initial="hidden" animate={controls} variants={containerVariants}>
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6 text-cyan-400">
              Contact Information
            </motion.h3>

            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
              <div className="bg-gray-700 p-3 rounded-md">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="font-mono">2023.riyas@isu.ac.in</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <div className="bg-gray-900 p-4 rounded-md border border-gray-700 font-mono text-sm">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-gray-400">terminal</span>
                </div>
                <p className="mb-1">
                  <span className="text-green-400">$</span> whois riya-singh
                </p>
                <p className="text-gray-400">Name: Riya Singh</p>
                <p className="text-gray-400">Location: Navi Mumbai, India</p>
                <p className="text-gray-400">Occupation: Full Stack Developer and UI/UX Designer</p>
                <p className="mb-1 mt-2">
                  <span className="text-green-400">$</span> _
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <a 
                href="https://github.com/riyaaa04" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-700 p-3 rounded-md hover:bg-cyan-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/riya-singh-061788291/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-700 p-3 rounded-md hover:bg-cyan-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.form initial="hidden" animate={controls} variants={containerVariants} className="space-y-4">
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium mb-1 font-mono">
                <span className="text-green-400">$</span> name:
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-900 border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium mb-1 font-mono">
                <span className="text-green-400">$</span> email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-900 border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono"
                placeholder="Your email"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium mb-1 font-mono">
                <span className="text-green-400">$</span> message:
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-gray-900 border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono"
                placeholder="Your message"
              ></textarea>
            </motion.div>

            <motion.button
              variants={itemVariants}
              className="bg-cyan-600 text-white py-3 px-8 rounded-md font-medium hover:bg-cyan-700 transition-colors w-full flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
