"use client";

import { useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CastIcon,
  LanguagesIcon,
  RotateCwIcon,
  ScanSearchIcon,
} from "lucide-react";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useLocale } from "@/contexts/locale-context";
import { useHistoryNavigation } from "@/hooks/use-history-navigation";
import { castThisTab, searchWithGoogleLens } from "@/lib/context-menu-actions";
import { cn } from "@/lib/utils";

const panel =
  "flex w-64 flex-col gap-1 rounded-xl border-b-2  bg-brand-violet/18 p-3 shadow-[0_5px_30px_-10px_rgba(58,12,163,0.5),0_10px_10px_-30px_rgba(0,0,0,0.6)] backdrop-blur-sm dark:bg-brand-indigo/10 animate-in fade-in zoom-in-95 duration-200 ring-0 h-auto z-[9999]";

const subPanel =
  "w-48 rounded-xl border-b-2 bg-brand-indigo/20 p-2 shadow-[0_6px_30px_-10px_rgba(58,12,163,0.5),0_10px_10px_-30px_rgba(0,0,0,0.6)] backdrop-blur-sm dark:bg-brand-indigo/20 ring-0 h-auto z-[10000]";

const item =
  "flex h-10 w-full items-center gap-3 rounded-lg px-3 text-sm text-foreground outline-none cursor-pointer transition-colors hover:bg-brand-rose focus:bg-brand-rose/40 data-disabled:opacity-40 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-brand-textc";

const shortcut = "ml-auto text-[11px] font-mono text-brand-textc/50";

const NATIVE_ONLY_SELECTOR = "input, textarea, select, [contenteditable=true]";

export default function ContextMenuComponent({ children }) {
  const { locale, setLocale, t } = useLocale();
  const { canBack, canForward, back, forward, reload } = useHistoryNavigation();
  const [open, setOpen] = useState(false);

  const handleContextMenu = (event) => {
    const target = event.target;
    if (target instanceof Element && target.closest(NATIVE_ONLY_SELECTOR)) {
      event.stopPropagation();
    }
  };

  return (
    <ContextMenu open={open} onOpenChange={setOpen} modal={false}>
      <ContextMenuTrigger asChild onContextMenu={handleContextMenu}>
        <div className="w-full min-h-screen">
          {children}
        </div>
      </ContextMenuTrigger>

      <ContextMenuContent className={panel} data-lenis-prevent>
        <ContextMenuLabel className="mb-2 px-1 text-[11px] font-black uppercase tracking-[0.2em] text-brand-textc opacity-60">
          Persona
        </ContextMenuLabel>

        <div className="flex flex-col gap-0.5">
          <ContextMenuItem className={item} disabled={!canBack} onSelect={() => back()}>
            <ArrowLeftIcon />
            <span className="flex-1 truncate">{t.back}</span>
            <ContextMenuShortcut className={shortcut}>⌘[</ContextMenuShortcut>
          </ContextMenuItem>

          <ContextMenuItem className={item} disabled={!canForward} onSelect={() => forward()}>
            <ArrowRightIcon />
            <span className="flex-1 truncate">{t.forward}</span>
            <ContextMenuShortcut className={shortcut}>⌘]</ContextMenuShortcut>
          </ContextMenuItem>

          <ContextMenuItem className={item} onSelect={() => reload()}>
            <RotateCwIcon />
            <span className="flex-1 truncate">{t.reload}</span>
            <ContextMenuShortcut className={shortcut}>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
        </div>

        <ContextMenuSeparator className="my-2 h-px bg-white/10" />

        <div className="flex flex-col gap-0.5">
          <ContextMenuItem className={item} onSelect={() => searchWithGoogleLens()}>
            <ScanSearchIcon />
            <span className="flex-1 truncate">{t.searchLens}</span>
          </ContextMenuItem>

          <ContextMenuItem className={item} onSelect={() => castThisTab()}>
            <CastIcon />
            <span className="flex-1 truncate">{t.cast}</span>
          </ContextMenuItem>
        </div>

        <ContextMenuSeparator className="my-2 h-px bg-white/10" />

        <ContextMenuSub>
          <ContextMenuSubTrigger className={cn(item, "data-open:bg-brand-rose/40")}>
            <LanguagesIcon />
            <span className="flex-1 truncate">{t.language}</span>
            <span className={shortcut}>{locale}</span>
          </ContextMenuSubTrigger>

          {/* SUB-PANEL ICHIDAGI ELEMENTLAR HAJMIGA QARAB AVTOMATIK MOSLASHADI (SKROLL CHIQMAYDI) */}
          <ContextMenuSubContent className={subPanel} data-lenis-prevent>
            <ContextMenuRadioGroup
              value={locale}
              onValueChange={setLocale}
              className="flex flex-col gap-0.5"
            >
              <ContextMenuRadioItem value="en" className={item}>
                {t.english}
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="uz" className={item}>
                {t.uzbek}
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="ru" className={item}>
                {t.russian}
              </ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  );
}
