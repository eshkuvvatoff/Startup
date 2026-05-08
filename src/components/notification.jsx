"use client"
import React, { useRef, useEffect, useState } from 'react'
import { BellIcon } from "@animateicons/react/lucide";
import { Popover, PopoverContent, PopoverTrigger, PopoverClose } from "@/components/ui/popover"
import { X } from "lucide-react"
import Link from 'next/link';

export default function Notification() {
  const scrollRef = useRef(null);
  const velocity = useRef(0);
  const requestRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const applySmoothScroll = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop += velocity.current;
    velocity.current *= 0.85;

    if (Math.abs(velocity.current) > 0.1) {
      requestRef.current = requestAnimationFrame(applySmoothScroll);
    } else {
      requestRef.current = null;
    }
  };

  const handleInnerWheel = (e) => {
    e.stopPropagation();
    velocity.current += e.deltaY * 0.04;

    if (!requestRef.current) {
      requestRef.current = requestAnimationFrame(applySmoothScroll);
    }
  };


  const notifications = [
    { name: "Jordan P.", msg: "requested to follow", time: "2m", unread: true, initials: "JP", color: "from-[#6366f1] to-[#a855f7]" },
    { name: "Casey W.", msg: "commented on profile", time: "1h", unread: true, initials: "CW", color: "from-[#ec4899] to-[#f43f5e]" },
    { name: "Riley M.", msg: "started following", time: "3h", unread: false, initials: "RM", color: "from-[#0ea5e9] to-[#6366f1]" },
    { name: "Morgan L.", msg: "personality match", time: "5h", unread: false, initials: "ML", color: "from-[#10b981] to-[#0ea5e9]" },
    { name: "Jordan P.", msg: "requested to follow", time: "2m", unread: true, initials: "JP", color: "from-[#6366f1] to-[#a855f7]" },
    { name: "Casey W.", msg: "commented on profile", time: "1h", unread: true, initials: "CW", color: "from-[#ec4899] to-[#f43f5e]" },
    { name: "Riley M.", msg: "started following", time: "3h", unread: false, initials: "RM", color: "from-[#0ea5e9] to-[#6366f1]" },
  ];
 
  if (!mounted) return null;


  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <button className="relative cursor-pointer p-2 text-brand-indigo hover:text-brand-textc duration-400 transition-colors outline-none">
            <BellIcon size={22} />
            <span className="absolute top-2 right-2.5 h-1.5 w-1.5 rounded-full bg-brand-textc" />
          </button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          sideOffset={20}
          className="max-sm:-mr-16 w-80 max-sm:h-96 py-5 px-2 backdrop-blur-md border-b-2 border-border/40 bg-brand-indigo/20 dark:bg-brand-indigo/10 rounded-xl animate-in fade-in zoom-in-95 duration-200 shadow-[0_15px_30px_-10px_rgba(58,12,163,0.5),0_10px_10px_-15px_rgba(0,0,0,0.6)]"
          
        >
          <div className="flex justify-between items-center px-4 mb-2">
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] opacity-60 text-brand-textc">Notifications</h3>
            <PopoverClose className="cursor-pointer">
              <X size={16} className="text-brand-textc hover:text-purple-400 transition-colors" />
            </PopoverClose>
          </div>

          <div
            ref={scrollRef}
            onWheel={handleInnerWheel}
            className="max-h-[350px] overflow-y-auto scrollbar-hide overscroll-contain"
            data-lenis-prevent
          >
            {notifications.map((item, i) => (
              <div key={i} className="group relative flex items-center px-4 gap-4 py-3 w-full hover:bg-brand-rose/40 rounded-xl active:scale-[0.98] transition-all duration-200 cursor-pointer border-b border-white/3 last:border-0">
                <div className="relative shrink-0">
                  <div className={`h-10 w-10 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-lg ring-1 ring-white/20 overflow-hidden`}>
                    <span className="text-[11px] font-black text-white uppercase">{item.initials}</span>
                  </div>
                  {item.unread && (
                    <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary border-2 border-brand-indigo"></span>
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="text-[13px] font-semibold text-brand-indigo dark:text-brand-textc group-hover:text-white/90 transition-colors truncate pr-8">
                      {item.name}
                    </span>
                    <span className="text-[10px] absolute right-4 text-brand-textc/50 font-mono">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-[12px] dark:text-brand-textc/80 text-brand-indigo/80 leading-tight truncate font-light">
                    {item.msg}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/notifications" className="block w-full">
            <button className="w-full cursor-pointer pt-3 mt-2 px-4 border-t border-white/5 text-[11px] font-bold text-brand-textc hover:text-purple-400 transition-colors text-left uppercase tracking-widest">
              VIEW ALL
            </button>
          </Link>
        </PopoverContent>
      </Popover>
    </div>
  )
}
