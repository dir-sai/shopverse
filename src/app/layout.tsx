import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '../contexts/AuthContext'
import { CartProvider } from '../contexts/CartContext'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'ShopVerse - Modern E-commerce Store',
  description: 'Discover amazing products at ShopVerse. Your one-stop shop for electronics, fashion, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthProvider>
          <CartProvider>
            {children}
            <Toaster />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}