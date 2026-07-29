import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Albara Fahed Alharissy - Junior C#/.NET Backend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#08132F", color: "white", padding: "70px", position: "relative" }}>
      <div style={{ position: "absolute", width: 550, height: 550, borderRadius: "50%", background: "rgba(36, 230, 255, 0.12)", right: -130, top: -180 }} />
      <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#24E6FF", fontSize: 22, letterSpacing: 5 }}><span style={{ display: "flex", width: 46, height: 46, borderRadius: 10, alignItems: "center", justifyContent: "center", color: "#08132F", background: "#24E6FF", letterSpacing: 0, fontWeight: 700 }}>AF</span> ALBARA.DEV</div>
      <div style={{ display: "flex", flexDirection: "column" }}><div style={{ fontSize: 78, fontWeight: 700, letterSpacing: -4 }}>Albara Fahed Alharissy</div><div style={{ marginTop: 20, color: "#24E6FF", fontSize: 34 }}>Junior C#/.NET Backend Developer</div></div>
      <div style={{ color: "#B7C2D9", fontSize: 24 }}>ASP.NET Core · Entity Framework Core · SQL Server</div>
    </div>,
    size,
  );
}
