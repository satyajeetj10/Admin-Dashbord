import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function Profile() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
        <p className="text-muted-foreground mt-1">Manage your account profile.</p>
      </div>
      <Card className="glass-card h-[60vh] flex flex-col items-center justify-center border-dashed">
        <h3 className="text-2xl font-semibold tracking-tight">Coming Soon</h3>
      </Card>
    </motion.div>
  );
}
