"use client";

import { DollarSign, ShoppingBag, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  icon: "revenue" | "orders" | "customers" | "trending";
}

const icons = {
  revenue: DollarSign,
  orders: ShoppingBag,
  customers: Users,
  trending: TrendingUp,
};

export function StatCard({ title, value, change, icon }: StatCardProps) {
  const Icon = icons[icon];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className="text-xs text-muted-foreground mt-1">
            <span className="text-green-600">+{change}</span> from last month
          </p>
        )}
      </CardContent>
    </Card>
  );
}
