import FeedbackForm from "@/components/feedback/FeedbackForm";

export const metadata = { title: "Share your feedback – Nexovia" };

export default function FeedbackPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-sm font-semibold uppercase tracking-widest text-violet-dark">Feedback</p>
      <h1 className="mt-2 font-heading text-3xl font-bold text-navy sm:text-4xl">
        Rate Nexovia
      </h1>
      <p className="mb-8 mt-2 text-ink/80">
        Your ideas help us improve the website for every student. Thank you for taking a minute!
      </p>
      <div className="rounded-3xl bg-lavender/60 p-6 sm:p-8">
        <FeedbackForm />
      </div>
    </section>
  );
}
