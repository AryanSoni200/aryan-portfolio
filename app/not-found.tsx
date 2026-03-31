"use client"

import { Box, Typography, Button, useTheme } from "@mui/material"
import { motion } from "framer-motion"
import Link from "next/link"

export default function NotFound() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h1" fontWeight="bold" sx={{ mb: 2, fontSize: { xs: "4rem", md: "8rem" }, letterSpacing: "tight" }}>
          404
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: "500", opacity: 0.8, maxWidth: "600px" }}>
          Oops! The page is not found.
        </Typography>
        <Button 
          component={Link}
          href="/"
          variant="contained" 
          size="large"
          sx={{ 
            borderRadius: "50px", 
            px: 4, 
            py: 1.5, 
            textTransform: "none", 
            fontSize: "1.1rem",
            bgcolor: isDark ? "white" : "black",
            color: isDark ? "black" : "white",
            "&:hover": {
              bgcolor: isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)",
            }
          }}
        >
           Portfolio
        </Button>
      </motion.div>
    </Box>
  )
}