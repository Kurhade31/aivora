import React from 'react';

interface AivoraBadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'warning' | 'danger';
  size?: 'sm' | 'md';
  className?: string;
}

export const AivoraBadge: React.FC<AivoraBadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  const variantStyles = {
    primary: 'bg-primary-subtle text-primary border border-primary/20',
    secondary: 'bg-secondary-subtle text-secondary border border-secondary/20',
    accent: 'bg-accent-subtle text-accent border border-accent/20',
    outline: 'border border-border text-muted bg-surface/50',
    warning: 'bg-warning-subtle text-warning border border-warning/20',
    danger: 'bg-danger-subtle text-danger border border-danger/20',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 font-medium tracking-wide',
    md: 'text-xs px-2.5 py-1 font-semibold tracking-wide',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-mono uppercase transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-75" />
      {children}
    </span>
  );
};
