import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import profileImg from '@/assets/WhatsApp Image 2026-08-04 at 10.52.30 AM.jpg'

interface AppState {
  sidebarCollapsed: boolean
  setSidebarCollapsed: (collapsed: boolean) => void
  toggleSidebar: () => void
  theme: 'dark' | 'light' | 'system'
  setTheme: (theme: 'dark' | 'light' | 'system') => void
  user: {
    name: string
    email: string
    avatar: string
    role: string
  } | null
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      sidebarCollapsed: false,
      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
      toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
      theme: 'system',
      setTheme: (theme) => set({ theme }),
      user: {
        name: 'Satyajeet Jadhav',
        email: 'satyajeet.jadhav@gmail.com',
        avatar: profileImg,
        role: 'Admin',
      },
    }),
    {
      name: 'app-storage',
      version: 2, // Added version to bust local storage cache
    }
  )
)
