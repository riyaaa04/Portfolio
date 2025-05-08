"use client"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

// Tech stack with skill levels
const frontendSkills = [
  { name: "HTML", level: 90, color: "bg-orange-500" },
  { name: "CSS", level: 85, color: "bg-blue-500" },
  { name: "JavaScript", level: 80, color: "bg-yellow-500" },
  { name: "React", level: 75, color: "bg-cyan-400" },
  { name: "TypeScript", level: 70, color: "bg-blue-600" },
]

const backendSkills = [
  { name: "Node.js", level: 75, color: "bg-green-500" },
  { name: "Express", level: 70, color: "bg-gray-500" },
  { name: "MongoDB", level: 65, color: "bg-green-600" },
  { name: "SQL", level: 60, color: "bg-blue-500" },
  { name: "Python", level: 80, color: "bg-yellow-600" },
]

const toolsSkills = [
  { name: "Git", level: 85, color: "bg-orange-600" },
  { name: "Docker", level: 60, color: "bg-blue-500" },
  { name: "VS Code", level: 90, color: "bg-blue-600" },
  { name: "Figma", level: 70, color: "bg-purple-500" },
  { name: "Terminal", level: 75, color: "bg-gray-600" },
]

export default function SkillsSection() {
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
    <section id="skills" ref={ref} className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" animate={controls} variants={containerVariants} className="text-center mb-16">
          <motion.div
            variants={itemVariants}
            className="inline-block bg-gray-700 px-3 py-1 rounded-md text-cyan-400 font-mono mb-4"
          >
            <span className="text-green-400">$</span> npm list --global
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
            Tech <span className="text-cyan-400">Stack</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl max-w-2xl mx-auto text-gray-300">
            Languages, frameworks and tools I work with
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Frontend Skills */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="bg-gray-900 rounded-lg p-6 border border-gray-700"
          >
            <motion.h3 variants={itemVariants} className="text-xl font-bold mb-6 text-center">
              <span className="text-cyan-400">Frontend</span> Development
            </motion.h3>

            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants} custom={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-sm">{skill.name}</span>
                    <span className="text-xs text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className={`h-2.5 rounded-full ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Code snippet decoration */}
            <div className="mt-6 bg-gray-800 p-3 rounded border border-gray-700">
              <pre className="text-xs font-mono text-gray-400 overflow-x-auto">
                <code>{`function App() {
  return <Component />;
}`}</code>
              </pre>
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="bg-gray-900 rounded-lg p-6 border border-gray-700"
          >
            <motion.h3 variants={itemVariants} className="text-xl font-bold mb-6 text-center">
              <span className="text-cyan-400">Backend</span> Development
            </motion.h3>

            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants} custom={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-sm">{skill.name}</span>
                    <span className="text-xs text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className={`h-2.5 rounded-full ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Code snippet decoration */}
            <div className="mt-6 bg-gray-800 p-3 rounded border border-gray-700">
              <pre className="text-xs font-mono text-gray-400 overflow-x-auto">
                <code>{`app.get('/api/data', async (req, res) => {
  const data = await db.find();
  res.json(data);
});`}</code>
              </pre>
            </div>
          </motion.div>

          {/* Tools Skills */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="bg-gray-900 rounded-lg p-6 border border-gray-700"
          >
            <motion.h3 variants={itemVariants} className="text-xl font-bold mb-6 text-center">
              <span className="text-cyan-400">Tools</span> & Workflow
            </motion.h3>

            <div className="space-y-4">
              {toolsSkills.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants} custom={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-sm">{skill.name}</span>
                    <span className="text-xs text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className={`h-2.5 rounded-full ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Code snippet decoration */}
            <div className="mt-6 bg-gray-800 p-3 rounded border border-gray-700">
              <pre className="text-xs font-mono text-gray-400 overflow-x-auto">
                <code>{`$ git commit -m "feat: add new component"
$ git push origin main`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
