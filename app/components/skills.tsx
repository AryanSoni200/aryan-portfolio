"use client"

import { Box, Typography, Chip } from "@mui/material"
import { useTheme } from "@mui/material/styles"

export default function SkillsSection() {

    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const skills = [
        "Typescript",
        "Javascript",
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "REST API",
        "Prisma ORM",
        "Sequelize ORM",
        "PostgreSQL",
        "Firebase",
        "Git",
        "GitHub",
        "SQL",
        "Java",
        "C",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Material UI",
        "XML",
        "Flutter",
        "Android"
    ]

    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", px: 3, py: 6 }}>
            <Box sx={{ width: "100%", maxWidth: "900px" }}>

                {/* Title */}
                <Typography
                    sx={{
                        fontSize: { xs: "30px", sm: "40px" },
                        fontWeight: 600,
                        mb: { xs: 3, md: 4 },
                        color: isDark ? "white" : "black"
                    }}
                >
                    Skills
                </Typography>

                {/* Skills cloud */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: { xs: 1.2, sm: 1.5 },
                    }}
                >
                    {skills.map((skill, index) => (
                        <Chip
                            key={index}
                            label={skill}
                            sx={{
                                bgcolor: isDark ? "rgba(255,255,255,0.03)" : "rgba(0, 0, 0, 0.04)",
                                color: isDark ? "#e2e8f0" : "#334155",
                                fontWeight: 500,
                                borderRadius: "10px",
                                height: { xs: "34px", sm: "38px" },
                                fontSize: { xs: "0.85rem", sm: "0.95rem" },
                                border: "1px solid",
                                borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0, 0, 0, 0.08)",
                                transition: "all 0.3s ease",
                                cursor: "pointer",
                                "& .MuiChip-label": {
                                    px: { xs: 1.5, sm: 2 }
                                },
                                "&:hover": {
                                    bgcolor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0, 0, 0, 0.08)",
                                    borderColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0, 0, 0, 0.2)",
                                    transform: "translateY(-3px)"
                                }
                            }}
                        />
                    ))}
                </Box>

            </Box>
        </Box>
    )
}