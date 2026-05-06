"use client"

import { ThemeProvider } from "@/components/theme-provider"

export default function Wrapper({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
    >
      {children}
    </ThemeProvider>
  )
}