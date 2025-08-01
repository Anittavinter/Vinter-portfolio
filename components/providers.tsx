'use client'

import { ThemeProvider, useTheme } from 'next-themes'
import { Toaster } from 'sonner'
import React, { memo } from 'react'

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      enableSystem
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
      {children}
      <ToasterProvider />
    </ThemeProvider>
  )
}

const ToasterProvider = memo(() => {
  const { resolvedTheme } = useTheme()

  return (
    <Toaster
      closeButton
      position="top-right"
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
    />
  )
})

ToasterProvider.displayName = 'ToasterProvider'
