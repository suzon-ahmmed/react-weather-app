module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    extend: {
      backgroundImage: {
        Haze: "url('/src/assets/img/haze.jpg')",
        Clouds: "url('/src/assets/img/Clouds.jpg')",
        clearSky: "url('/src/assets/img/clear-sky.jpg')",
        brokenClouds: "url('/src/assets/img/Broken-Clouds.jpg')",
        brizzle: "url('/src/assets/img/Drizzle.jpg')",
        rain: "url('/src/assets/img/rain.jpg')",
        snow: "url('/src/assets/img/snow.jpg')",
        Thunderstorm : "url('/src/assets/img/Thunderstorm .jpg')",
        default : "url('/src/assets/img/default.jpg')",
      },
      keyframes: {
        shake: {
          '0%': {
            transform: 'translate(3px, 0)',
          },
          '50%': {
            transform: 'translate(-3px, 0)',
          },
          '100%': {
            transform: 'translate(0, 0)',
          },
        },
      },
      animation: {
        shake: 'shake 150ms 2 linear',
      },
    },
  },
  plugins: [],
};