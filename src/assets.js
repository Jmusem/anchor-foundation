// Resolves optimized WebP photos to URLs. Every photo has a full size (1600px) and a "-sm" thumbnail (640px).
const programFiles = import.meta.glob('./assets/programs/**/*.webp', { eager: true, query: '?url', import: 'default' })
const rootFiles = import.meta.glob('./assets/*.webp', { eager: true, query: '?url', import: 'default' })

const pair = (files, prefix, name) => ({
  full: files[`${prefix}${name}.webp`],
  thumb: files[`${prefix}${name}-sm.webp`],
})

export function folderPhotos(folder) {
  const prefix = `./assets/programs/${folder}/`
  return Object.keys(programFiles)
    .filter((k) => k.startsWith(prefix) && !k.endsWith('-sm.webp'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((k) => pair(programFiles, prefix, k.slice(prefix.length, -5)))
}

export const filePhotos = (names) => names.map((n) => pair(rootFiles, './assets/', n))
export const photo = (name) => pair(rootFiles, './assets/', name)
export const logo = rootFiles['./assets/logo_anchor.webp']
