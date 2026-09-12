export function PayVisa({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-7 min-w-[44px] items-center justify-center rounded-[6px] border border-[#e4e4e7] bg-white px-1.5 ${className ?? ""}`}
      aria-label="Visa"
    >
      <svg viewBox="0 0 36 12" className="h-3 w-[34px]" aria-hidden="true">
        <path fill="#1A1F71" d="M14.2 11.4 16.1.6h3.1L17.3 11.4h-3.1Zm11.4-10.6c-.6-.2-1.6-.5-2.8-.5-3.1 0-5.3 1.6-5.3 4 0 1.7 1.6 2.7 2.8 3.3 1.3.6 1.7 1 1.7 1.5 0 .8-1 1.2-2 1.2-1.3 0-2.1-.2-3.2-.7l-.4-.2-.5 2.8c.8.4 2.3.7 3.9.7 3.3 0 5.4-1.6 5.4-4.1 0-1.4-1-2.4-2.5-3.2-1.1-.6-1.7-1-1.7-1.5 0-.5.6-1 1.9-1 1.1 0 1.9.2 2.5.5l.3.1.5-2.6ZM32.8.6h-2.4c-.7 0-1.3.2-1.6 1l-4.6 9.8h3.2l.7-1.8h3.8l.4 1.8H35L32.8.6Zm-3.6 6.6 1.6-4.1.9 4.1h-2.5ZM12.4.6 9.4 8.3l-.3-1.6C8.5 4.7 6.8 3.3 4.9 2.6l2.7 8.8h3.3L16 0.6h-3.6Z" />
        <path fill="#F7B600" d="M6.8.6H1.9L1.8.8C5.6 1.8 8.2 4 9.1 6.7L8 1.6C7.8.8 7.4.6 6.8.6Z" />
      </svg>
    </span>
  );
}

export function PayMastercard({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-7 min-w-[44px] items-center justify-center rounded-[6px] border border-[#e4e4e7] bg-white px-1.5 ${className ?? ""}`}
      aria-label="Mastercard"
    >
      <svg viewBox="0 0 32 20" className="h-4 w-7" aria-hidden="true">
        <circle cx="12" cy="10" r="7" fill="#EB001B" />
        <circle cx="20" cy="10" r="7" fill="#F79E1B" />
        <path d="M16 4.8a7 7 0 0 1 0 10.4 7 7 0 0 1 0-10.4Z" fill="#FF5F00" />
      </svg>
    </span>
  );
}

export function PayMtn({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-7 min-w-[44px] items-center justify-center rounded-[6px] bg-[#ffcc00] px-1.5 text-[8px] font-extrabold tracking-tight text-[#1a1a1a] ${className ?? ""}`}
      aria-label="MTN MoMo"
    >
      MTN
    </span>
  );
}

export function PayTelecel({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-7 min-w-[44px] items-center justify-center rounded-[6px] bg-[#e10600] px-1.5 text-[8px] font-extrabold tracking-tight text-white ${className ?? ""}`}
      aria-label="Telecel"
    >
      Telecel
    </span>
  );
}

export function PayAmex({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-7 min-w-[40px] items-center justify-center rounded-[6px] bg-[#2e77bc] px-1.5 text-[8px] font-extrabold tracking-wide text-white ${className ?? ""}`}
      aria-label="American Express"
    >
      AMEX
    </span>
  );
}

export function PayApple({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-7 min-w-[52px] items-center justify-center gap-0.5 rounded-[6px] border border-[#e4e4e7] bg-white px-1.5 ${className ?? ""}`}
      aria-label="Apple Pay"
    >
      <svg viewBox="0 0 14 17" className="h-3.5 w-3" aria-hidden="true">
        <path
          fill="#111"
          d="M11.2 9.1c0-2.2 1.8-3.2 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.3-.2-2.6.8-3.3.8-.7 0-1.8-.8-3-.8C1.7 4.1.1 5.3 0 7.4c-.1 1.3.2 2.7.8 3.8.7 1.2 1.5 2.5 2.6 2.4 1 0 1.4-.7 2.6-.7s1.5.7 2.6.7c1.1 0 1.8-1.2 2.5-2.4.5-.8.7-1.6.7-1.6s-2.2-.8-2.2-3.5ZM9.3 2.6C9.9 1.9 10.3 1 10.2 0 9.4.1 8.4.6 7.8 1.3c-.5.6-1 1.5-.9 2.4.9.1 1.8-.4 2.4-1.1Z"
        />
      </svg>
      <span className="text-[10px] font-semibold tracking-tight text-[#111]">Pay</span>
    </span>
  );
}
