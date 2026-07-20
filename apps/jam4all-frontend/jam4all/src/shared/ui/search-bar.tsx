"use client";

import { Search } from "lucide-react";
import { cn } from "@/shared/utils/cn";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

function SearchBar({ className, containerClassName, ...props }: SearchBarProps) {
  return (
    <div className={cn("relative", containerClassName)}>
      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <input
        className={cn(
          "h-10 w-full rounded-md border border-border bg-surface pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary",
          className
        )}
        {...props}
      />
    </div>
  );
}

export { SearchBar };
