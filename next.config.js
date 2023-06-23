/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ['tailus.io'],   
    }
}

module.exports = nextConfig
