export type Work = {
  id: string
  title: string
  category: 'scrapbook' | 'photobooth' | 'custom'
  image: string
  description?: string
  date?: string
}

export const works: Work[] = [
  {
    id: 'w1',
    title: 'Photobooth Strip — Warm Set',
    category: 'photobooth',
    image: '/images/Photobooth Strip.png',
    description: 'Strip foto bergaya polaroid dengan warna hangat dan frame kontras.',
    date: '2026-06-12'
  },
  {
    id: 'w2',
    title: 'Collage — Campus Stories',
    category: 'scrapbook',
    image: '/images/White and Yellow Collage Campus Dump  Instagram Story_20251221_110318_0000.png',
    description: 'Kolase kenangan dalam format scrapbook digital, cocok untuk story sosial.',
    date: '2025-12-21'
  },
  {
    id: 'w3',
    title: 'Poster / Promo Artwork',
    category: 'custom',
    image: '/images/Poster Buya Hamka_Indy Aryanti_Teknik Kardiovaskuler.png',
    description: 'Contoh karya poster dengan komposisi estetis untuk event.',
    date: '2026-04-20'
  }
]
