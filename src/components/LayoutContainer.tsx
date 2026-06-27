import React from "react";

interface LayoutContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const LayoutContainer: React.FC<LayoutContainerProps> = ({
  children,
  className = "",
  as: Component = "div",
  style,
  ...props
}) => {
  return (
    <Component
      className={`w-full mx-auto ${className}`}
      style={{
        maxWidth: "1440px",
        width: "100%",
        marginInline: "auto",
        paddingLeft: "clamp(24px, 4vw, 80px)",
        paddingRight: "clamp(24px, 4vw, 80px)",
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};
