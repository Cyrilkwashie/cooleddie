import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 20, className, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </Svg>
  );
}

export function IconUser(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 19.2c.8-3.2 3.3-5 7-5s6.2 1.8 7 5" />
    </Svg>
  );
}

export function IconHeart(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 20s-7-4.4-7-9.1C5 8 6.8 6.4 9 6.4c1.3 0 2.4.6 3 1.6.6-1 1.7-1.6 3-1.6 2.2 0 4 1.6 4 4.5 0 4.7-7 9.1-7 9.1Z" />
    </Svg>
  );
}

export function IconCart(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 6h2.2l1.3 11h10.2l1.6-8H7" />
      <circle cx="10" cy="20" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="17" cy="20" r="1.1" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

export function IconChevron(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m6 9 6 6 6-6" />
    </Svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
      <circle cx="12" cy="11" r="1.8" />
    </Svg>
  );
}

export function IconHeadset(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 13v3.2A1.8 1.8 0 0 0 5.8 18H8v-5H4Z" />
      <path d="M20 13v3.2A1.8 1.8 0 0 1 18.2 18H16v-5h4Z" />
      <path d="M4 13a8 8 0 0 1 16 0" />
    </Svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3.5 5 6.2v5.4c0 4.2 2.9 7.2 7 8.4 4.1-1.2 7-4.2 7-8.4V6.2L12 3.5Z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  );
}

export function IconRefresh(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4.5 12a7.5 7.5 0 0 1 12.6-5.4L20 9" />
      <path d="M20 4.5V9h-4.5" />
      <path d="M19.5 12a7.5 7.5 0 0 1-12.6 5.4L4 15" />
      <path d="M4 19.5V15h4.5" />
    </Svg>
  );
}

export function IconTruck(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h4.2L21 13.2V16h-7" />
      <circle cx="7.2" cy="17.2" r="1.4" />
      <circle cx="17.2" cy="17.2" r="1.4" />
    </Svg>
  );
}

export function IconLock(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="6" y="11" width="12" height="9" rx="2" />
      <path d="M8.5 11V8.2a3.5 3.5 0 0 1 7 0V11" />
    </Svg>
  );
}

export function IconBadge(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="7" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  );
}

export function IconStar({ filled = true, ...props }: IconProps & { filled?: boolean }) {
  return (
    <svg
      width={props.size ?? 14}
      height={props.size ?? 14}
      viewBox="0 0 24 24"
      className={props.className}
      aria-hidden="true"
    >
      <path
        d="m12 3.2 2.5 5.2 5.7.8-4.1 4 1 5.6L12 16.2 6.9 18.8l1-5.6-4.1-4 5.7-.8L12 3.2Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="9" cy="9" r="2.6" />
      <circle cx="16" cy="9.4" r="2.2" />
      <path d="M4.5 17.5c.7-2.6 2.6-4 5.2-4s4.5 1.4 5.2 4" />
      <path d="M14 13.6c1.8-.2 3.4.8 4.2 2.9" />
    </Svg>
  );
}

export function IconTag(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 12.2V5.8A1.8 1.8 0 0 1 5.8 4H12l8 8-6.2 6.2L4 12.2Z" />
      <circle cx="8.2" cy="8.2" r="1" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function IconPercent(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="8" cy="8" r="2.2" />
      <circle cx="16" cy="16" r="2.2" />
      <path d="m7.5 16.5 9-9" />
    </Svg>
  );
}

export function IconArrow(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 6 18 18M18 6 6 18" />
    </Svg>
  );
}

export function GhanaFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 24"
      className={className}
      aria-hidden="true"
    >
      <rect width="36" height="8" fill="#ce1126" />
      <rect y="8" width="36" height="8" fill="#fcd116" />
      <rect y="16" width="36" height="8" fill="#006b3f" />
      <polygon
        fill="#111"
        points="18,8.6 19.15,12.05 15.8,9.95 20.2,9.95 16.85,12.05"
      />
    </svg>
  );
}

export function SocialInstagram(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="16.6" cy="7.4" r="0.8" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function SocialTikTok(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M14 7.2c1.2 1.1 2.6 1.8 4.2 2v3.1c-1.5-.1-2.9-.6-4.2-1.4V16a5.2 5.2 0 1 1-5.2-5.2c.3 0 .6 0 .9.1v3.1A2.2 2.2 0 1 0 12 16V4h2v3.2Z" />
    </Svg>
  );
}

export function SocialX(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m5 5 14 14M15.5 5 5 19M19 5 8.5 19" />
    </Svg>
  );
}

export function SocialFacebook(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.4l.6-3H13v-1.2c0-.4.4-.8 1-.8Z" />
    </Svg>
  );
}

export function SocialYouTube(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="7" width="18" height="10" rx="3" />
      <path d="m11 10 4 2-4 2v-4Z" fill="currentColor" stroke="none" />
    </Svg>
  );
}

const map = {
  search: IconSearch,
  user: IconUser,
  heart: IconHeart,
  cart: IconCart,
  menu: IconMenu,
  chevron: IconChevron,
  pin: IconPin,
  headset: IconHeadset,
  shield: IconShield,
  refresh: IconRefresh,
  truck: IconTruck,
  lock: IconLock,
  badge: IconBadge,
  users: IconUsers,
  tag: IconTag,
  percent: IconPercent,
  arrow: IconArrow,
};

export function Icon({
  name,
  ...props
}: IconProps & { name: keyof typeof map }) {
  const Cmp = map[name];
  return <Cmp {...props} />;
}
