import { ComponentPropsWithoutRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  variant?: "default" | "highlight"; // Example variant prop
}

// Forward ref to the Card component
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, variant = "default", ...other }, ref) => {
    const variantClasses =
      variant === "highlight" ? "bg-yellow-500" : "bg-[#1a1a1a]";

    return (
      <div
        ref={ref} // Attach the ref here
        className={twMerge(
          `rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/10 after:pointer-events-none ${variantClasses}`,
          className
        )}
        {...other} // Spread other props
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card"; // Set a display name for the component
