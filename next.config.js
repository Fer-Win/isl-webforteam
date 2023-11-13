/** @type {import('next').NextConfig} */
const nextConfig = {
  withGoogleFonts: ({
    googleFonts:{
      fonts:[
        {family:'Familjen Grotesk'}
      ]
    }
  }),
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
