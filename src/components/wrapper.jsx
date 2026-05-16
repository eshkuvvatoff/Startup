"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { LocaleProvider } from "@/contexts/locale-context"

export default function Wrapper({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
    >
      <LocaleProvider>{children}</LocaleProvider>
    </ThemeProvider>
  )
}