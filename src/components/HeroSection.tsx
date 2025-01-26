import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={'/Asset/hero-image.jpeg'}
        layout="fill"
        objectFit="cover"
        alt="hero"
        className="z-0 dark:opacity-50"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
        <h1 className="text-4xl font-bold">Welcome to Our Blog</h1>
        <p className="text-xl mt-4">Discover the latest insights and stories</p>
      </div>
    </div>
  )
}

export default HeroSection
