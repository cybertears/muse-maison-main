"use client"

import Image from "next/image"
import { useState } from "react"

interface PolaroidImageProps {
  src: string
  alt: string
  caption: string
  date: string
  className?: string
  aspectRatio?: "portrait" | "landscape" | "square"
  rotation?: number
}

export function PolaroidImage({
  src,
  alt,
  caption,
  date,
  className = "",
  aspectRatio = "portrait",
  rotation = 0,
}: PolaroidImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  // Determine dimensions based on aspect ratio
  let width = 300
  let height = 400

  if (aspectRatio === "landscape") {
    width = 400
    height = 300
  } else if (aspectRatio === "square") {
    width = 350
    height = 350
  }

  // Random slight rotation for a more natural look
  const actualRotation = rotation || Math.random() * 6 - 3

  return (
    <div className={`group relative ${className}`}>
      <div
        className="relative bg-white p-3 pb-12 shadow-md transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl"
        style={{
          transform: `rotate(${actualRotation}deg)`,
          transformOrigin: "center center",
        }}
      >
        <div className="overflow-hidden relative vintage-effect vignette">
          <div className="absolute inset-0 bg-black opacity-[0.03] mix-blend-multiply pointer-events-none z-10 film-grain-animation"></div>
          <div className={`relative ${!isLoaded ? "bg-neutral-100" : ""}`} style={{ aspectRatio: width / height }}>
            <Image
              src={src || "/placeholder.svg"}
              width={width}
              height={height}
              alt={alt}
              className={`object-cover transition-transform duration-500 group-hover:scale-105 ${isLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setIsLoaded(true)}
            />
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-neutral-300 border-t-[#FF0000] rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-4 left-0 w-full text-center">
          <p className="text-xs font-mono text-neutral-800">{caption}</p>
          <p className="text-xs font-mono text-neutral-500">{date}</p>
        </div>
      </div>
    </div>
  )
}
