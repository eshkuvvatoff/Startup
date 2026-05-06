"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import {
  BellIcon,
  ShoppingBagIcon,
  SettingsIcon,
  UserRoundIcon,
  SunIcon,
  MoonIcon,
  LogoutIcon
} from "@animateicons/react/lucide"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const profileImage = null

  // Hover uchun umumiy class
  const itemStyle = "flex flex-col items-center justify-center p-4 cursor-pointer rounded-md focus:bg-accent focus:text-accent-foreground"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/60 backdrop-blur-xl border-b border-border/40 px-8 py-4">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-saira-stencil text-2xl tracking-widest text-foreground cursor-pointer">
          Aletheia
        </h1>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notification */}
          <BellIcon
            size={24}
            className="rounded-full mt-2 text-foreground hover:bg-foreground/10 p-1 cursor-pointer transition-colors"
          />

          {/* Profile Dropdown */}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button className="h-11 w-11 overflow-hidden rounded-full ring-2 ring-border hover:ring-primary/40 transition cursor-pointer">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-red-500 via-pink-500 to-violet-500" />
                )}
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-44 p-2 border border-border shadow-lg">
              <div className="grid grid-cols-2 gap-2">
                <DropdownMenuItem className={itemStyle}>
                  <UserRoundIcon size={24} />
                </DropdownMenuItem>

                <DropdownMenuItem className={itemStyle}>
                  <ShoppingBagIcon size={24} />
                </DropdownMenuItem>

                <DropdownMenuItem className={itemStyle}>
                  <SettingsIcon size={24} />
                </DropdownMenuItem>

                <DropdownMenuItem
                  className={itemStyle}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <SunIcon size={24} />
                  ) : (
                    <MoonIcon size={24} />
                  )}
                </DropdownMenuItem>
              </div>

              <DropdownMenuSeparator className="my-2 bg-border" />

              <DropdownMenuItem
                variant="destructive"
                className="flex items-center justify-center p-2 cursor-pointer rounded-md outline-none"
              >
                <LogoutIcon size={20} className="mr-2" />
                <span className="font-medium">Log out</span>
              </DropdownMenuItem>


            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  )
}
