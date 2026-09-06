export const dynamic = "force-static";

export default function manifest() {
  return {
    name: "Wu Ma Dev",
    short_name: "WuMaDev",
    description:
      "Jasa pembuatan website, webapp, dashboard, AI sales & AI customer service modern.",
    start_url: "/",
    display: "standalone",
    background_color: "#050510",
    theme_color: "#050510",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
