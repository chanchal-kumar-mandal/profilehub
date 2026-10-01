import { UserRound } from "lucide-react";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
};

const sizeStyles = {
  sm: {
    wrapper: "h-8 w-8 rounded-lg",
    icon: "h-4 w-4",
    text: "text-lg",
  },
  md: {
    wrapper: "h-10 w-10 rounded-xl",
    icon: "h-5 w-5",
    text: "text-xl",
  },
  lg: {
    wrapper: "h-12 w-12 rounded-2xl",
    icon: "h-6 w-6",
    text: "text-2xl",
  },
};

export default function Logo({
  size = "md",
  showText = true,
  className = "",
}: LogoProps) {
  const styles = sizeStyles[size];

  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      aria-label="ProfileHub"
    >
      {/* Logo Mark */}
      <div
        className={`${styles.wrapper} flex items-center justify-center bg-slate-900 text-white shadow-sm`}
      >
        <UserRound className={styles.icon} strokeWidth={2.2} />
      </div>

      {/* Brand Name */}
      {showText && (
        <div className={`font-bold tracking-tight ${styles.text}`}>
          <span className="text-slate-900">Profile</span>
          <span className="text-indigo-600">Hub</span>
        </div>
      )}
    </div>
  );
}