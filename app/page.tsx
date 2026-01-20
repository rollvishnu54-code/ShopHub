import { ArrowRight, Shield, ShoppingBag, TrendingUp } from "lucide-react";
import Link from "next/link";
import { ProductGrid } from "@/components/product-grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/lib/data";

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Discover Premium Products
              </h1>
              <p className="text-xl text-muted-foreground">
                Shop the latest trending products with guaranteed quality and
                fast shipping. Your satisfaction is our priority.
              </p>
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link href="/products">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/products">Browse Categories</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-2xl flex items-center justify-center">
              <span className="text-9xl">🛍️</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <ShoppingBag className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Premium Quality</h3>
                  <p className="text-muted-foreground">
                    Handpicked products with guaranteed quality and authenticity
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Fast Shipping</h3>
                  <p className="text-muted-foreground">
                    Quick delivery with real-time tracking for all orders
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Secure Payment</h3>
                  <p className="text-muted-foreground">
                    Safe and secure payment processing with buyer protection
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Button variant="outline" asChild>
              <Link href="/products">View All</Link>
            </Button>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
    </div>
  );
}
