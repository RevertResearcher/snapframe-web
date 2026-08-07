import Image from 'next/image'
import Link from 'next/link'
import { heroHeaderPath, heroHeaderTitle, heroHeaderAlt } from '../content/hero'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12">
      <div className="relative max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.3fr_1fr] items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.36em] text-sf-muted">SnapFrame · Portfolio</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">Kenangan scrapbook & photobooth strip yang terasa hangat dan personal.</h1>
          <p className="max-w-xl text-base text-sf-muted">Indy Aryanti mengubah momenmu jadi karya digital yang rapi, modern, dan memiliki nuansa nostalgia tanpa terasa berat.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="#gallery" className="inline-flex items-center justify-center rounded-full bg-sf-accent px-5 py-3 text-sm font-medium text-black shadow-sm shadow-sf-accent/20">Lihat Galeri</Link>
            <Link href="#about" className="inline-flex items-center justify-center rounded-full border border-sf-accent/30 px-5 py-3 text-sm font-medium text-sf-text">Tentang Indy</Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-transparent">
          <div className="relative h-[420px] md:h-[520px] w-full bg-transparent">
            <Image
              src={heroHeaderPath}
              alt={heroHeaderAlt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
