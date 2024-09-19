import React, { forwardRef } from "react";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  // Any additional props you need can be added here
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...other }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          "bg-[#007bff] rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
          className
        )}
        {...other}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card"; // For better debugging and naming in React DevTools

export { Card };
