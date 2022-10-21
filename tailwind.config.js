/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover' : 'cover',
      'contain' : 'contain',
      '50%' : '50%',
    '16' : '4rem'
    },
    extend: {
      backgroundImage: {
        'history-image': "url('https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg')",

      }
    },

  },
  plugins: [],
}
