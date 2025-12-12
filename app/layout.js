import './globals.css'

export const metadata = {
  title: 'Chat with Salil Shahane',
  description: 'AI-powered portfolio assistant',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}