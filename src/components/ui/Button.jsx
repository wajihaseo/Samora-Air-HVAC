import React from "react";

/**
 * Universal Button component complying with 8px radius and luxury palette.
 * Supports link or button semantics.
 */
export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  target,
  rel,
  ...props
}) {
  const variantClass = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    accent: "btn-accent",
  }[variant] || "btn-primary";

  const combinedClass = `btn ${variantClass} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClass}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
