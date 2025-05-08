"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "UI/UX Designer",
    company: "Freelance",
    period: "July 2024 - September 2024",
    description: [
      "Created user-centered designs by understanding business requirements and user feedback",
      "Designed wireframes, mockups, and interactive prototypes using Figma",
      "Improved user experience by optimizing navigation flows and reducing friction points",
      "Collaborated with developers to ensure pixel-perfect implementation of designs",
    ],
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
    color: "bg-purple-500",
  },
  {
    title: "Marketing Intern",
    company: "Digital Marketing Agency",
    period: "December 2023 - January 2024",
    description: [
      "Managed social media campaigns across multiple platforms",
      "Created engaging content that increased engagement by 45%",
      "Conducted market research and competitor analysis",
      "Assisted in email marketing campaigns with 30% open rate",
    ],
    skills: ["Social Media", "Content Creation", "Analytics", "Email Marketing", "SEO"],
    color: "bg-cyan-500",
  },
]

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-12">
            <Briefcase className="w-6 h-6 text-cyan-400" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Experience
            </h2>
          </motion.div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline line */}
                {i !== experiences.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-800" />
                )}

                <div className="relative flex gap-6 bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                  {/* Timeline dot */}
                  <div className={`w-4 h-4 rounded-full mt-2 ${exp.color} ring-4 ring-gray-800 flex-shrink-0`} />

                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-gray-400">{exp.company}</p>
                      </div>
                      <span className="text-sm text-cyan-400 bg-cyan-950/50 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300 marker:text-cyan-400">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm px-3 py-1 rounded-full bg-gray-700/50 text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
