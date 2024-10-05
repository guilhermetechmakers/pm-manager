"use client"

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { supabase } from '@/lib/supabase'

const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    { href: '/', label: 'Dashboard' },
    { href: '/projects', label: 'Projects' },
    { href: '/teams', label: 'Teams' },
    { href: '/employees', label: 'Employees' },
    { href: '/settings', label: 'Settings' },
  ]

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/auth')
  }

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              PM App
            </Link>
          </div>
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.href}
                asChild
                variant={pathname === item.href ? "default" : "ghost"}
              >
                <Link href={item.href}>
                  {item.label}
                </Link>
              </Button>
            ))}
            <Button onClick={handleSignOut} variant="outline">Sign Out</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar