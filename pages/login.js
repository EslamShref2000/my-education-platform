import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // تنفيذ عملية تسجيل الدخول
  }

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </label>
          <button type="submit" className="bg-primary text-white p-2 rounded">Login</button>
        </form>
      </main>
      <Footer />
    </>
  )
}
