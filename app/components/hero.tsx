"use client"
import Image from "next/image"
import { Box, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"

export default function HeroSection() {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
    return (
        <Box
            sx={{
                width: "100%",
                py: 5,
                px: 3,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    maxWidth: "900px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 2,
                    alignItems: "center",
                }}
            >
                {/* Text Section */}
                <Box sx={{ maxWidth: "800px" }}>
                    <Typography
                        sx={{
                            fontSize: { xs: "30px", sm: "60px" },
                            fontWeight: "bold",
                            color: isDark ? "white" : "black",
                            mb: 1,
                        }}
                    >
                        Hi, I'm Aryan👋
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "14px", sm: "18px" },
                            color: isDark ? "white" : "black",
                            lineHeight: 1.6,
                        }}
                    >
                        Full Stack Developer from Ahmedabad, Gujarat. I enjoy working on both frontend and backend, turning ideas into scalable, user-friendly digital products.
                    </Typography>
                </Box>

                {/* Profile Image */}
                <Box
                    sx={{
                        width: { xs: 100, sm: 120 },
                        height: { xs: 100, sm: 120 },
                        flexShrink: 0,
                        borderRadius: "50%",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: isDark ? "black" : "white",
                    }}
                >
                    <Image
                        src="/image.png"
                        alt="Aryan Soni"
                        width={250}
                        height={250}
                        style={{ borderRadius: "50%" }}
                        priority
                    />
                </Box>
            </Box>
        </Box>
    )
}