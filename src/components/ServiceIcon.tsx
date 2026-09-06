import { Globe, LayoutDashboard, Bot, ShoppingCart, Headphones, type LucideIcon } from "lucide-react";
import { getService } from "@/data/services";

const icons: Record<string, LucideIcon> = {
  Globe,
  LayoutDashboard,
  Bot,
  ShoppingCart,
  Headphones,
};

export function ServiceIcon({ slug }: { slug: string }) {
  const service = getService(slug);
  if (!service) return null;

  const Icon = icons[service.icon.name] || Globe;

  return <Icon className="w-10 h-10 text-[#050510]" />;
}
