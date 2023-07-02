/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ['tailus.io','avatars.githubusercontent.com', 'lh3.googleusercontent.com'],   
    }
}

module.exports = nextConfig
