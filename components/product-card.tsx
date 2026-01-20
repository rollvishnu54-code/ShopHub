import { ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
          <div className="absolute top-2 right-2 z-10">
            {product.featured && <Badge>Featured</Badge>}
          </div>
          <div className="flex items-center justify-center h-full">
            <span className="text-6xl">📦</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <div className="space-y-1 flex-1">
              <Link href={`/products/${product.id}`}>
                <h3 className="font-semibold line-clamp-2 hover:underline">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm text-muted-foreground">
                {product.category}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">
              ({product.reviews})
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">${product.price}</span>
            <span className="text-xs text-muted-foreground">
              {product.stock} in stock
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" size="sm">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
