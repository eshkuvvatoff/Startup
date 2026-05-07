import React from 'react'
import { useRef } from 'react';
import { BellIcon } from "@animateicons/react/lucide";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverClose,
} from "@/components/ui/popover"

import { X } from "lucide-react"
export default function Notification() {


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

        velocity.current += e.deltaY * 0.01;

        if (!requestRef.current) {
            requestRef.current = requestAnimationFrame(applySmoothScroll);
        }
    };

    const scrollRef = useRef(null);
    const velocity = useRef(0);
    const requestRef = useRef(null);

    const notifications = [
        { name: "Jordan P.", msg: "requested to follow", time: "2m", unread: true, initials: "JP", color: "from-[#6366f1] to-[#a855f7]" },
        { name: "Casey W.", msg: "commented on profile", time: "1h", unread: true, initials: "CW", color: "from-[#ec4899] to-[#f43f5e]" },
        { name: "Riley M.", msg: "started following", time: "3h", unread: false, initials: "RM", color: "from-[#0ea5e9] to-[#6366f1]" },
        { name: "Riley M.", msg: "started following", time: "3h", unread: false, initials: "RM", color: "from-[#0ea5e9] to-[#6366f1]" },
        { name: "Riley M.", msg: "started following", time: "3h", unread: false, initials: "RM", color: "from-[#0ea5e9] to-[#6366f1]" },
        { name: "Riley M.", msg: "started following", time: "3h", unread: false, initials: "RM", color: "from-[#0ea5e9] to-[#6366f1]" },
        { name: "Morgan L.", msg: "personality match", time: "5h", unread: false, initials: "ML", color: "from-[#10b981] to-[#0ea5e9]" },
        { name: "Riley M.", msg: "started following", time: "3h", unread: false, initials: "RM", color: "from-[#0ea5e9] to-[#6366f1]" },
        { name: "Riley M.", msg: "started following", time: "3h", unread: false, initials: "RM", color: "from-[#0ea5e9] to-[#6366f1]" },
        { name: "Riley M.", msg: "started following", time: "3h", unread: false, initials: "RM", color: "from-[#0ea5e9] to-[#6366f1]" },
        { name: "Morgan L.", msg: "personality match", time: "5h", unread: false, initials: "ML", color: "from-[#10b981] to-[#0ea5e9]" },
        { name: "Riley M.", msg: "started following", time: "3h", unread: false, initials: "RM", color: "from-[#0ea5e9] to-[#6366f1]" },
        { name: "Riley M.", msg: "started following", time: "3h", unread: false, initials: "RM", color: "from-[#0ea5e9] to-[#6366f1]" },
        { name: "Riley M.", msg: "started following", time: "3h", unread: false, initials: "RM", color: "from-[#0ea5e9] to-[#6366f1]" },
        { name: "Morgan L.", msg: "personality match", time: "5h", unread: false, initials: "ML", color: "from-[#10b981] to-[#0ea5e9]" },
        { name: "Riley M.", msg: "started following", time: "3h", unread: false, initials: "RM", color: "from-[#0ea5e9] to-[#6366f1]" },
        { name: "Riley M.", msg: "started following", time: "3h", unread: false, initials: "RM", color: "from-[#0ea5e9] to-[#6366f1]" },
        { name: "Riley M.", msg: "started following", time: "3h", unread: false, initials: "RM", color: "from-[#0ea5e9] to-[#6366f1]" },
        { name: "Morgan L.", msg: "personality match", time: "5h", unread: false, initials: "ML", color: "from-[#10b981] to-[#0ea5e9]" },
    ]

    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <button className="relative cursor-pointer p-2 text-brand-indigo transition-colors outline-none">
                        <BellIcon size={22} />
                        <span className="absolute top-2 right-2.5 h-1.5 w-1.5 rounded-full bg-[#a855f7]" />
                    </button>
                </PopoverTrigger>

                <PopoverContent
                    align="end"
                    sideOffset={30}
                    className="w-80 py-5 px-2 backdrop-blur-md border-b-2 border-border/40 bg-brand-indigo/20 dark:bg-brand-indigo/10 rounded-xl animate-in fade-in zoom-in-95 duration-200 shadow-[0_15px_30px_-10px_rgba(58,12,163,0.5),0_10px_10px_-15px_rgba(0,0,0,0.6)]"
                >
                    <div className="flex justify-between items-center px-2 mb-0.5">
                        <h3 className="text-[11px] font-black uppercase tracking-[0.2em] opacity-60 text-brand-textc dark:hover:text-purple-400 hover:text-purple-800 cursor-pointer">Notifications</h3>
                        <PopoverClose className="cursor-pointer">
                            <X size={16} className="text-brand-textc dark:hover:text-purple-400 hover:text-purple-800" />
                        </PopoverClose>
                    </div>

                    <div
                        ref={scrollRef}
                        onWheel={handleInnerWheel}
                        className="max-h-[300px] overflow-y-auto scrollbar-hide overscroll-contain"
                        data-lenis-prevent
                    >
                        {notifications.map((item, i) => (
                            <div
                                key={i}
                                className="group relative flex items-center px-3 gap-4 py-3 w-74 hover:bg-brand-rose/40 rounded-xl active:scale-[0.98] transition-all duration-200 cursor-pointer border-b border-white/[0.03] last:border-0"
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
                                        <span className="text-[13px] font-semibold text-brand-indigo dark:text-brand-textc tracking-wide truncate group-hover:text-white/90 transition-colors duration-300">
                                            {item.name}
                                        </span>
                                        <span className="text-[15px] font-black absolute right-2 bottom-3 text-brand-textc/50 font-mono tracking-tighter">
                                            {item.time}
                                        </span>
                                    </div>
                                    <p className="text-[12px] dark:text-brand-textc text-brand-indigo leading-tight truncate font-light">
                                        {item.msg}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* FIXED FOOTER - YOUR EXACT STYLE */}
                    <button className="w-full  cursor-pointer pt-1 px-2 border-t border-white/5 text-[11px] font-bold text-brand-textc dark:hover:text-purple-400 hover:text-purple-800 transition-colors text-left uppercase tracking-widest">
                        VIEW ALL
                    </button>
                </PopoverContent>


            </Popover>
        </div>
    )
}
