import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { getGalleryItems } from '../lib/gallery'

export default function Home() {
  const works = getGalleryItems()

  return (
    <main className="min-h-screen bg-sf-bg text-sf-text">
      <Navbar />

      <div className="px-6 pt-8 pb-16 max-w-6xl mx-auto">
        <Hero />

        <section id="gallery" className="mt-12">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.32em] text-sf-muted">Galeri SnapFrame</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Karya terbaru</h2>
          </div>

          <Gallery items={works} />
        </section>

        <About />

        <Contact />

        <Footer />
      </div>
    </main>
  )
}