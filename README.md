# Wu Ma Dev

Jasa pembuatan website, webapp, dashboard, AI sales & AI customer service modern dengan teknologi terdepan.

## Tech Stack

- **Next.js** 16 - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** v4 - Styling
- **shadcn/ui** - UI components
- **Framer Motion** - Animations
- **Lucide** - Icons

## Package Manager

Menggunakan **Bun** sebagai package manager.

```bash
bun install
```

## Development

```bash
bun run dev
```

## Production Build

```bash
bun run build
bun run start
```

## PM2 Deployment

### Prerequisites

```bash
# Install PM2 globally
bun add -g pm2
```

### Start production

```bash
# Build lalu start dengan PM2
bun run build
bun run pm2:start
```

### PM2 Commands

```bash
bun run pm2:status    # Lihat status
bun run pm2:logs      # Lihat logs
bun run pm2:restart   # Restart service
bun run pm2:stop      # Stop service
bun run pm2:delete    # Hapus dari PM2
bun run pm2:monit     # Monitoring realtime
```

### Konfigurasi PM2

Config di `ecosystem.config.cjs`:
- App name: `wu-ma-dev`
- Port: `3000`
- Production mode
- Auto restart dengan `max_restarts: 10`
- Log ke `./logs/pm2-out.log` dan `./logs/pm2-error.log`

## SEO / AEO / GEO

Website sudah dioptimasi untuk mesin pencari & AI:

- **SEO**: Metadata lengkap (OG, Twitter, meta description, canonical), `robots.txt`, `sitemap.xml`, JSON-LD structured data (ProfessionalService + Article), generateStaticParams untuk SSG article pages
- **AEO (Answer Engine Optimization)**: FAQ + jawaban langsung, konten terstruktur dengan tag semantic
- **GEO (Generative Engine Optimization)**: Konten yang mudah dicerna oleh AI (ChatGPT, Perplexity) dengan struktur jelas dan keterangan kontekstual

Domain: `bismacode.my.id`

## Halaman

- `/` - Landing page (Hero, Layanan, Fitur, Process/Flow, Pricing, Contact, CTA)
- `/artikel` - Daftar artikel layanan
- `/artikel/[slug]` - Detail artikel per layanan (website-modern, webapp-saas, dashboard, ai-sales, ai-customer-service)

## Kontak

- WhatsApp: 0897-0641-711
- Threads: [@aikhacomp](https://www.threads.com/aikhacomp)
