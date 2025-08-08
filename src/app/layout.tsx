import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Saulo Esteves | Portfólio',
  description: 'Desenvolvedor Fullstack | React, Node, JavaScript',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main className="min-h-screen px-4 py-8 max-w-5xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
