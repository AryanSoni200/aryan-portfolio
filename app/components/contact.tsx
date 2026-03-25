"use client";
import { Box, Typography, Chip, Button, Tooltip } from "@mui/material";
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
                px: { xs: 2, sm: 4 },
                py: { xs: 2, md: 4 },
                bgcolor: isDark ? "black" : "white",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: "300px", md: "600px" },
                    height: { xs: "300px", md: "600px" },
                    borderRadius: "50%",
                    background: isDark
                        ? "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)"
                        : "radial-gradient(circle, rgba(0,0,0,0.04) 0%, transparent 70%)",
                    pointerEvents: "none",
                },
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "900px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                    mb: { xs: 10, md: 12 }
                }}
            >
                <Chip
                    label="Contact"
                    sx={{
                        mb: 5,
                        px: 1,
                        bgcolor: isDark ? "white" : "black",
                        color: isDark ? "black" : "white",
                        fontFamily: "poppins",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        fontSize: "1.5rem",
                        border: "1px solid",
                        borderColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)",
                        borderRadius: "6px",
                        height: "42px",
                    }}
                />

                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        mb: 3,  
                        display: "block",
                        fontStyle: "italic",
                        fontSize: { xs: "2rem", sm: "2.75rem", md: "3.5rem" },
                        lineHeight: 1.15,
                        letterSpacing: "-0.02em",
                        color: isDark ? "#fff" : "#0a0a0a",
                    }}
                >
                    Let's build something
                </Typography>

                <Box
                    sx={{
                        width: "48px",
                        height: "1px",
                        bgcolor: isDark ? "rgba(255, 255, 255, 0.36)" : "rgba(0,0,0,0.15)",
                        mb: 4,
                    }}
                />

                <Typography
                    sx={{
                        fontFamily: "poppins",
                        color: isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        lineHeight: 1.75,
                        mb: 6,
                        maxWidth: "800px",
                        fontWeight: 400,
                    }}
                >
                    Whether you have a project idea, a collaboration in mind, or simply want to connect — feel free to reach out via social media, email, or a phone call. I’m always open to discussing new opportunities and building meaningful work.
                </Typography>

                <Tooltip
                    title="aryansoniofficial25@gmail.com"
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
                            sx: {
                                color: isDark ? "black" : "white"
                            }
                        }
                    }}
                >
                    <Button
                        href="mailto:aryansoniofficial25@gmail.com"
                        component="a"
                        disableRipple
                        sx={{
                            position: "relative",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            px: 4,
                            py: 1.6,
                            bgcolor: isDark ? "#fff" : "#0a0a0a",
                            color: isDark ? "#0a0a0a" : "#fff",
                            fontFamily: "poppins",
                            fontWeight: 600,
                            fontSize: "0.9rem",
                            letterSpacing: "0.02em",
                            borderRadius: "10px",
                            textTransform: "none",
                            border: "1px solid",
                            borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
                            textDecoration: "none",
                            transition: "all 0.25s ease",
                            boxShadow: isDark
                                ? "0 1px 3px rgba(0,0,0,0.5), 0 0 0 0 rgba(255,255,255,0)"
                                : "0 1px 3px rgba(0,0,0,0.1), 0 0 0 0 rgba(0,0,0,0)",
                            "&:hover": {
                                bgcolor: isDark ? "rgba(255,255,255,0.9)" : "#1a1a1a",
                                transform: "translateY(-1px)",
                                boxShadow: isDark
                                    ? "0 8px 24px rgba(255,255,255,0.08)"
                                    : "0 8px 24px rgba(0,0,0,0.15)",
                            },
                            "&:active": {
                                transform: "translateY(0px)",
                            },
                        }}
                    >
                        Send an Email
                    </Button>

                </Tooltip>

                <Button
                    href="tel:+919662680709"
                    component="a"
                    disableRipple
                    sx={{
                        mt: 3,
                        fontFamily: "poppins",
                        fontSize: "0.85rem",
                        letterSpacing: "0.06em",
                        color: isDark ? "white" : "black",
                        ":hover": {
                            bgcolor: isDark ? "black" : "white",
                        }
                    }}
                >
                    +91 9662680709
                </Button>
            </Box>
        </Box>
    );
}