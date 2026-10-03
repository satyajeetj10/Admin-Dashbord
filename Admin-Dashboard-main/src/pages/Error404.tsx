import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hexagon, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Error404() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center max-w-md"
      >
        <div className="flex items-center gap-2 mb-8">
          <Hexagon className="w-10 h-10 text-primary" fill="currentColor" />
          <span className="text-2xl font-bold tracking-tight">Nexus UI</span>
        </div>
        
        <h1 className="text-7xl font-extrabold text-primary mb-4 tracking-tighter">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page not found</h2>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        
        <Button asChild size="lg" className="rounded-full">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Link>
        </Button>
      </motion.div>
      
      {/* Decorative background elements */}
      <div className="fixed top-[20%] left-[20%] w-[40%] h-[40%] bg-primary/5 blur-[100px] rounded-full mix-blend-multiply pointer-events-none" />
      <div className="fixed bottom-[20%] right-[20%] w-[30%] h-[30%] bg-blue-500/5 blur-[100px] rounded-full mix-blend-multiply pointer-events-none" />
    </div>
  );
}
