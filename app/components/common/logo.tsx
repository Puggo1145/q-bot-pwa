import { CircleIcon } from "lucide-react"
import { cn } from "~/lib/utils"
import type { ComponentProps } from "react"

interface LogoProps extends ComponentProps<"div"> {
  showName?: boolean
  size?: "sm" | "md"
}

export const Logo = ({ 
  showName = true,
  size = "md",
  className,
  ...props
}: LogoProps) => {
  const sizeClass = size === "sm" ? "size-6" : "size-8"

  return (
    <div className={cn("flex items-center gap-3", className)} {...props}>
      <CircleIcon className={sizeClass} />
      {showName && <p className="font-Adamina text-sm font-bold">Q Bot</p>}
    </div>
  )
}
