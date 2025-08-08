'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-white shadow">
      <nav className="max-w-5xl mx-auto flex justify-between items-center px-4 py-4">
        <Link href="/" className="text-xl font-bold">Saulo</Link>
        <ul className="flex gap-6">
          <li><Link className={pathname === '/' ? 'font-bold text-blue-600' : ''} href="/">Home</Link></li>
          <li><Link className={pathname === '/projetos' ? 'font-bold text-blue-600' : ''} href="/projetos">Projetos</Link></li>
          <li><Link className={pathname === '/contato' ? 'font-bold text-blue-600' : ''} href="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}
