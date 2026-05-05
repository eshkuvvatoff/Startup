"use client";

import { 
  Bell, 
  CreditCard, 
  LogOut, 
  Settings, 
  User, 
  ShoppingBag, 
  Sun, 
  Moon 
} from "lucide-react" 
import { Button } from "@/components/ui/button" 
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu" 
import { useTheme } from "next-themes"; 

export default function Header() { 
  const { theme, setTheme } = useTheme() 
  const profileImage = "/profileImage.jpg" 

  return ( 
    <header className="border-b border-white/10 bg-[#020627] px-8 py-4"> 
      <nav className="flex items-center justify-between"> 
        <h1 className="font-saira-stencil text-2xl tracking-widest text-white cursor-pointer">
          Aletheia
        </h1> 

        <div className="flex items-center gap-3"> 
          <Button size="icon" variant="ghost" className="rounded-full text-white hover:bg-white/10"> 
            <Bell className="h-5 w-5" /> 
          </Button> 

          <DropdownMenu> 
            <DropdownMenuTrigger asChild> 
              <button className="h-11 w-11 overflow-hidden rounded-full ring-2 ring-white/10 transition hover:ring-white/30"> 
                <img src={profileImage} alt="Profile" className="h-full w-full object-cover" /> 
              </button> 
            </DropdownMenuTrigger> 
            
            <DropdownMenuContent align="end" className="w-48 border-white/10 bg-[#0a1035] text-white"> 
              <DropdownMenuItem className="cursor-pointer"> 
                <User className="mr-2 h-4 w-4" /> Profile 
              </DropdownMenuItem> 
              
              <DropdownMenuItem className="cursor-pointer"> 
                <ShoppingBag className="mr-2 h-4 w-4" /> Shop 
              </DropdownMenuItem> 
              
              <DropdownMenuItem className="cursor-pointer"> 
                <Settings className="mr-2 h-4 w-4" /> Settings 
              </DropdownMenuItem> 

              <DropdownMenuItem 
                className="cursor-pointer"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              > 
                {theme === "dark" ? (
                  <><Sun className="mr-2 h-4 w-4" /> Light Mode</>
                ) : (
                  <><Moon className="mr-2 h-4 w-4" /> Dark Mode</>
                )}
              </DropdownMenuItem> 

              <DropdownMenuSeparator className="bg-white/10" /> 
              
              <DropdownMenuItem className="text-red-400 cursor-pointer"> 
                <LogOut className="mr-2 h-4 w-4" /> Logout 
              </DropdownMenuItem> 
            </DropdownMenuContent> 
          </DropdownMenu> 
        </div> 
      </nav> 
    </header> 
  ) 
}
