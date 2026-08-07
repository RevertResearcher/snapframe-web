/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    // next akan menyediakan AVIF/WebP ketika memungkinkan
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 420, 768, 1024, 1200, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  }
}

export default nextConfig
