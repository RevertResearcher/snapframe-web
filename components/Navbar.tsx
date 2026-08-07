import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-transparent backdrop-blur-sm z-40">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="font-serif text-xl">SnapFrame</span>
        </Link>
        <div className="space-x-4 text-sm text-gray-700">
          <a href="/#gallery">Galeri</a>
          <a href="/#scrapbook">Scrapbook</a>
          <a href="/#photobooth">Photobooth</a>
          <a href="/#custom">Custom</a>
          <a href="#about">Tentang</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}
