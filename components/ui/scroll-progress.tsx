"use client"

import * as React from "react"
import { motion, useScroll, type MotionProps } from "motion/react"
import { useTheme } from "@mui/material/styles"

import { cn } from "@/lib/utils"

interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  ref?: React.Ref<HTMLDivElement>
}

export function ScrollProgress({
  className,
  ref,
  ...props
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  const theme = useTheme()

  const isDark = theme.palette.mode === "dark"

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[2px] origin-left",
        className
      )}
      style={{
        scaleX: scrollYProgress,
        background: isDark ? "#ffffff" : "#000000",
      }}
      {...props}
    />
  )
}