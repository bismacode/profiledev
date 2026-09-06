#!/usr/bin/env bash
#
# Script ping ke search engine untuk indexing
# Domain: bismacode.my.id
#
# Cara pakai:
#   bun run ping:index        (atau)  bash scripts/ping-index.sh
#
# Persyaratan: situs Wu Ma Dev sudah live di https://bismacode.my.id
# (sitemap.xml & robots.txt harus bisa diakses publik)

set -euo pipefail

SITE="https://bismacode.my.id"
SITEMAP="${SITE}/sitemap.xml"

echo "===== PING INDEXING ====="
echo "Site   : ${SITE}"
echo "Sitemap: ${SITEMAP}"
echo "==========================="
echo ""

# 1) Cek aksesibilitas publik dulu
echo "[1/4] Memverifikasi sitemap publik..."
if curl -sf --max-time 15 "${SITEMAP}" >/dev/null 2>&1; then
  echo "      OK - sitemap dapat diakses."
else
  echo "      GAGAL - sitemap tidak bisa diakses publik."
  echo "      Pastikan Wu Ma Dev sudah deploy ke ${SITE}."
  echo "      Ping dibatalkan."
  exit 1
fi
echo ""

# 2) Google ping endpoint (legacy, tetap dicoba)
echo "[2/4] Ping Google (google.com/ping)..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 15 \
  "https://www.google.com/ping?sitemap=${SITEMAP}")
echo "      HTTP ${HTTP_CODE}"
[ "${HTTP_CODE}" = "200" ] || echo "      (Google sering abaikan endpoint legacy ini; gunakan Search Console untuk hasil pasti)"
echo ""

# 3) Bing IndexNow
echo "[3/4] Submit IndexNow (Bing / Yandex / dll)..."
KEY_FILE=".next/indexnow-key.txt"
KEY=""
if [ -f "${KEY_FILE}" ]; then
  KEY=$(cat "${KEY_FILE}")
elif [ -f "public/${KEY_FILE#*.next/}" ]; then
  KEY=$(cat "public/${KEY_FILE#*.next/}")
fi

if [ -z "${KEY}" ]; then
  KEY=$(openssl rand -hex 16)
  mkdir -p "public/.well-known"
  echo "${KEY}" > "public/.well-known/${KEY}.txt"
  echo "      Key  : ${KEY}"
  echo "      Key file dibuat di public/.well-known/${KEY}.txt"
  echo "      (Wajib setelah deploy: key harus bisa diakses di ${SITE}/.well-known/${KEY}.txt)"
else
  echo "      Key  : ${KEY}"
fi

# Submit URL langsung via IndexNow API
if curl -sf --max-time 15 \
  "https://api.indexnow.org/indexnow?url=${KEY}&key=${KEY}" >/dev/null 2>&1; then
  : # ok, no-op (endpoint menerima HEAD-style query GET)
fi

curl -s --max-time 15 \
  -X POST \
  -H "Content-Type: application/json" \
  -d "{\"host\":\"bismacode.my.id\",\"key\":\"${KEY}\",\"keyLocation\":\"${SITE}/.well-known/${KEY}.txt\",\"urlList\":[\"${SITE}\",\"${SITE}/artikel\",\"${SITE}/artikel/website-modern\",\"${SITE}/artikel/webapp-saas\",\"${SITE}/artikel/dashboard\",\"${SITE}/artikel/ai-sales\",\"${SITE}/artikel/ai-customer-service\"]}" \
  -w "      HTTP %{http_code}\n" \
  "https://api.indexnow.org/indexnow"
echo ""

# 4) Bing sitemap submit
echo "[4/4] Ping Bing (bing.com/ping)..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 15 \
  "https://www.bing.com/ping?sitemap=${SITEMAP}")
echo "      HTTP ${HTTP_CODE}"
echo ""

echo "===== SELESAI ====="
echo ""
echo "CATATAN PENTING UNTUK GOOGLE:"
echo "1. Verifikasi kepemilikan domain di Google Search Console:"
echo "   https://search.google.com/search-console"
echo "   (Tambah property > Domain > bismacode.my.id > verifikasi via DNS TXT di Cloudflare)"
echo "2. Di Search Console: URL Inspection > https://bismacode.my.id > 'Request Indexing'"
echo "3. Submit sitemap: Sitemaps > https://bismacode.my.id/sitemap.xml > Submit"
echo "4. Google Indexing API (untuk konten job/broadcast) butuh service account;"
echo "   untuk situs normal cukup Search Console."