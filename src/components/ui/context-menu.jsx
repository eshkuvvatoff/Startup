"use client"

import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"
import { cn } from "@/lib/utils"

const ContextMenu = ContextMenuPrimitive.Root
const ContextMenuTrigger = ContextMenuPrimitive.Trigger
const ContextMenuGroup = ContextMenuPrimitive.Group
const ContextMenuPortal = ContextMenuPrimitive.Portal
const ContextMenuSub = ContextMenuPrimitive.Sub
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-lg px-3 py-2 text-sm text-foreground/80 outline-none focus:bg-brand-violet/10 dark:focus:bg-white/5 data-[state=open]:bg-brand-violet/10 dark:data-[state=open]:bg-white/5",
      className
    )}
    {...props}>
    {children}
    <ChevronRight className="ml-auto h-4 w-4 opacity-40" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

// TIL SUBSYSTEM: ORTIQCHA SOYASIZ VA SIGN UP BORDERI BILAN
const ContextMenuSubContent = React.forwardRef(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-[10000] min-w-[10rem] h-auto p-1.5 rounded-xl border border-brand-violet/40 dark:border-white/15 bg-white/95 dark:bg-[rgba(10,8,40,0.95)] backdrop-blur-2xl shadow-xl shadow-black/5 dark:shadow-black/30 animate-in fade-in zoom-in-95 duration-150",
      className
    )}
    {...props} />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

// ASOSIY PANEL: YUMSHOQ SOYA VA PREMIUM DISPLAY
const ContextMenuContent = React.forwardRef(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal> 
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-[9999] min-w-[16rem] h-auto p-2 rounded-xl border-2 border-brand-violet/40 dark:border-brand-textc/20 bg-white/95 dark:bg-[rgba(10,8,40,0.95)] backdrop-blur-2xl shadow-xl shadow-black/5 dark:shadow-black/30 animate-in fade-in zoom-in-95 duration-150",
        className
      )}
      {...props} />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-lg px-3 py-2 text-sm text-foreground/80 outline-none focus:bg-brand-violet/10 dark:focus:bg-white/5 data-[disabled]:pointer-events-none data-[disabled]:opacity-30",
      className
    )}
    {...props} />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

// TIL TANLASH RADIOSI (CHEF TARAFI MUKAMMAL, SKROLLSIZ)
const ContextMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground/80 outline-none focus:bg-brand-violet/10 dark:focus:bg-white/5 data-[disabled]:pointer-events-none data-[disabled]:opacity-30",
      className
    )}
    {...props}>
    <span>{children}</span>
    <ContextMenuPrimitive.ItemIndicator>
      <Circle className="h-2 w-2 fill-brand-violet text-brand-violet dark:fill-brand-cyan dark:text-brand-cyan shadow-[0_0_6px_#4CC9F0]" />
    </ContextMenuPrimitive.ItemIndicator>
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn("px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/50", className)}
    {...props} />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1.5 h-px bg-brand-violet/15 dark:bg-white/8", className)}
    {...props} />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({ className, ...props }) => {
  return (
    (<span
      className={cn("ml-auto text-[10px] font-mono tracking-widest text-muted-foreground/40", className)}
      {...props} />)
  );
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
