# Panduan Deploy ke Netlify

## Persiapan

1. **Dapatkan API Key Gemini**
   - Kunjungi https://aistudio.google.com/app/apikeys
   - Buat API key baru
   - Simpan API key dengan aman

2. **Setup di GitHub**
   - Push project ke GitHub repository
   - Pastikan `.env` file ada di `.gitignore` (sudah dikonfigurasi)

## Deploy ke Netlify

### Metode 1: Netlify UI

1. Buka https://app.netlify.com
2. Klik "Add new site" → "Import an existing project"
3. Hubungkan GitHub repository Anda
4. Konfigurasi build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Klik "Deploy site"

### Metode 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login ke Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Set Environment Variables

Setelah deploy, tambahkan API key di Netlify:

1. Buka dashboard site Netlify Anda
2. Pergi ke **Site settings** → **Build & deploy** → **Environment**
3. Klik "Edit variables"
4. Tambahkan variable baru:
   - **Key**: `API_KEY`
   - **Value**: (paste Gemini API key Anda)
5. Klik "Save"
6. Redeploy site dari dashboard atau trigger push baru ke GitHub

## Verifikasi

- Site sudah live di URL yang diberikan Netlify
- Cek console tidak ada error `API_KEY is undefined`
- Test chatbot Gemini untuk memastikan API key berfungsi

## Troubleshooting

**API Key tidak terbaca?**
- Pastikan environment variable sudah diset di Netlify dashboard
- Trigger redeploy manual
- Tunggu beberapa menit untuk propagasi

**Build gagal?**
- Cek logs di Netlify dashboard
- Pastikan `npm install` dan `npm run build` berjalan di local tanpa error
- Verifikasi Node.js version compatibility
