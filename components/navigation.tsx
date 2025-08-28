"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, Briefcase, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Achievements", href: "/achievements", icon: Trophy },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-transparent border-b border-opacity-20"
      style={{ borderColor: "rgba(65, 100, 74, 0.2)" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/pixel-art.png"
              alt="Aymen - Developer Logo"
              className="w-10 h-10 hover:scale-110 transition-transform duration-200"
              style={{ imageRendering: "pixelated" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => {
              const IconComponent = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-1 text-sm font-medium transition-colors hover:opacity-80",
                    pathname === item.href ? "opacity-100" : "opacity-70",
                  )}
                  style={{ color: "#000000" }}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-opacity-20">
                  <Menu className="h-5 w-5" style={{ color: "#000000" }} />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="backdrop-blur-md border-l"
                style={{
                  backgroundColor: "rgba(241, 240, 233, 0.95)",
                  borderColor: "rgba(65, 100, 74, 0.3)",
                }}
              >
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => {
                    const IconComponent = item.icon
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "flex items-center space-x-2 text-sm font-medium transition-colors hover:opacity-80 p-2 rounded-md",
                          pathname === item.href ? "opacity-100" : "opacity-70",
                        )}
                        style={{
                          color: "#000000",
                          backgroundColor: pathname === item.href ? "rgba(233, 118, 43, 0.1)" : "transparent",
                        }}
                      >
                        <IconComponent className="h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    )
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
