import { useState } from "react";

type AvatarProps = {
  src: string;
  name: string;
  className?: string;
};

/** Foto profilo; se l'immagine non carica mostra le iniziali.
 *  Angoli morbidi; dimensione e proporzioni arrivano da `className`. */
export function Avatar({
  src,
  name,
  className = "size-20 lg:size-40",
}: AvatarProps) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`@container relative shrink-0 overflow-hidden rounded-2xl border border-hairline ${className}`}
    >
      {failed ? (
        <span
          aria-label={name}
          role="img"
          className="flex size-full items-center justify-center font-display text-[length:30cqi] font-semibold text-accent"
        >
          {initials}
        </span>
      ) : (
        <img
          src={src}
          alt={name}
          width={640}
          height={800}
          loading="eager"
          decoding="async"
          onError={() => setFailed(true)}
          className="size-full object-cover"
        />
      )}
    </div>
  );
}
