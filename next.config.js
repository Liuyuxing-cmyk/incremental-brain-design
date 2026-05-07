/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // 支持静态导出（可选，用于纯静态部署）
  // output: 'export',
}

module.exports = nextConfig
