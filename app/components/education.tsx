"use client";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, CardContent } from "@mui/material";

export default function EducationSection() {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", px: 3, mt: 8 }}>
            <Box sx={{ width: "100%", maxWidth: "900px" }}>

                <Typography
                    sx={{
                        fontSize: { xs: "25px", sm: "35px" },
                        textTransform: "uppercase",
                        fontFamily: "poppins",
                        fontWeight: 600,
                        color: isDark ? "white" : "black",
                    }}
                >
                    Education
                </Typography>

                <Box
                    sx={{
                        transition: "all 0.3s",
                    }}
                >
                    <CardContent
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 2,
                        }}
                    >

                        {/* Logo */}
                        <Box
                            sx={{
                                width: 48,
                                height: 48,
                                borderRadius: "50%",
                                overflow: "hidden",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                bgcolor: "white",
                                border: "1px solid",
                                borderColor: "#9e9e9eff",
                                flexShrink: 0,
                            }}
                        >
                            <Link href="https://www.ssgec.ac.in/">
                                <Image
                                    src="/ssec.png"
                                    alt="SSEC"
                                    width={28}
                                    height={28}
                                />
                            </Link>
                        </Box>

                        {/* Content */}
                        <Box sx={{ flex: 1, minWidth: 0 }}>

                            <Typography
                                component={Link}
                                href="https://www.ssgec.ac.in/"
                                sx={{
                                    fontFamily: "poppins",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 0.5,
                                    fontWeight: 500,
                                    color: isDark ? "white" : "black",
                                    textDecoration: "none",
                                    fontSize: { xs: "0.9rem", sm: "1rem" },
                                    "&:hover span": {
                                        opacity: 1,
                                        transform: "translateX(0)",
                                    },
                                }}
                            >
                                Shantilal Shah Engineering College

                                <Box
                                    component="span"
                                    sx={{
                                        fontSize: "0.9rem",
                                        opacity: 0,
                                        transform: "translateX(-4px)",
                                        transition: "all 0.3s",
                                    }}
                                >
                                    ›
                                </Box>
                            </Typography>

                            <Typography
                                sx={{
                                    fontFamily: "poppins",
                                    fontSize: { xs: "0.75rem", sm: "0.85rem" },
                                    color: isDark ? "white" : "black",
                                }}
                            >
                                B.Tech in Information Technology
                            </Typography>

                            <Typography
                                sx={{
                                    fontFamily: "poppins",
                                    fontSize: { xs: "0.75rem", sm: "0.85rem" },
                                    color: isDark ? "white" : "black",
                                }}
                            >
                                CGPA: 8.42
                            </Typography>

                        </Box>

                        <Typography
                            sx={{
                                fontFamily: "poppins",
                                fontSize: { xs: "0.75rem", sm: "0.85rem" },
                                color: isDark ? "white" : "black",
                                textAlign: "right",
                                flexShrink: 0,
                            }}
                        >
                            2021 – 2025
                        </Typography>
                    </CardContent>
                </Box>
            </Box>
        </Box>
    );
}