export default function About() {
  return (
    <section id="about" className="mt-16 rounded-[2rem] border border-sf-accent/10 bg-white/80 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
      <div className="grid gap-8 md:grid-cols-[1fr_0.7fr] items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.36em] text-sf-muted">Tentang Indy</p>
          <h2 className="mt-3 text-3xl font-semibold">Cerita di balik SnapFrame</h2>
          <p className="mt-4 text-sf-muted">Indy Aryanti membuat scrapbook digital dan photobooth strip yang terasa hangat dan personal. Setiap karya dirancang sebagai kenangan visual — tidak sekadar desain, tapi pengalaman kecil yang bisa dibagikan.</p>
        </div>
        <div className="space-y-3 rounded-3xl border border-sf-accent/10 bg-sf-accent/5 p-6 shadow-sm">
          <div className="rounded-2xl bg-white p-4">
            <p className="text-sm uppercase tracking-[0.32em] text-sf-muted">Fokus</p>
            <p className="mt-2 text-base">Scrapbook, photobooth strip, dan poster custom dengan nuansa nostalgia modern.</p>
          </div>
          <div className="rounded-2xl bg-white p-4">
            <p className="text-sm uppercase tracking-[0.32em] text-sf-muted">Estetika</p>
            <p className="mt-2 text-base">Hangat, rapi, dan menggunakan struktur visual yang memberi ruang bernapas.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
