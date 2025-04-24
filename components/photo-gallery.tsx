"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface Photo {
  src: string
  alt: string
  width: number
  height: number
}

interface PhotoGalleryProps {
  photos: Photo[]
  columns?: number
}

export function PhotoGallery({ photos, columns = 3 }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  return (
    <div className="w-full">
      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-4`}>
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden cursor-pointer group vintage-effect"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="absolute inset-0 bg-black opacity-[0.03] mix-blend-multiply pointer-events-none z-10 film-grain-animation"></div>
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-[#FF0000] transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="h-8 w-8" />
            <span className="sr-only">Close</span>
          </button>
          <div className="relative max-w-4xl max-h-[90vh]">
            <Image
              src={selectedPhoto.src || "/placeholder.svg"}
              alt={selectedPhoto.alt}
              width={selectedPhoto.width}
              height={selectedPhoto.height}
              className="max-h-[90vh] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}
