// Resolves optimized WebP photos to URLs. Every photo has a full size (1600px) and a "-sm" thumbnail (640px).
import dims from './photo-dims.json'

const all = import.meta.glob('./assets/**/*.webp', { eager: true, query: '?url', import: 'default' })

const pair = (key) => {
  const [w, h] = dims[key] || [640, 427]
  return { full: all[`./assets/${key}.webp`], thumb: all[`./assets/${key}-sm.webp`], w, h }
}

export function folderPhotos(folder) {
  const prefix = `./assets/programs/${folder}/`
  return Object.keys(all)
    .filter((k) => k.startsWith(prefix) && !k.endsWith('-sm.webp'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((k) => pair(`programs/${folder}/${k.slice(prefix.length, -5)}`))
}

export const filePhotos = (names) => names.map(pair)
export const photo = (name) => pair(name)
export const logo = all['./assets/logo_anchor.webp']
