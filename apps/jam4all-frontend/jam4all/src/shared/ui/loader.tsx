import { Loader2 } from "lucide-react";
import { cn } from "@/shared/utils/cn";

function Loader({ className, size = 20 }: { className?: string; size?: number }) {
  return <Loader2 size={size} className={cn("animate-spin text-primary", className)} />;
}

export { Loader };
