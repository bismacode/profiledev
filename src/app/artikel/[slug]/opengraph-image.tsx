import { ImageResponse } from "next/og";
import { getService } from "@/data/services";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050510",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #00f0ff, #a855f7)",
              fontSize: "40px",
              color: "#050510",
              fontWeight: "bold",
            }}
          >
            &lt;/&gt;
          </div>
          <div style={{ fontSize: "48px", fontWeight: "bold", color: "#00f0ff" }}>
            Wu Ma Dev
          </div>
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#ffffff",
            textAlign: "center",
            padding: "0 60px",
          }}
        >
          {service?.title}
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#7a7aa0",
            marginTop: "20px",
            textAlign: "center",
            padding: "0 100px",
          }}
        >
          {service?.tagline}
        </div>
      </div>
    ),
    size
  );
}
