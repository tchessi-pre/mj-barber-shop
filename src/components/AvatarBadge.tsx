

import { cn } from "@/lib/utils";

interface AvatarBadgeProps {
  imageSrc: string;
  altText?: string;
  badgeText?: string;
  className?: string;
  imageClassName?: string;
  showBadge?: boolean;
}

const AvatarBadge = ({
  imageSrc,
  altText = "Avatar",
  badgeText = "Expert Barbier",
  className,
  imageClassName,
  showBadge = true
}: AvatarBadgeProps) => {
  return (
    <div className={cn("relative group", className)}>
      <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className={cn(
        "relative w-32 h-32 md:w-40 md:h-40 rounded-full border-[3px] border-primary/40 shadow-[0_0_50px_rgba(212,175,55,0.3)] overflow-hidden ring-4 ring-black/40 mx-auto",
        imageClassName
      )}>
        <img src={imageSrc} alt={altText} className="w-full h-full object-cover scale-110" />
      </div>
      {showBadge && (
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm border border-primary/30 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg whitespace-nowrap">
          {badgeText}
        </div>
      )}
    </div>
  );
};

export default AvatarBadge;
