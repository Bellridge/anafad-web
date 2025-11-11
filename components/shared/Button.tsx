"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/helpers/tailwind";
import { Loader } from "lucide-react";

const buttonVariants = cva(
  "font-sans inline-flex items-center cursor-pointer justify-center gap-1 whitespace-nowrap rounded-3xl text-sm  md:text-md font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive leading-none ",
  {
    variants: {
      variant: {
        default:
          "bg-anafad-primary-blue text-white shadow-xs hover:bg-on-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-white text-anafad-primary-blue shadow-xs hover:bg-accent dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-8 py-4 ",
        sm: "rounded-[16px] gap-1.5 px-4 py-2",
        lg: "rounded-3xl px-6 py-3 has-[>svg]:px-4",
        icon: "p-2 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    icon?: React.ReactNode;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      disabled,
      onClick,
      loading,
      className,
      icon,
      id,
      style,
      variant,
      size,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        onClick={onClick}
        disabled={disabled || loading}
        id={id}
        style={style}
        type={type}
        {...props}
      >
        {loading ? (
          <Loader className="animate-spin" aria-hidden="true" />
        ) : (
          <>
            {children}
            {icon && (
              <span className="w-8 h-8 flex items-center justify-center rounded-sm shrink-0">
                {icon}
              </span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
