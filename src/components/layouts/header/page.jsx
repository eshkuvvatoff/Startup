"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import {
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
import Notification from "@/components/notification";
import Link from "next/link"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)


  useEffect(() => {
    setMounted(true)
  }, [])


  const profileImage = null

  const itemStyle = "group flex flex-col items-center justify-center p-4 cursor-pointer rounded-md transition-all duration-200 hover:bg-primary/10 outline-none"







  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full bg-brand-indigo/25 dark:bg-brand-indigo/10 backdrop-blur-md border-b border-white/10 px-8 py-4 shadow-[0_15px_30px_-10px_rgba(58,12,163,0.5),0_10px_10px_-15px_rgba(0,0,0,0.6)]"
    >




      <nav className="flex items-center justify-between">
        <Link href={"/"} >
          <h1 className="font-saira-stencil text-2xl tracking-widest text-foreground cursor-pointer">
            Aletheia
          </h1>
        </Link>

        <div className="flex items-center gap-4">

          <Notification />

          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button className="h-11 w-11 overflow-hidden rounded-full ring-2 ring-border hover:ring-primary/40 transition cursor-pointer">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full bg-linear-to-br from-red-500 via-pink-500 to-violet-500" />
                )}
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              sideOffset={12}
              className="w-44 p-2 border-b-2 border-border/40 bg-brand-indigo/20 dark:bg-brand-indigo/10 mt-4 backdrop-blur-md shadow-[0_15px_30px_-10px_rgba(58,12,163,0.5),0_10px_5px_-15px_rgba(0,0,0,0.6)]"
            >





              <div className="grid grid-cols-2 gap-2">
                <DropdownMenuItem className={itemStyle}>
                  <UserRoundIcon size={24} className="transition-colors duration-200 group-hover:text-white text-brand-indigo" />
                </DropdownMenuItem>
                <DropdownMenuItem className={itemStyle}>
                  <ShoppingBagIcon size={24} className="transition-colors duration-200 group-hover:text-white text-brand-indigo" />
                </DropdownMenuItem>
                <DropdownMenuItem className={itemStyle}>
                  <SettingsIcon size={24} className="transition-colors duration-200 group-hover:text-white text-brand-indigo" />
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={itemStyle}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {mounted ? theme === "dark" ? (
                    <SunIcon size={24} className="text-yellow-400" />
                  ) : (
                    <MoonIcon size={24} className="transition-colors duration-200 group-hover:text-white text-brand-indigo" />
                  ) : <div>notmounted</div>}
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator className="my-2 bg-border" />
              <DropdownMenuItem
                variant="destructive"
                className="flex items-center justify-center p-2 cursor-pointer bg-red-500/10 rounded-md outline-none"
              >
                <LogoutIcon size={20} className="mr-2" />
                <span className="font-medium">Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header >
  )
}
