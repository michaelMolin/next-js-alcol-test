import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AlcolTest',
    short_name: 'AlcolTest',
    description: 'Calcola il tuo tasso alcolemico',
    start_url: '/',
    display: 'standalone',
    background_color: '#EFEFEF',
    theme_color: '#00A7DC',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
