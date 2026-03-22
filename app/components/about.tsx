"use client";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export default function AboutSection() {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", px: 3, py: 3 }}>
            <Box sx={{ width: "100%", maxWidth: "900px" }}>

                <Typography
                    sx={{
                        fontSize: { xs: "30px", sm: "40px" },
                        fontWeight: 600,
                        mb: 2,
                        color: isDark ? "white" : "black",
                    }}
                >
                    About
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.5,
                        lineHeight: 1.7,
                        px: 1
                    }}
                >

                    <Typography
                        sx={{
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                            color: isDark ? "#9ca3af" : "#414141",
                        }}
                    >
                        My journey into technology began with learning programming fundamentals
                        including{" "}
                        <Box component="span" sx={{ fontWeight: 500, color: isDark ? "white" : "black" }}>
                            Java, Data Structures, and Object-Oriented Programming
                        </Box>.
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                            color: isDark ? "#9ca3af" : "#414141",
                        }}
                    >
                        I later moved into{" "}
                        <Box component="span" sx={{ fontWeight: 500, color: isDark ? "white" : "black" }}>
                            Application Development with Java
                        </Box>
                        , and did internship in{" "}
                        <Link
                            href="https://itechbrains.in/"
                            style={{ color: isDark ? "white" : "black", textDecoration: "underline", fontWeight: 500 }}
                        >
                            iTechBrains
                        </Link>{" "}
                        in 2025.
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                            color: isDark ? "#9ca3af" : "#414141",
                        }}
                    >
                        Over time, my curiosity evolved into a deep passion for building scalable systems and continuously exploring new technologies.
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                            color: isDark ? "#9ca3af" : "#414141",
                        }}
                    >
                        Currently, I work at{" "}
                        <Link
                            href="https://procuregenie.com/"
                            style={{ color: isDark ? "white" : "black", textDecoration: "underline", fontWeight: 500 }}
                        >
                            Procuregenie
                        </Link>{" "}
                        developing modern web applications and AI powered services across the full stack, focusing on performance, scalability, and clean architecture.
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                            color: isDark ? "#9ca3af" : "#414141",
                        }}
                    >
                        Alongside development, I have strong creative skills in image and video editing. I volunteered at BAPS Swaminarayan Chhatralay, Bhavnagar.
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                            color: isDark ? "#9ca3af" : "#414141",
                        }}
                    >
                        I also work with{" "}
                        <Link
                            href="https://crystaltreasure53.com/"
                            style={{ color: isDark ? "white" : "black", textDecoration: "underline", fontWeight: 500 }}
                        >
                            Crystal Treasure
                        </Link>{" "}
                        as a{" "}
                        <Typography component="span" sx={{ fontWeight: 500, color: isDark ? "white" : "black" }}>
                            Lead Image and Video Editor,
                        </Typography>{" "}
                        creating visual content and managing creative assets.
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                            color: isDark ? "#9ca3af" : "#414141",
                        }}
                    >
                        I enjoy combining technology and creativity, whether it's developing complex applications or producing engaging visual content.
                    </Typography>

                </Box>

            </Box>
        </Box>
    );
}