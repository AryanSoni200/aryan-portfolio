"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
    Box,
    Typography,
    IconButton,
    Chip,
    Skeleton
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { useEffect } from "react"
import { GitHub, NavigateBefore, NavigateNext } from "@mui/icons-material"

function ProjectCardSkeleton({ isDark }: { isDark: boolean }) {
    return (
        <Box
            sx={{
                border: "1px solid",
                borderColor: isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)",
                borderRadius: "14px",
                overflow: "hidden",
                background: isDark ? "rgba(255,255,255,0.02)" : "rgba(0, 0, 0, 0.02)",
                backdropFilter: "blur(10px)",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Skeleton
                variant="rectangular"
                width="100%"
                height={200}
                sx={{
                    bgcolor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
                    transform: "none",
                }}
                animation="wave"
            />

            <Box sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Skeleton
                        variant="text"
                        width="55%"
                        height={28}
                        sx={{ bgcolor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}
                        animation="wave"
                    />
                    <Skeleton
                        variant="circular"
                        width={28}
                        height={28}
                        sx={{ bgcolor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}
                        animation="wave"
                    />
                </Box>

                {/* Description lines */}
                <Skeleton
                    variant="text"
                    width="100%"
                    height={18}
                    sx={{ bgcolor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }}
                    animation="wave"
                />
                <Skeleton
                    variant="text"
                    width="80%"
                    height={18}
                    sx={{ bgcolor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }}
                    animation="wave"
                />

                {/* Tech chips */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 0.5 }}>
                    {[60, 80, 70, 50].map((w, i) => (
                        <Skeleton
                            key={i}
                            variant="rounded"
                            width={w}
                            height={24}
                            sx={{
                                borderRadius: "8px",
                                bgcolor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"
                            }}
                            animation="wave"
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

function ProjectCard({ project, isDark }: { project: any, isDark: boolean }) {
    const [imageIndex, setImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isHovered || project.images.length <= 1) return;

        const interval = setInterval(() => {
            setImageIndex((prev) => (prev + 1) % project.images.length);
        }, 1500);

        return () => clearInterval(interval);
    }, [isHovered, project.images.length]);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <Box
            sx={{
                border: "1px solid",
                borderColor: isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)",
                borderRadius: "14px",
                overflow: "hidden",
                background: isDark ? "rgba(255,255,255,0.02)" : "rgba(0, 0, 0, 0.02)",
                backdropFilter: "blur(10px)",
                transition: "all .35s ease",
                display: "flex",
                cursor: "pointer",
                flexDirection: "column",
                animation: "fadeInUp 0.5s ease both",
                "@keyframes fadeInUp": {
                    from: { opacity: 0, transform: "translateY(16px)" },
                    to:   { opacity: 1, transform: "translateY(0)" },
                },
                "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: isDark ? "rgba(255,255,255,0.18)" : "rgba(0, 0, 0, 0.18)",
                    boxShadow: isDark ? "0 20px 40px rgba(0,0,0,0.35)" : "0 20px 40px rgba(255,255,255,0.35)",
                    "& .carousel-arrows": {
                        opacity: 1
                    }
                }
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: 200,
                    overflow: "hidden"
                }}
            >
                <Box
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    sx={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                        transform: `translateX(-${imageIndex * 100}%)`
                    }}
                >
                    {project.images.map((img: string, i: number) => (
                        <Box key={i} sx={{ minWidth: "100%", height: "100%", position: "relative" }}>
                            <Image
                                src={img}
                                alt={`${project.title} - Image ${i + 1}`}
                                fill
                                style={{
                                    objectFit: "contain",
                                }}
                            />
                        </Box>
                    ))}
                </Box>

                {project.images.length > 1 && (
                    <>
                        <Box
                            className="carousel-arrows"
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                px: 1,
                                opacity: { xs: 1, sm: 0 },
                                transition: "opacity 0.3s ease",
                                pointerEvents: "none"
                            }}
                        >
                            <IconButton
                                onClick={handlePrev}
                                size="small"
                                sx={{
                                    bgcolor: "rgba(0,0,0,0.5)",
                                    color: "white",
                                    pointerEvents: "auto",
                                    backdropFilter: "blur(4px)",
                                    "&:hover": { bgcolor: "rgba(0,0,0,0.8)" }
                                }}
                            >
                                <NavigateBefore fontSize="small" />
                            </IconButton>
                            <IconButton
                                onClick={handleNext}
                                size="small"
                                sx={{
                                    bgcolor: "rgba(0,0,0,0.5)",
                                    color: "white",
                                    pointerEvents: "auto",
                                    backdropFilter: "blur(4px)",
                                    "&:hover": { bgcolor: "rgba(0,0,0,0.8)" }
                                }}
                            >
                                <NavigateNext fontSize="small" />
                            </IconButton>
                        </Box>

                        <Box
                            sx={{
                                position: "absolute",
                                bottom: 8,
                                left: 0,
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                gap: 0.5
                            }}
                        >
                            {project.images.map((_: any, i: number) => (
                                <Box
                                    key={i}
                                    onClick={(e) => { e.stopPropagation(); setImageIndex(i); }}
                                    sx={{
                                        width: imageIndex === i ? 16 : 6,
                                        height: 6,
                                        borderRadius: 3,
                                        bgcolor: imageIndex === i ? "white" : "rgba(255,255,255,0.5)",
                                        transition: "all 0.3s ease",
                                        cursor: "pointer",
                                        boxShadow: "0 1px 3px rgba(0,0,0,0.5)",
                                        zIndex: 10
                                    }}
                                />
                            ))}
                        </Box>
                    </>
                )}
            </Box>

            <Box sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 1 }}>
                    <Typography
                        sx={{
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            color: isDark ? "white" : "black",
                            lineHeight: 1.2,
                            mb: 1
                        }}
                    >
                        {project.title}
                    </Typography>
                    <IconButton
                        component={Link}
                        href={project.github}
                        target="_blank"
                        sx={{
                            mt: -0.5,
                            mr: -0.5,
                            color: isDark ? "#cfcfcf" : "#414141",
                            "&:hover": { color: isDark ? "#fff" : "#000", transform: "scale(1.1)" },
                            transition: "all 0.2s ease"
                        }}
                    >
                        <GitHub fontSize="small" />
                    </IconButton>
                </Box>

                <Typography
                    sx={{
                        fontSize: "0.9rem",
                        color: isDark ? "#9ca3af" : "#414141",
                        mb: 2,
                        flex: 1
                    }}
                >
                    {project.description}
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {project.tech.map((tech: string, i: number) => (
                        <Chip
                            key={i}
                            label={tech}
                            size="small"
                            sx={{
                                bgcolor: isDark ? "rgba(255,255,255,0.04)" : "rgba(0, 0, 0, 0.04)",
                                color: isDark ? "#e2e8f0" : "#334155",
                                fontSize: "0.75rem",
                                fontWeight: 500,
                                borderRadius: "8px",
                                border: "1px solid",
                                borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0, 0, 0, 0.08)",
                                transition: "all 0.2s ease",
                                "&:hover": {
                                    bgcolor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0, 0, 0, 0.1)",
                                    borderColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0, 0, 0, 0.2)",
                                    transform: "translateY(-1px)",
                                }
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default function ProjectsSection() {

    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 800);
        return () => clearTimeout(timer);
    }, []);

    const projects = [
        {
            title: "Task Management System",
            description: "Production-ready task management API built with Next.js, Prisma, and PostgreSQL featuring authentication, roles, comments, attachments, and workflows.",
            images: ["/1.png", "/2.png", "/3.png"],
            github: "https://github.com/",
            tech: ["Next.js", "Prisma", "PostgreSQL", "JWT Authentication"]
        },
        {
            title: "AI Services",
            description: "AI Services is a platform that provides AI services to users. It is a work in progress.",
            images: ["/one.png", "/two.png", "/three.png", "/four.png"],
            github: "https://github.com/abhaygadhvi11/AI-Service",
            tech: ["Node.js", "Express.js", "Gemini API", "PostgreSQL", "React", "MUI"]
        },
        {
            title: "Real-time Chat Application",
            description: "Real-time chat application with authentication, end-to-end encryption, online status, voice typing, share photos and group messaging.",
            images: ["/c1.png", "/c2.png", "/c3.png"],
            github: "https://github.com/AryanSoni200/chatApp.git",
            tech: ["Flutter", "Dart", "Firebase"]
        },
        {
            title: "Quiz Application",
            description: "Android quiz application with multiple categories, scoring system, and interactive UI.",
            images: ["/next.svg", "/next.svg"],
            github: "https://github.com/AryanSoni200/Q-A.git",
            tech: ["Android", "Java", "XML"]
        }
    ]

    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", px: 3, py: 6 }}>
            <Box sx={{ width: "100%", maxWidth: "900px" }}>

                <Typography
                    sx={{
                        fontSize: { xs: "30px", sm: "40px" },
                        fontWeight: 600,
                        mb: 4,
                        color: isDark ? "white" : "black"
                    }}
                >
                    Projects
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                        gap: 3
                    }}
                >
                    {isLoaded
                        ? projects.map((project, index) => (
                            <ProjectCard key={index} project={project} isDark={isDark} />
                        ))
                        : projects.map((_, index) => (
                            <ProjectCardSkeleton key={index} isDark={isDark} />
                        ))
                    }
                </Box>

            </Box>
        </Box>
    )
}