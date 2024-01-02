/** @type {import('next').NextConfig} */
const withVideos = require('next-videos');
const { config } = require('process');

const nextConfig = {images: {
    domains: [
        "img.etimg.com",
        "assets.vogue.com",
        "m.media-amazon.com",
        "upload.wikimedia.org",
        "media1.tenor.com"
    ]
}}; // Your current Next Config object
module.exports = withVideos(nextConfig)