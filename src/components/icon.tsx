import {
  Building2,
  Compass,
  Handshake,
  Heart,
  Landmark,
  Megaphone,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/data/site";

const iconMap: Record<IconName, LucideIcon> = {
  users: Users,
  landmark: Landmark,
  handshake: Handshake,
  compass: Compass,
  heart: Heart,
  building: Building2,
  megaphone: Megaphone,
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const IconComponent = iconMap[name];
  return <IconComponent className={className} strokeWidth={1.6} aria-hidden="true" />;
}
