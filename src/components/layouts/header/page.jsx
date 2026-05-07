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
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

// import {  } from "@/components/ui/popover"
import { X } from "lucide-react"
// import SmoothScroll from "@/components/smooth-scroll"

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

  const notifications = [
    { name: "Jordan P.", msg: "requested to follow", time: "2m", unread: true, initials: "JP", color: "from-[#6366f1] to-[#a855f7]" },
    { name: "Casey W.", msg: "commented on profile", time: "1h", unread: true, initials: "CW", color: "from-[#ec4899] to-[#f43f5e]" },
    { name: "Riley M.", msg: "started following", time: "3h", unread: false, initials: "RM", color: "from-[#0ea5e9] to-[#6366f1]" },
    { name: "Riley M.", msg: "started following", time: "3h", unread: false, initials: "RM", color: "from-[#0ea5e9] to-[#6366f1]" },
    { name: "Riley M.", msg: "started following", time: "3h", unread: false, initials: "RM", color: "from-[#0ea5e9] to-[#6366f1]" },
    { name: "Riley M.", msg: "started following", time: "3h", unread: false, initials: "RM", color: "from-[#0ea5e9] to-[#6366f1]" },
    { name: "Morgan L.", msg: "personality match", time: "5h", unread: false, initials: "ML", color: "from-[#10b981] to-[#0ea5e9]" },
  ]

  return (
    <header data-lenis-prevent className="fixed top-0 left-0 right-0 z-50 w-full bg-background/60 backdrop-blur-md border-b-2 border-border/40 px-8 py-4">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-saira-stencil text-2xl tracking-widest text-foreground cursor-pointer">
          Aletheia
        </h1>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notification */}

          <Popover>
            <PopoverTrigger asChild>
              <button className="relative cursor-pointer p-2 text-foreground/60 hover:text-foreground transition-colors outline-none">
                <BellIcon size={22} />
                <span className="absolute top-2 right-2.5 h-1.5 w-1.5 rounded-full bg-[#a855f7]" />
              </button>
            </PopoverTrigger>

            <PopoverContent
              align="end"
              sideOffset={15}
              className="w-80 p-5 bg-background/60 backdrop-blur-md border-b-2 border-border/40  rounded-xl shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            >
              {/* FIXED HEADER */}
              <div className="flex justify-between items-center mb-0.5">
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] opacity-60 text-[#a855f7] hover:text-purple-400 dark:text-[#a855f7] cursor-pointer">Notifications</h3>
                <PopoverClose className="opacity-20 cursor-pointer hover:opacity-100 transition-opacity">
                  <X size={16} className="text-white" />
                </PopoverClose>
              </div>

              {/* SCROLLABLE DATA STREAM */}
              <div className="max-h-[350px] overflow-y-auto scrollbar-hide" data-lenis-prevent>
                {/* <SmoothScroll /> */}
                {notifications.map((item, i) => (
                  <div
                    key={i}
                    className="group relative flex items-center gap-4 px-2 py-3 hover:bg-white/[0.03] active:scale-[0.98] transition-all duration-200 cursor-pointer border-b border-white/[0.03] last:border-0"
                  >
                    {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/10 to-transparent transition-opacity pointer-events-none" /> */}

                    <div className="relative shrink-0">
                      <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg ring-1 ring-white/20 overflow-hidden`}>
                        <span className="text-[11px] font-black tracking-tighter text-white uppercase">{item.initials}</span>
                      </div>
                      {item.unread && (
                        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary border-2 border-[#020627]"></span>
                        </span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0 z-10">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[13px] font-semibold text-white tracking-wide truncate group-hover:text-primary transition-colors">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-white/30 font-mono tracking-tighter">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-[12px] text-white/40 leading-tight truncate font-light">
                        {item.msg}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FIXED FOOTER - YOUR EXACT STYLE */}
              <button className="w-full mt-4 cursor-pointer pt-4 border-t border-white/5 text-[11px] font-bold text-[#a855f7] hover:text-purple-400 transition-colors text-left uppercase tracking-widest">
                VIEW ALL
              </button>
            </PopoverContent>


          </Popover>



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
