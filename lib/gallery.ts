import fs from 'fs'
import path from 'path'
import type { Work } from '../content/works'

const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif', '.svg']

function slugToTitle(slug: string) {
  return slug
    .replace(/[-_]/g, ' ')
    .replace(/\b(\w)/g, (match) => match.toUpperCase())
    .replace(/\s+/g, ' ')
    .trim()
}

function inferCategory(name: string): Work['category'] {
  const lower = name.toLowerCase()
  if (lower.includes('photobooth') || lower.includes('strip')) return 'photobooth'
  if (lower.includes('poster') || lower.includes('promo') || lower.includes('custom')) return 'custom'
  return 'scrapbook'
}

function slugToId(slug: string) {
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function getGalleryItems(): Work[] {
  const imagesDir = path.join(process.cwd(), 'public', 'images')
  if (!fs.existsSync(imagesDir)) return []

  return fs
    .readdirSync(imagesDir)
    .filter((file) => allowedExtensions.includes(path.extname(file).toLowerCase()))
    .map((file) => {
      const base = path.basename(file, path.extname(file))
      const title = slugToTitle(base)
      const category = inferCategory(base)
      const date = fs.statSync(path.join(imagesDir, file)).mtime.toISOString().slice(0, 10)
      const encodedFile = encodeURI(file)

      return {
        id: slugToId(base),
        title,
        category,
        image: `/images/${encodedFile}`,
        date
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}
