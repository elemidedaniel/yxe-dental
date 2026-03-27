/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal:    '#2a8c96',
        teal2:   '#3aabb6',
        teal3:   '#c4e2e4',
        navy:    '#1a2e3b',
        navy2:   '#243547',
        navy3:   '#0f1e28',
        sand:    '#f7f4ef',
        sand2:   '#edeae3',
        cream:   '#fdfcfa',
        muted:   '#6b7a8a',
        red:     '#c00000',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:    ['"Lato"', 'sans-serif'],
        script:  ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
