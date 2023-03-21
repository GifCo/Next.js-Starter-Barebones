import './globals.css'

export const metadata = {
  title: "GifCo's Next.js Starter",
  description: 'A barebones Next.js starter using the new App dir as well as TailwindCSS and Daisey UI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
