import { ShoppingBag, TrendingUp, Users } from "lucide-react";
import { RecentOrders } from "@/components/recent-orders";
import { RevenueChart } from "@/components/revenue-chart";
import { StatCard } from "@/components/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { analyticsData, orders } from "@/lib/data";

export default function DashboardPage() {
  const recentOrders = orders.slice(0, 5);
  const totalRevenue = analyticsData.reduce(
    (sum, data) => sum + data.revenue,
    0,
  );
  const totalOrders = analyticsData.reduce((sum, data) => sum + data.orders, 0);
  const totalCustomers = analyticsData.reduce(
    (sum, data) => sum + data.customers,
    0,
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your store.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value={`$${totalRevenue.toLocaleString()}`}
          change="20.1%"
          icon="revenue"
        />
        <StatCard
          title="Orders"
          value={totalOrders.toString()}
          change="12.5%"
          icon="orders"
        />
        <StatCard
          title="Customers"
          value={totalCustomers.toString()}
          change="8.3%"
          icon="customers"
        />
        <StatCard
          title="Avg. Order Value"
          value={`$${(totalRevenue / totalOrders).toFixed(2)}`}
          change="5.7%"
          icon="trending"
        />
      </div>

      {/* Charts and Tables */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <RevenueChart data={analyticsData} />
        </div>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <ShoppingBag className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New order received</p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full">
                  <Users className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New customer signup</p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <TrendingUp className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Revenue milestone reached
                  </p>
                  <p className="text-xs text-muted-foreground">3 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <RecentOrders orders={recentOrders} />
        </CardContent>
      </Card>
    </div>
  );
}
