import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Sales() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Sales</h2>
          <p className="text-muted-foreground mt-1">
            Track your e-commerce sales and revenue.
          </p>
        </div>
        <Button>Download Report</Button>
      </div>
      <Card className="glass-card h-[60vh] flex flex-col items-center justify-center border-dashed">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-semibold tracking-tight">Coming Soon</h3>
          <p className="text-muted-foreground max-w-sm">
            Detailed sales reports and tracking will be available in the next update.
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
