import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Reusable Button component with multiple variants, sizes, and states.
 * Built to support standard industry design patterns.
 */
const Button = React.forwardRef(({
  className,
  variant = "default",
  size = "default",
  isLoading = false,
  children,
  disabled,
  type = "button",
  ...props
}, ref) => {
  
  // Base classes for consistent sizing, transitions, focus rings
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

  // Style variants mapping
  const variants = {
    default: "bg-primary-900 text-white hover:bg-primary-950 hover:shadow-lg hover:shadow-primary-900/20",
    secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700",
    outline: "border border-zinc-300 bg-transparent text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900",
    ghost: "bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300",
    link: "text-primary-600 underline-offset-4 hover:underline bg-transparent p-0 active:scale-100",
    danger: "bg-rose-600 text-white hover:bg-rose-700 hover:shadow-lg hover:shadow-rose-600/20",
  };

  // Size variants mapping
  const sizes = {
    default: "h-11 px-6 text-sm",
    sm: "h-9 px-4 text-xs",
    lg: "h-13 px-8 text-base",
    icon: "h-10 w-10 p-0",
  };

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || isLoading}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="mr-2 h-4 w-4 animate-spin text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
});

Button.displayName = "Button";

export { Button };
