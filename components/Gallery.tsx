"use client"
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

type CategoryKey = 'scrapbook' | 'photobooth' | 'custom'

const galleryCategories: CategoryKey[] = ['scrapbook', 'photobooth', 'custom']

const categoryLabels: Record<CategoryKey, string> = {
  scrapbook: 'Scrapbook',
  photobooth: 'Photobooth',
  custom: 'Custom'
}

type GalleryItem = {
  id: string
  title: string
  category: CategoryKey
  image: string
  date?: string
  description?: string
}

type GalleryProps = {
  items: GalleryItem[]
}

export default function Gallery({ items }: GalleryProps) {
  const [openItem, setOpenItem] = useState<GalleryItem | null>(null)

  return (
    <>
      {galleryCategories.map((category) => {
        const groupItems = items.filter((item) => item.category === category)

        return (
          <section key={category} id={category} className="mb-14 scroll-mt-28">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold">{categoryLabels[category]}</h3>
              <p className="text-sm text-sf-muted">{groupItems.length} karya</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {groupItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setOpenItem(item)}
                  className="group overflow-hidden text-left p-0 bg-transparent"
                >
                  <div className="border border-[#D4AF37] p-0.5 rounded-xl overflow-hidden">
                    <div className="flex items-center justify-center overflow-hidden bg-transparent">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={1200}
                        height={800}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="block max-h-[520px] w-auto max-w-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="p-3">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-sf-muted">
                      {categoryLabels[item.category]} · {item.date}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )
      })}

      <AnimatePresence>
        {openItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setOpenItem(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="w-full max-w-[600px] max-h-[85vh] overflow-hidden rounded-3xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-[50vh] max-h-[400px] overflow-hidden bg-slate-50">
                <Image
                  src={openItem.image}
                  alt={openItem.title}
                  width={1600}
                  height={1200}
                  sizes="(max-width: 640px) 90vw, 600px"
                  className="h-full w-full object-contain"
                  priority={false}
                />
              </div>

              <div className="max-h-[35vh] overflow-y-auto p-5">
                <div>
                  <h3 className="text-2xl font-semibold">{openItem.title}</h3>
                  <p className="mt-2 text-sm text-sf-muted">
                    {categoryLabels[openItem.category]} · {openItem.date}
                  </p>
                </div>

                <p className="text-sm leading-7 text-slate-700 whitespace-pre-line">
                  {openItem.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={openItem.image}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-full border border-sf-accent px-4 py-2 text-sm text-sf-accent"
                  >
                    Buka di tab baru
                  </a>
                  <button
                    type="button"
                    onClick={() => setOpenItem(null)}
                    className="rounded-full border border-sf-muted px-4 py-2 text-sm text-sf-muted"
                  >
                    Tutup
                  </button>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  Scroll area teks ini untuk melihat semua deskripsi.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}