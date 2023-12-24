/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: 
        [
            'firebasestorage.googleapis.com',
            'google.com',
            'www.google.com',
            'media.vneconomy.vn',
             'lh3.googleusercontent.com'
        ],
      
    },
    reactStrictMode: false
}

module.exports = nextConfig;
