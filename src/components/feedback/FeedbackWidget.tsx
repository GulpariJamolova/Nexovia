"use client";

import { useEffect, useId, useRef, useState } from "react";
import { MessageCircleHeart, X } from "lucide-react";
import FeedbackForm from "./FeedbackForm";

/*
  A small "Rate Nexovia" button in the bottom-left corner of every page.
  (The "How to use" button lives in the bottom-right corner.)
  Clicking it opens a pop-up with the feedback form.
*/
export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="fixed bottom-4 left-4 z-40 inline-flex items-center gap-2 rounded-full bg-lime px-4 py-3 font-semibold text-navy shadow-lg ring-1 ring-navy/10 transition hover:brightness-95 active:scale-95"
      >
        <MessageCircleHeart size={20} aria-hidden="true" />
        <span className="hidden sm:inline">Rate Nexovia</span>
        <span className="sm:hidden">Rate</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-navy/50 p-0 sm:items-center sm:p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-offwhite p-6 shadow-2xl sm:max-w-lg sm:rounded-3xl"
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <h2 id={titleId} className="font-heading text-2xl font-bold text-navy">
                Share your feedback
              </h2>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close feedback"
                className="rounded-full p-2 text-ink/70 transition hover:bg-lavender"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <FeedbackForm onDone={close} />
          </div>
        </div>
      )}
    </>
  );
}
