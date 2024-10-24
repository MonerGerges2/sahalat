module.exports = {
  content: ["./**/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        dark: '#333',
        light: '#f4f4f4',
      },
    },
  },
  darkMode: 'class', // تفعيل وضع الداكن بناءً على وجود class
  plugins: [],
}
