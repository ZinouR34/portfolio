import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = site.title;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#F8F6F2",
          color: "#18120D",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "18px",
              background: "#F5A623",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: 800,
              color: "#18120D",
            }}
          >
            ZY
          </div>
          <div style={{ fontSize: "28px", fontWeight: 700 }}>Portfolio</div>
        </div>
        <div style={{ fontSize: "68px", fontWeight: 800, lineHeight: 1.1 }}>{site.name}</div>
        <div style={{ marginTop: "24px", fontSize: "32px", color: "#6F665A" }}>
          Master&apos;s Student in Computer Science · Networks & Distributed Systems
        </div>
        <div
          style={{
            marginTop: "48px",
            display: "flex",
            gap: "12px",
          }}
        >
          {["Software Engineer", "Backend Developer", "Network Engineer", "AI Enthusiast"].map(
            (role) => (
              <div
                key={role}
                style={{
                  padding: "12px 24px",
                  borderRadius: "999px",
                  background: "#F5A623",
                  color: "#18120D",
                  fontSize: "22px",
                  fontWeight: 700,
                }}
              >
                {role}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
