import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function PageWrapper({
  children,
  className,
}: PageWrapperProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl border-x border-dashed border-border/60",
        className
      )}
    >
      {children}
    </div>
  );
}