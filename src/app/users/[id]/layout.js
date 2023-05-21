export const metadata = {
  title: 'Users page title',
  description: 'Generated custom',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
