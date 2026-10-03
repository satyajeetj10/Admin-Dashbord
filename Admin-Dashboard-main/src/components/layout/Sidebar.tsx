import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  BarChart3, 
  ShoppingCart, 
  Users, 
  Package, 
  MessageSquare, 
  Bell, 
  Calendar as CalendarIcon, 
  Settings, 
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Menu,
  Hexagon
} from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const navGroups = [
  {
    title: 'Overview',
    items: [
      { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
      { name: 'Analytics', icon: BarChart3, path: '/analytics' },
    ]
  },
  {
    title: 'E-Commerce',
    items: [
      { name: 'Sales', icon: ShoppingCart, path: '/sales' },
      { name: 'Orders', icon: Package, path: '/orders' },
      { name: 'Products', icon: Package, path: '/products' },
      { name: 'Customers', icon: Users, path: '/customers' },
    ]
  },
  {
    title: 'Management',
    items: [
      { name: 'Users', icon: Users, path: '/users' },
      { name: 'Messages', icon: MessageSquare, path: '/messages' },
      { name: 'Calendar', icon: CalendarIcon, path: '/calendar' },
    ]
  }
];

export default function Sidebar({ mobileOpen, setMobileOpen }: { mobileOpen: boolean; setMobileOpen: (open: boolean) => void }) {
  const { sidebarCollapsed, toggleSidebar, user } = useAppStore();
  const location = useLocation();

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  const isCollapsed = !isMobile && sidebarCollapsed;

  const NavItem = ({ item }: { item: any }) => {
    const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
    
    return (
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <NavLink
              to={item.path}
              onClick={() => isMobile && setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
                isCollapsed && "justify-center px-2"
              )}
            >
              <item.icon className={cn("h-5 w-5", isActive ? "text-primary-foreground" : "text-muted-foreground")} />
              
              {!isCollapsed && (
                <motion.span 
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  {item.name}
                </motion.span>
              )}
            </NavLink>
          </TooltipTrigger>
          {isCollapsed && <TooltipContent side="right">{item.name}</TooltipContent>}
        </Tooltip>
      </TooltipProvider>
    );
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-card border-r border-border shadow-sm transition-all duration-300 ease-in-out">
      {/* Logo */}
      <div className="flex h-16 shrink-0 items-center justify-between px-4 border-b border-border">
        <div className="flex items-center gap-2 overflow-hidden">
          <Hexagon className="h-7 w-7 text-primary shrink-0" fill="currentColor" />
          {!isCollapsed && (
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-lg font-bold tracking-tight whitespace-nowrap"
            >
              Nexus UI
            </motion.span>
          )}
        </div>
        {!isMobile && (
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="h-8 w-8 ml-auto hidden lg:flex shrink-0 text-muted-foreground hover:text-foreground">
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        )}
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 overflow-hidden py-4">
        <div className="px-3 space-y-6">
          {navGroups.map((group, idx) => (
            <div key={idx} className="space-y-2">
              {!isCollapsed && (
                <h4 className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 mb-2">
                  {group.title}
                </h4>
              )}
              {isCollapsed && <div className="h-4" />}
              <div className="space-y-1">
                {group.items.map((item) => (
                  <NavItem key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
          
          <Separator className="my-4" />
          
          <div className="space-y-1">
            <NavItem item={{ name: 'Settings', icon: Settings, path: '/settings' }} />
            <NavItem item={{ name: 'Help Center', icon: HelpCircle, path: '/help' }} />
          </div>
        </div>
      </ScrollArea>

      {/* User Profile Footer */}
      <div className="p-4 border-t border-border shrink-0">
        <div className={cn("flex items-center gap-3", isCollapsed && "justify-center")}>
          <Avatar className="h-9 w-9 border border-border">
            <AvatarImage src={user?.avatar} alt={user?.name} />
            <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-medium truncate">{user?.name}</span>
              <span className="text-xs text-muted-foreground truncate">{user?.role}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isCollapsed ? 80 : 260 }}
        className="hidden lg:block h-screen sticky top-0 z-40 shrink-0"
      >
        <SidebarContent />
      </motion.aside>

      {/* Mobile Drawer (simplified for now, full implementation with Dialog later) */}
      <AnimatePresence>
        {isMobile && mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
              className="fixed inset-y-0 left-0 z-50 w-72 lg:hidden shadow-xl"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
