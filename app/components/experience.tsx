"use client"
import { useState } from "react"
import Image from "next/image"
import { Box, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles";

const experiences = [
    {
        logo: "/procuregenie.png",
        alt: "Procuregenie",
        company: "Procuregenie",
        role: "Full Stack Developer",
        duration: "Jun 2026 – Present",
        description: "Specializing in modern web technologies, building responsive UIs, robust APIs, and scalable backend systems.",
    },
    {
        logo: "/ct.png",
        alt: "Crystal Treasure",
        company: "Crystal Treasure",
        role: "Image & Video Editor",
        duration: "Feb 2025 – Present",
        description: "Edit images and videos for the company, and also handle social media and e-commerce platform.",
    },
    {
        logo: "/itechbrain1.png",
        alt: "iTechBrains",
        company: "iTechBrains",
        role: "Application Developer",
        duration: "Jan 2025 – Apr 2025",
        description: "Worked as an Application Developer Intern.",
    },
]

export default function ExperienceSection() {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleDescription = (index: number) => {
        setOpenIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        )
    }

    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", px: 3, mt: 5 }}>
            <Box sx={{ width: "100%", maxWidth: "900px" }}>

                <Typography
                    sx={{
                        fontSize: { xs: "25px", sm: "35px" },
                        textTransform: "uppercase",
                        fontFamily: "poppins",
                        fontWeight: 600,
                        mb: 2,
                        color: isDark ? "white" : "black",
                    }}
                >
                    Work Experience
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", px: 2 }}>
                    {experiences.map((exp, i) => (
                        <Box key={i}>
                            <Box
                                onClick={() => toggleDescription(i)}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: 2,
                                    py: 1.5,
                                    cursor: "pointer",
                                    "&:hover .arrow": {
                                        opacity: 1,
                                        transform: "translateX(0)",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        bgcolor: "white",
                                        border: "1px solid",
                                        borderColor: "#9e9e9eff",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Image
                                        src={exp.logo}
                                        alt={exp.alt}
                                        width={35}
                                        height={35}
                                    />
                                </Box>

                                <Box sx={{ flex: 1, minWidth: 0, justifyContent: "center", alignItems: "center" }}>
                                    <Typography
                                        component="span"
                                        sx={{
                                            color: isDark ? "white" : "black",
                                            fontWeight: 500,
                                            fontFamily: "poppins",
                                            fontSize: { xs: "14px", sm: "16px" },
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                        }}
                                    >
                                        {exp.company}

                                        <Box
                                            className="arrow"
                                            sx={{
                                                fontSize: "16px",
                                                opacity: 0,
                                                transform: "translateX(-5px)",
                                                transition: "all 0.3s",
                                            }}
                                        >
                                            ›
                                        </Box>
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: { xs: "12px", sm: "14px" },
                                            fontFamily: "poppins",
                                            color: isDark ? "#e4e4e7" : "#3c3c3c",
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        {exp.role}
                                    </Typography>
                                </Box>

                                <Typography
                                    sx={{
                                        fontSize: { xs: "12px", sm: "14px" },
                                        fontFamily: "poppins",
                                        color: isDark ? "white" : "black",
                                        textAlign: "right",
                                        flexShrink: 0,
                                    }}
                                >
                                    {exp.duration}
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    overflow: "hidden",
                                    maxHeight: openIndexes.includes(i) ? "200px" : "0px",
                                    opacity: openIndexes.includes(i) ? 1 : 0,
                                    transition: "all 0.3s ease-in-out",
                                    pl: "65px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: { xs: "12px", sm: "14px" },
                                        fontFamily: "poppins",
                                        color: isDark ? "white" : "black",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {exp.description}
                                </Typography>
                            </Box>

                        </Box>
                    ))}
                </Box>

            </Box>
        </Box>
    )
}