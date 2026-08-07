
export default function Contact() {
  return (
    <section id="contact" className="mt-16 rounded-[2rem] border border-sf-accent/10 bg-white/80 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="text-sm uppercase tracking-[0.36em] text-sf-muted">Hubungi</p>
        <h2 className="text-3xl font-semibold">Siap membuat kenangan visualmu.</h2>
        <p className="text-sf-muted">Tinggal send message via Instagram atau WhatsApp, dan saya bantu siapkan karya dengan gaya scrapbook maupun photobooth strip.</p>

        <div className="flex flex-wrap gap-3">
          <a href="https://instagram.com/indy.rn" target="_blank" rel="noreferrer" className="rounded-3xl border border-sf-accent/20 bg-sf-accent/5 px-6 py-4 text-sm font-medium text-sf-accent transition hover:bg-sf-accent/10">Instagram @indy.rn</a>
          <a href="https://wa.me/6282174996877" target="_blank" rel="noreferrer" className="rounded-3xl bg-green-600 px-6 py-4 text-sm font-medium text-white transition hover:opacity-90">WhatsApp</a>
        </div>
      </div>
    </section>
  )
}