"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { RotateCcw } from "lucide-react";
import MatchCard from "./MatchCard";
import type { CareerMatch } from "@/types";

type State =
  | { status: "loading" }
  | { status: "empty" }
  | { status: "error" }
  | { status: "done"; matches: CareerMatch[] };

export default function ResultsView() {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    const raw = sessionStorage.getItem("nexovia-answers");
    if (!raw) {
      setState({ status: "empty" });
      return;
    }
    const controller = new AbortController();
    fetch("/api/match", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: raw,
      signal: controller.signal,
    })
      .then((r) => {
        if (!r.ok) throw new Error("Request failed");
        return r.json();
      })
      .then((data) => setState({ status: "done", matches: data.matches }))
      .catch((e) => {
        if (e.name !== "AbortError") setState({ status: "error" });
      });
    return () => controller.abort();
  }, []);

  if (state.status === "loading") {
    return (
      <div className="py-20 text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-lavender border-t-violet" />
        <p className="mt-4 text-ink/70">Finding careers that fit you…</p>
      </div>
    );
  }

  if (state.status === "empty" || state.status === "error") {
    return (
      <div className="rounded-2xl bg-lavender p-6 text-center">
        <p className="text-ink/80">
          {state.status === "empty"
            ? "We don't have your answers yet."
            : "Something went wrong. Please try again."}
        </p>
        <Link href="/find" className="mt-4 inline-block font-semibold text-violet">
          Start the questions
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2">
        {state.matches.map((m) => (
          <MatchCard key={m.slug} match={m} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/find" className="inline-flex items-center gap-2 font-semibold text-violet">
          <RotateCcw size={16} /> Retake the questions
        </Link>
      </div>
    </div>
  );
}