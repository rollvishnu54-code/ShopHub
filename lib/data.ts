import type { AnalyticsData, Order, Product } from "./types";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description:
      "High-quality wireless headphones with active noise cancellation and premium sound quality. Perfect for music lovers and professionals.",
    price: 299.99,
    image: "/images/headphones.jpg",
    category: "Electronics",
    rating: 4.8,
    reviews: 342,
    stock: 45,
    featured: true,
  },
  {
    id: "2",
    name: "Smart Watch Pro",
    description:
      "Advanced smartwatch with health tracking, GPS, and premium build quality. Stay connected and healthy.",
    price: 399.99,
    image: "/images/smartwatch.jpg",
    category: "Electronics",
    rating: 4.6,
    reviews: 521,
    stock: 32,
    featured: true,
  },
  {
    id: "3",
    name: "Laptop Backpack",
    description:
      "Durable and stylish backpack with dedicated laptop compartment and multiple pockets for organization.",
    price: 79.99,
    image: "/images/backpack.jpg",
    category: "Accessories",
    rating: 4.7,
    reviews: 189,
    stock: 67,
    featured: false,
  },
  {
    id: "4",
    name: "Mechanical Keyboard RGB",
    description:
      "Premium mechanical keyboard with customizable RGB lighting and tactile switches for optimal typing experience.",
    price: 149.99,
    image: "/images/keyboard.jpg",
    category: "Electronics",
    rating: 4.9,
    reviews: 412,
    stock: 28,
    featured: true,
  },
  {
    id: "5",
    name: "Ergonomic Office Chair",
    description:
      "Comfortable ergonomic chair with lumbar support and adjustable features for all-day comfort.",
    price: 349.99,
    image: "/images/chair.jpg",
    category: "Furniture",
    rating: 4.5,
    reviews: 234,
    stock: 15,
    featured: false,
  },
  {
    id: "6",
    name: "4K Webcam",
    description:
      "Professional 4K webcam with auto-focus and excellent low-light performance for streaming and video calls.",
    price: 129.99,
    image: "/images/webcam.jpg",
    category: "Electronics",
    rating: 4.7,
    reviews: 298,
    stock: 54,
    featured: false,
  },
  {
    id: "7",
    name: "Wireless Mouse",
    description:
      "Precision wireless mouse with ergonomic design and long battery life. Perfect for work and gaming.",
    price: 49.99,
    image: "/images/mouse.jpg",
    category: "Electronics",
    rating: 4.6,
    reviews: 567,
    stock: 89,
    featured: false,
  },
  {
    id: "8",
    name: "Desk Lamp LED",
    description:
      "Modern LED desk lamp with brightness control and USB charging port. Energy-efficient and stylish.",
    price: 59.99,
    image: "/images/lamp.jpg",
    category: "Accessories",
    rating: 4.4,
    reviews: 156,
    stock: 43,
    featured: false,
  },
];

export const orders: Order[] = [
  {
    id: "ORD-001",
    customer: "John Doe",
    email: "john@example.com",
    date: "2026-01-20",
    status: "delivered",
    total: 349.98,
    items: [
      { product: products[0], quantity: 1 },
      { product: products[6], quantity: 1 },
    ],
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    email: "jane@example.com",
    date: "2026-01-19",
    status: "shipped",
    total: 399.99,
    items: [{ product: products[1], quantity: 1 }],
  },
  {
    id: "ORD-003",
    customer: "Mike Johnson",
    email: "mike@example.com",
    date: "2026-01-19",
    status: "processing",
    total: 229.98,
    items: [
      { product: products[3], quantity: 1 },
      { product: products[2], quantity: 1 },
    ],
  },
  {
    id: "ORD-004",
    customer: "Sarah Williams",
    email: "sarah@example.com",
    date: "2026-01-18",
    status: "delivered",
    total: 479.98,
    items: [
      { product: products[4], quantity: 1 },
      { product: products[5], quantity: 1 },
    ],
  },
  {
    id: "ORD-005",
    customer: "David Brown",
    email: "david@example.com",
    date: "2026-01-18",
    status: "pending",
    total: 59.99,
    items: [{ product: products[7], quantity: 1 }],
  },
];

export const analyticsData: AnalyticsData[] = [
  { date: "2026-01-14", revenue: 3200, orders: 12, customers: 10 },
  { date: "2026-01-15", revenue: 4100, orders: 15, customers: 13 },
  { date: "2026-01-16", revenue: 2800, orders: 9, customers: 8 },
  { date: "2026-01-17", revenue: 5200, orders: 18, customers: 16 },
  { date: "2026-01-18", revenue: 4800, orders: 16, customers: 14 },
  { date: "2026-01-19", revenue: 6300, orders: 21, customers: 19 },
  { date: "2026-01-20", revenue: 5500, orders: 19, customers: 17 },
];

export const categories = ["All", "Electronics", "Accessories", "Furniture"];
