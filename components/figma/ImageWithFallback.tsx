import React, { useState } from 'react'
import { getRandomFallbackImage, isValidImageUrl, createImagePlaceholder, tryUnsplashFallback } from '../../lib/image-utils'

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  lazy?: boolean;
  category?: 'food' | 'cafe';
}

export function ImageWithFallback({ 
  src, 
  alt, 
  style, 
  className, 
  fallbackSrc,
  lazy = true,
  category = 'food',
  ...rest 
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [currentSrc, setCurrentSrc] = useState(src)
  const [retryCount, setRetryCount] = useState(0)

  // Determinar la imagen de respaldo en cascada
  const getFallbackImage = () => {
    if (fallbackSrc) return fallbackSrc;
    
    // Primero intentar con placeholder SVG (más confiable)
    if (category) return getRandomFallbackImage(category);
    
    return createImagePlaceholder(400, 400, 'Imagen no disponible');
  };

  const handleError = () => {
    if (!didError && retryCount === 0) {
      // Primer intento: usar placeholder SVG confiable
      console.warn(`Failed to load image: ${currentSrc}, using SVG placeholder`)
      setCurrentSrc(getFallbackImage())
      setRetryCount(1)
      setIsLoading(true)
      return
    }
    
    if (!didError) {
      console.warn(`All fallbacks failed for: ${src}`)
      setDidError(true)
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  // Validar la URL de la imagen
  const isValidSrc = src && isValidImageUrl(src);

  if (didError || !isValidSrc) {
    return (
      <div
        className={`image-placeholder-error ${className ?? ''}`}
        style={style}
      >
        <div className="text-center p-4">
          <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-sm text-gray-500">Imagen no disponible</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {isLoading && (
        <div
          className={`image-placeholder-loading ${className ?? ''}`}
          style={style}
        />
      )}
      <img 
        src={currentSrc} 
        alt={alt} 
        className={`${className ?? ''} ImageWithFallback ${isLoading ? 'hidden' : ''}`}
        style={{ 
          opacity: isLoading ? 0 : 1,
          visibility: isLoading ? 'hidden' : 'visible',
          ...style
        }} 
        loading={lazy ? 'lazy' : 'eager'}
        {...rest} 
        onError={handleError}
        onLoad={handleLoad}
      />
    </>
  )
}
