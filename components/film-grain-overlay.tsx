"use client"

import { useEffect, useState } from "react"

export function FilmGrainOverlay() {
  const [opacity, setOpacity] = useState(0)

  // Fade in the grain effect after component mounts to avoid flash of full opacity
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0.05) // Subtle opacity for the grain effect
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] mix-blend-multiply"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        transition: "opacity 1s ease-in-out",
      }}
      aria-hidden="true"
    />
  )
}
