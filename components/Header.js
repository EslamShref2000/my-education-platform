import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-primary text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">Home</Link>
        <div>
          <Link href="/login">Login</Link>
        </div>
      </nav>
    </header>
  )
}
