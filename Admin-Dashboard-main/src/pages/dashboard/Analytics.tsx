import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { OverviewChart } from '@/components/shared/charts/OverviewChart';
import { DeviceChart } from '@/components/shared/charts/DeviceChart';
import { mockRevenueData, mockDeviceData } from '@/lib/mockData';

export default function Analytics() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <p className="text-muted-foreground mt-1">
          Detailed metrics and performance data.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 glass-card">
          <CardHeader>
            <CardTitle>Audience Overview</CardTitle>
            <CardDescription>Metrics across all channels over time.</CardDescription>
          </CardHeader>
          <CardContent className="pl-0">
            <OverviewChart data={mockRevenueData} />
          </CardContent>
        </Card>
        <Card className="col-span-3 glass-card">
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>User acquisition by device type.</CardDescription>
          </CardHeader>
          <CardContent>
            <DeviceChart data={mockDeviceData} />
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
