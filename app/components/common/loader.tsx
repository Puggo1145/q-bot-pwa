import { cn } from "~/lib/utils";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  text?: string;
  textPlacement?: "right" | "bottom";
}

export function Loader({
  size = "md",
  text,
  textPlacement = "right",
  className,
  ...props
}: LoaderProps) {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2",
    lg: "w-8 h-8 border-3",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2",
        textPlacement === "bottom" && "flex-col",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "border-current border-t-transparent rounded-full animate-spin",
          sizeClasses[size]
        )}
      />
      {text && <span className="text-sm">{text}</span>}
    </div>
  );
}