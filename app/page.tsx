"use client"

import { Box, useTheme } from "@mui/material"
import HeroSection from "./components/hero"
import AboutSection from "./components/about"
import ProjectsSection from "./components/projects"
import ExperienceSection from "./components/experience"
import EducationSection from "./components/education"
import SkillsSection from "./components/skills"
import Navbar from "./components/navbar"
import ContactSection from "./components/contact"

export default function Home() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
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
      <Navbar />
    </Box>
  )
}