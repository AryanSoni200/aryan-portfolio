// "use client"

// import { Box, useTheme } from "@mui/material"
// import HeroSection from "./components/hero"
// import AboutSection from "./components/about"
// import ProjectsSection from "./components/projects"
// import ExperienceSection from "./components/experience"
// import EducationSection from "./components/education"
// import SkillsSection from "./components/skills"
// import Navbar from "./components/navbar"
// import ContactSection from "./components/contact"

// export default function Home() {
//   const theme = useTheme();
//   const isDark = theme.palette.mode === "dark";
//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         bgcolor: isDark ? "black" : "white",
//         color: isDark ? "white" : "black",
//       }}
//     >
//       <section id="home">
//         <HeroSection />
//       </section>
//       <section id="about">
//         <AboutSection />
//       </section>
//       <section id="projects">
//         <ProjectsSection />
//       </section>
//       <section id="experience">
//         <ExperienceSection />
//       </section>
//       <section id="education">
//         <EducationSection />
//       </section>
//       <section id="skills">
//         <SkillsSection />
//       </section>
//       <section id="contact">
//         <ContactSection />
//       </section>
//       <Navbar />
//     </Box>
//   )
// }

// Apply Blurr Animation

"use client"

import { Box, useTheme } from "@mui/material"
import { motion } from "framer-motion"
import HeroSection from "./components/hero"
import AboutSection from "./components/about"
import ProjectsSection from "./components/projects"
import ExperienceSection from "./components/experience"
import EducationSection from "./components/education"
import SkillsSection from "./components/skills"
import Navbar from "./components/navbar"
import ContactSection from "./components/contact"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { Particles } from "@/components/ui/particles"

export default function Home() {
  const theme = useTheme()
  const isDark = theme.palette.mode === "dark"

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ScrollProgress />

      {isDark && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
          }}
        >
          <Particles className="z-0" quantity={300} />
        </Box>
      )}

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <section id="home">
            <HeroSection />
          </section>
          <section id="about">
            <AboutSection />
          </section>
          <section id="projects">
            <ProjectsSection />
          </section>
          <section id="experience">
            <ExperienceSection />
          </section>
          <section id="education">
            <EducationSection />
          </section>
          <section id="skills">
            <SkillsSection />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
        </motion.div>
      </Box>

      <Navbar />
    </Box>
  )
}