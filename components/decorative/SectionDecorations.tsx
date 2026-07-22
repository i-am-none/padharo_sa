export function LeftDecoration() {
  return (
    <img
      src="/elements/dancer-left-svg.svg"
      alt=""
      className="absolute left-0 top-0 h-full w-auto opacity-20 pointer-events-none object-cover"
      aria-hidden="true"
    />
  );
}

export function RightDecoration() {
  return (
    <img
      src="/elements/dancer-right-svg.svg"
      alt=""
      className="absolute right-0 top-0 h-full w-auto opacity-20 pointer-events-none object-cover"
      aria-hidden="true"
    />
  );
}

export function CamelDecoration() {
  return (
    <img
      src="https://res.cloudinary.com/zrqybpla/image/upload/v1784716138/camel-svg_lg5qp3.svg"
      alt=""
      className="absolute right-0 top-0 h-full w-auto opacity-20 pointer-events-none object-cover"
      aria-hidden="true"
    />
  );
}

export function ElephantDecoration() {
  return (
    <img
      src="https://res.cloudinary.com/zrqybpla/image/upload/v1784716136/elephant-svg_namgdc.svg"
      alt=""
      className="absolute left-0 top-0 h-full w-auto opacity-20 pointer-events-none object-cover"
      aria-hidden="true"
    />
  );
}

export function PeacockDecoration() {
  return (
    <img
      src="https://res.cloudinary.com/zrqybpla/image/upload/v1784716140/peacock-svg_vwgkdz.svg"
      alt=""
      className="absolute left-0 top-0 h-full w-auto opacity-20 pointer-events-none object-cover"
      aria-hidden="true"
    />
  );
}

export function LanternDecoration() {
  return (
    <img
      src="https://res.cloudinary.com/zrqybpla/image/upload/v1784716136/lantern-svg_p2xfzd.svg"
      alt=""
      className="absolute right-0 top-0 h-full w-auto opacity-20 pointer-events-none object-cover"
      aria-hidden="true"
    />
  );
}

export function CornerDecoration() {
  return (
    <svg
      className="absolute w-24 h-24 opacity-15 pointer-events-none"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M48 0C48 0 0 48 0 96H96C96 48 48 0 48 0Z"
        fill="currentColor"
        className="text-accent-primary"
      />
      <circle cx="48" cy="48" r="12" fill="currentColor" className="text-accent-primary" />
    </svg>
  );
}
