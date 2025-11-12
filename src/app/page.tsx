import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 text-zinc-50">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center px-6 py-16 sm:px-12">
        <header className="mb-12 text-center sm:mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-amber-200/70">
            Portrait Sauvage
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            La majesté du lion
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-200">
            Un regard intense, une posture royale et la lumière dorée du
            crépuscule capturent la puissance tranquille du roi de la savane.
          </p>
        </header>

        <div className="relative w-full overflow-hidden rounded-3xl border border-amber-100/10 bg-zinc-950/30 shadow-[0_40px_120px_-35px_rgba(250,204,21,0.4)]">
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-transparent to-transparent mix-blend-screen" />
          <Image
            src="https://images.unsplash.com/photo-1518972559570-9dba5099a3f9?auto=format&fit=crop&w=1600&q=80"
            alt="Lion majestueux dans la savane"
            fill
            priority
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
          />
        </div>

        <section className="mt-10 grid w-full gap-6 sm:grid-cols-3">
          <article className="rounded-2xl border border-amber-100/10 bg-zinc-900/60 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/70">
              Force
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-200">
              Les muscles tendus et le regard profond révèlent une puissance
              maîtrisée.
            </p>
          </article>
          <article className="rounded-2xl border border-amber-100/10 bg-zinc-900/60 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/70">
              Harmonie
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-200">
              La lumière dorée glisse sur sa crinière et fusionne avec le sable.
            </p>
          </article>
          <article className="rounded-2xl border border-amber-100/10 bg-zinc-900/60 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/70">
              Mystère
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-200">
              Ses yeux fauves gardent les secrets du territoire qu&apos;il
              protège.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}
