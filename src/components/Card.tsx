import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  variant?: "default" | "highlight"; // Example variant prop
}

export const Card = ({
  className,
  children,
  variant = "default", // Default variant
  ...other
}: CardProps) => {
  const variantClasses =
    variant === "highlight" ? "bg-yellow-500" : "bg-[#1a1a1a]";

  return (
    <div
      className={twMerge(
        `rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/10 after:pointer-events-none ${variantClasses}`,
        className
      )}
      {...other}
    >
      {children}
    </div>
  );
};
