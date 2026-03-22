"use client";

import { Box, Typography, Button, Chip, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function ContactSection() {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                px: 3,
                py: 6,
                bgcolor: isDark ? "#000" : "#fff",
            }}
        >
            <Box sx={{ width: "100%", maxWidth: "900px", textAlign: "center", mb: { xs: 6, md: 10 } }}>
                <Chip
                    label="Contact"
                    sx={{
                        mb: 5,
                        bgcolor: isDark ? "rgba(255,255,255,0.03)" : "black",
                        color: isDark ? "#ffffffff" : "white",
                        fontWeight: 500,
                        borderRadius: "10px",
                        height: { xs: "34px", sm: "38px" },
                        fontSize: { xs: "0.85rem", sm: "0.95rem" },
                        border: "1px solid",
                        borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0, 0, 0, 0.08)",
                        transition: "all 0.3s ease"
                    }}
                />

                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: "bold",
                        mb: 2,
                        fontSize: { xs: "1.2rem", md: "2.2rem" },
                        lineHeight: 1.2,
                    }}
                >
                    Let’s Work Together 🚀
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        color: isDark ? "#aaa" : "#555",
                        fontSize: "1.1rem",
                        mb: 4,
                        maxWidth: "600px",
                        mx: "auto",
                    }}
                >
                    Building something exciting or have an idea in mind?
                    I’d love to collaborate. Reach out anytime via Twitter or schedule a quick call.
                </Typography>
            </Box>
        </Box>
    );
}