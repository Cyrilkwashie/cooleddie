"use client";

import { useEffect, type ReactNode } from "react";
import { IconClose } from "@/components/ui/icons";

export function MobileFilterDrawer({
  open,
  onClose,
  onClear,
  children,
}: {
  open: boolean;
  onClose: () => void;
  onClear: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        aria-label="Close filters"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />
      <aside className="absolute inset-y-0 left-0 flex w-[min(100%,320px)] flex-col bg-white shadow-[8px_0_32px_rgba(15,18,22,0.12)]">
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-[#f0f1f3] px-4">
          <h2 className="text-[16px] font-semibold">Filters</h2>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={onClear}
              className="h-11 px-2 text-[13px] text-cd-muted hover:text-cd-ink"
            >
              Clear all
            </button>
            <button
              type="button"
              aria-label="Close filters"
              onClick={onClose}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-cd-soft"
            >
              <IconClose size={20} />
            </button>
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">{children}</div>
        <div className="shrink-0 border-t border-[#f0f1f3] p-4">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-primary w-full"
          >
            Show results
          </button>
        </div>
      </aside>
    </div>
  );
}
