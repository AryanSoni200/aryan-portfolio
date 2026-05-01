"use client"

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { Box, Divider, IconButton, Tooltip } from "@mui/material"
import { ColorModeContext } from "../ThemeRegistry"
import { GitHub, LinkedIn, Instagram, YouTube, X, LightMode, DarkMode, Home } from "@mui/icons-material"
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";

const ICON_SIZE = 40;
const DOCK_WIDTH = 80;
const MAX_SCALE = 1.5;

function DockIcon({ mouseX, children }: any) {
  const ref: any = useRef(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    const iconCenter = bounds.x + bounds.width / 2;
    return val - iconCenter;
  });

  const scaleVal = useTransform(
    distance,
    [-DOCK_WIDTH, 0, DOCK_WIDTH],
    [1, MAX_SCALE, 1]
  );

  const yVal = useTransform(
    distance,
    [-DOCK_WIDTH, 0, DOCK_WIDTH],
    [0, -6, 0]
  );

  const scale = useSpring(scaleVal, { mass: 0.1, stiffness: 180, damping: 12 });
  const y = useSpring(yVal, { mass: 0.1, stiffness: 180, damping: 12 });
  const width = useTransform(scale, (s) => `${ICON_SIZE * s}px`);

  return (
    <motion.div
      ref={ref}
      style={{
        width,                    
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
      }}
    >
      <motion.div style={{ scale, y }}>
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Navbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isDark = theme.palette.mode === "dark";

  const mouseX = useMotionValue(Infinity);

  const socialLinks = [
    { name: "GitHub",    icon: <GitHub />,    url: "https://github.com/AryanSoni200",                  color: "#000000ff" },
    { name: "LinkedIn",  icon: <LinkedIn />,  url: "https://www.linkedin.com/in/soni-aryan/",           color: "#0077B5"   },
    { name: "X",         icon: <X />,         url: "https://x.com/adsoni499331",                        color: "#000000ff" },
    { name: "Instagram", icon: <Instagram />, url: "https://www.instagram.com/a_d_soni/",               color: "#E4405F"   },
    { name: "YouTube",   icon: <YouTube />,   url: "https://www.youtube.com/@aryansoni1588",            color: "#FF0000"   },
  ]

  return (
    <>
      <Box
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        sx={{
          position: "fixed",
          bottom: { xs: "1.5rem", sm: "2rem" },
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: { xs: 0.5, sm: 1.5 },
          padding: { xs: "0.4rem 0.8rem", sm: "0.5rem 1rem" },
          borderRadius: "999px",
          backdropFilter: "blur(10px)",
          backgroundColor: isDark ? "rgba(27,27,27,0.4)" : "rgba(255, 255, 255, 1)",
          border: isDark ? "2px solid rgba(255,255,255,0.1)" : "2px solid rgba(0,0,0,0.08)",
          boxShadow: isDark ? "0 10px 30px rgba(0,0,0,0.4)" : "0 10px 30px rgba(0,0,0,0.15)",
          zIndex: 1000,
          animation: "slideUp 0.8s ease",
          overflow: "visible",
          "@keyframes slideUp": {
            "0%":   { transform: "translate(-50%, 100px)", opacity: 0 },
            "100%": { transform: "translate(-50%, 0)",     opacity: 1 },
          }
        }}
        >
        <DockIcon mouseX={mouseX}>
          <IconButton
            onClick={() => {
              const section = document.getElementById("home");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            sx={{
              color: isDark ? "#cfcfcf" : "black",
              transition: "all 0.3s ease",
              // ─── CHANGED: removed scale hover (DockIcon handles it) ───
            }}
          >
            <Home />
          </IconButton>
        </DockIcon>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ bgcolor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}
        />

        {socialLinks.map((social) => (
          <DockIcon key={social.name} mouseX={mouseX}>
            <Tooltip
              title={social.name}
              arrow
              placement="top"
              slotProps={{
                tooltip: {
                  sx: {
                    bgcolor: isDark ? "white" : "black",
                    color: isDark ? "black" : "white",
                    fontSize: "0.75rem",
                    textAlign: "center"
                  }
                },
                arrow: {
                  sx: { color: isDark ? "black" : "white" }
                }
              }}
            >
              <Link href={social.url}>
                <IconButton
                  sx={{
                    color: isDark ? "#cfcfcf" : "black",
                    transition: "color 0.3s ease",
                  }}
                >
                  {social.icon}
                </IconButton>
              </Link>
            </Tooltip>
          </DockIcon>
        ))}

        <Divider
          orientation="vertical"
          flexItem
          sx={{ bgcolor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}
        />
        <DockIcon mouseX={mouseX}>
          <IconButton
            onClick={colorMode.toggleColorMode}
            sx={{
              color: isDark ? "#cfcfcf" : "black",
              transition: "color 0.3s ease",
            }}
          >
            {isDark ? <DarkMode /> : <LightMode />}
          </IconButton>
        </DockIcon>
      </Box>

      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "120px",
          background: isDark
            ? "linear-gradient(to top, black, transparent)"
            : "linear-gradient(to top, white, transparent)",
          pointerEvents: "none",
          zIndex: 0
        }}
      />
    </>
  )
}