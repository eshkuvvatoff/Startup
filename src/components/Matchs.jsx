import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"


export default function Matchs() {
  return (
    <div className='pt-30'>
      <div className='pl-12'>
        <h2 className='text-[28px]'>Discovery Hub</h2>
        <p className='text-[15px] text-gray-400'>Find your perfect match</p>
      </div>


    {/* <marquee> */}
      <div className='flex gap-2 justify-around pt-10'>
        <div className="flex flex-col w-[380px] gap-8 p-5 border border-white/10 rounded-xl bg-[#0a1035]">
          {/* Top: Avatar and Username */}
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full bg-white/10" />
            <Skeleton className="h-4 w-24 bg-white/10" />
          </div>

          {/* Bottom: Type Percentages */}
          <div className="flex gap-6">
            {/* Anime Type */}
            <div className="flex flex-col  gap-2">
              <Skeleton className="h-3 w-16 bg-white/10" />
              <Skeleton className="h-2 w-20 rounded-full bg-white/10" />
            </div>
            {/* Film Type */}
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-14 bg-white/10" />
              <Skeleton className="h-2 w-20 rounded-full bg-white/10" />
            </div>
            {/* Music Type */}
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-18 bg-white/10" />
              <Skeleton className="h-2 w-20 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[380px] gap-8 p-5 border border-white/10 rounded-xl bg-[#0a1035]">
          {/* Top: Avatar and Username */}
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full bg-white/10" />
            <Skeleton className="h-4 w-24 bg-white/10" />
          </div>

          {/* Bottom: Type Percentages */}
          <div className="flex gap-6">
            {/* Anime Type */}
            <div className="flex flex-col  gap-2">
              <Skeleton className="h-3 w-16 bg-white/10" />
              <Skeleton className="h-2 w-20 rounded-full bg-white/10" />
            </div>
            {/* Film Type */}
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-14 bg-white/10" />
              <Skeleton className="h-2 w-20 rounded-full bg-white/10" />
            </div>
            {/* Music Type */}
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-18 bg-white/10" />
              <Skeleton className="h-2 w-20 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[380px] gap-8 p-5 border border-white/10 rounded-xl bg-[#0a1035]">
          {/* Top: Avatar and Username */}
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full bg-white/10" />
            <Skeleton className="h-4 w-24 bg-white/10" />
          </div>

          {/* Bottom: Type Percentages */}
          <div className="flex gap-6">
            {/* Anime Type */}
            <div className="flex flex-col  gap-2">
              <Skeleton className="h-3 w-16 bg-white/10" />
              <Skeleton className="h-2 w-20 rounded-full bg-white/10" />
            </div>
            {/* Film Type */}
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-14 bg-white/10" />
              <Skeleton className="h-2 w-20 rounded-full bg-white/10" />
            </div>
            {/* Music Type */}
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-18 bg-white/10" />
              <Skeleton className="h-2 w-20 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[380px] gap-8 p-5 border border-white/10 rounded-xl bg-[#0a1035]">
          {/* Top: Avatar and Username */}
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full bg-white/10" />
            <Skeleton className="h-4 w-24 bg-white/10" />
          </div>

          {/* Bottom: Type Percentages */}
          <div className="flex gap-6">
            {/* Anime Type */}
            <div className="flex flex-col  gap-2">
              <Skeleton className="h-3 w-16 bg-white/10" />
              <Skeleton className="h-2 w-20 rounded-full bg-white/10" />
            </div>
            {/* Film Type */}
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-14 bg-white/10" />
              <Skeleton className="h-2 w-20 rounded-full bg-white/10" />
            </div>
            {/* Music Type */}
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-18 bg-white/10" />
              <Skeleton className="h-2 w-20 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </div>
      {/* </marquee> */}
    </div>
  )
}
