import './globals.css'

export const metadata = {
  title: 'ZLYFT VTOL Drone Delivery',
  description: 'Futuristic autonomous drone delivery solution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth bg-black text-white">
      <body>{children}</body>
    </html>
  )
}
