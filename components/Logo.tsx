'use client'

import Image from 'next/image'
import React from 'react'

type LogoProps = {
  className?: string
  priority?: boolean
  imageClassName?: string
}

export default function Logo({
  className = '',
  priority = false,
  imageClassName = 'h-10 mx-auto object-contain',
}: LogoProps) {
  return (
    <div className={`flex items-center w-[180px] h-[100px] overflow-hidden ${className}`}>
      <Image
        src="/images/classify-logo.png"
        alt="Classify Solutions"
        width={333}
        height={100}
        priority={priority}
        className={imageClassName}
      />
    </div>
  )
}

