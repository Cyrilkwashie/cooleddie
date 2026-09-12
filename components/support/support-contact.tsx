import { contactCards } from "@/lib/support";
import { IconCall, IconChat, IconMail, IconPin } from "@/components/ui/icons";

const icons = {
  chat: IconChat,
  mail: IconMail,
  call: IconCall,
  pin: IconPin,
} as const;

export function SupportContact() {
  return (
    <div id="live-chat">
      <h2 className="font-display text-[26px] font-semibold tracking-[-0.03em] text-cd-ink md:text-[30px]">
        Still need help?
      </h2>
      <p className="mt-1 text-[14px] text-[#8b909a]">
        Our support team is ready to assist you.
      </p>

      <div className="mt-6 space-y-3">
        {contactCards.map((card) => {
          const Icon = icons[card.icon];
          return (
            <div
              key={card.id}
              className="flex items-center gap-3 rounded-[16px] border border-[#ececee] bg-white px-4 py-3.5"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#f4f5f7] text-[#6b7280]">
                <Icon size={18} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-semibold text-cd-ink">{card.title}</p>
                {card.lines.map((line) => (
                  <p key={line} className="text-[12.5px] leading-5 text-[#8b909a]">
                    {line}
                  </p>
                ))}
              </div>
              <a
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                className="pill h-12 shrink-0 border border-[#e4e4e7] bg-white px-5 text-[14px] text-cd-ink hover:border-cd-ink"
              >
                {card.action}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
